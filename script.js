
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead() {
        this.read = !this.read;
    }
}


let myLibrary = [];



function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "bookCard");
        bookEl.innerHTML = `
        
        <div class="cardHeader">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">${book.author}</h5>
        </div>
        <div class="cardBody">
        <p>${book.pages} pages</p>
        <p class="readStatus">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="removeBtn" onclick="removeBook(${i})">Remove</button>
        <button class="toggleReadBtn" onclick="toggleRead(${i})">Toggle Read</button>
        </div>     
            `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
myLibrary.splice(index, 1);
render();
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

let newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener("click", function () {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "grid";
});

 

document.querySelector("#newBookForm").addEventListener("submit", function (event) {
    event.preventDefault();
       let title = document.querySelector("#title").value;
       let author = document.getElementById("author").value;
       let pages = document.getElementById("pages").value;
       let read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
});
