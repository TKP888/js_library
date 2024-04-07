function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
};

Book.prototype.getDetails = function(){
    return this.title +' by '+ this.author +', '+ this.pages+', '+ this.read+'.';
}

const book1 = new Book('The Hobbit', "J.R.R. Tolkien", "295 pages", "not read yet");
const book2 = new Book('Fourth Wing', 'Rebecca Yarros', '651 pages', 'mid-read');

console.log(book1);

console.log(book2.getDetails());