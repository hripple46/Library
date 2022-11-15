let myLibrary = [];

//preset book objects to test program
let book1 = new Book("Harry Potter", "JK Rowling", "320", "Have Read");
let book2 = new Book("The Hobbit", "JRR Tolkien", "1000", "Have Not Read");

//book constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

//prototype function that will add the book object to the global array when called
Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};

book1.addBookToLibrary();
book2.addBookToLibrary();
console.log(myLibrary);
for (let i in myLibrary) {
  console.log(myLibrary[i]);
}
