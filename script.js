

let myLibrary = [];



function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
};

// Book.prototype.getDetails = function(){
//     return this.title +' by '+ this.author +', '+ this.pages+', '+ this.read+'.';
// }

// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
// const book2 = new Book('Fourth Wing', 'Rebecca Yarros', '651 pages', 'mid-read');

// console.log(book1);

// console.log(book2.getDetails());

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

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

function addBookToLibrary() {
    // do stuff here
let title = document.querySelector("#title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").checked;
let newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);
render();

  }

  let newBookBtn =  document.querySelector("#newBookBtn");
  newBookBtn.addEventListener ("click", function() {

    let newBookForm = document.querySelector("#newBookForm");
    console.log(newBookForm);
    newBookForm.style.display = "grid";
})

document.querySelector("#newBookForm").addEventListener("submit", function(event){
event.preventDefault();
addBookToLibrary();

})
