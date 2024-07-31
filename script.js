const form = document.getElementById("newBookForm");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    form.reset();
    form.style.display = "none"; // Hide form after submission
  }
});

function validateForm() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let messages = [];
  if (title === "" || title == null) {
    messages.push("Title is required");
  }
  if (author === "" || author == null) {
    messages.push("Author is required");
  }
  if (pages === "" || pages == null) {
    messages.push("Pages is required");
  }
  if (messages.length > 0) {
    errorMessage.innerText = messages.join(", ");
    return false;
  } else {
    errorMessage.innerText = ""; // Clear error messages if valid
    return true;
  }
}

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

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
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
