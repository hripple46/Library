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
Book.prototype.addBookToArray = function () {
  myLibrary.push(this);
};

//pre-made book objects for testing

//main function for adding books to webpage
function addBookToLibrary() {
  console.log("Click!");

  //resetting webpage
  let existingCards = document.querySelectorAll(".libraryCard");
  existingCards.forEach((libraryCard) => {
    libraryCard.remove();
  });

  //reset array
  myLibrary = [];
  //pre-made book objects for testing
  book1.addBookToArray();
  book2.addBookToArray();

  for (let i in myLibrary) {
    let body = document.querySelector(".library");
    let libraryCard = document.createElement("div");
    libraryCard.setAttribute("class", "libraryCard");
    libraryCard.setAttribute("id", `${[i]}`);

    //looping oeach book object to obtain properties
    for (let key in myLibrary[i]) {
      if (key != "addBookToArray") {
        console.log(key);
        let bookProperty = document.createElement("p");
        bookProperty.innerText = myLibrary[i][key];
        libraryCard.appendChild(bookProperty);
      } else {
        break;
      }
    }
    //adding book to webpage
    body.appendChild(libraryCard);
  }
}

//event listener for submission to display books
let button = document.querySelector("#buttonClick");
button.addEventListener("click", () => {
  addBookToLibrary();
});
