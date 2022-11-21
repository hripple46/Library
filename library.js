let myLibrary = [];

let selectedBookDelete = "";

let selectedBookToggle = "";

//book constructor
/*function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}*/

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
  addBookToArray() {
    myLibrary.push(this);
  }
}

//prototype function that will add the book object to the global array when called
/*Book.prototype.addBookToArray = function () {
  myLibrary.push(this);
};*/

//pre-made book objects for testing

//main function for adding books to webpage
function addBookToLibrary() {
  console.log("Click!");
  //adding test books on click
  let userReadStatus = "";
  let userInputTitle = document.querySelector("#titleInput");
  let userInputAuthor = document.querySelector("#authorInput");
  let userInputPages = document.querySelector("#pagesInput");
  if (document.getElementById("yes").checked) {
    userReadStatus = document.querySelector("#yes");
  } else {
    userReadStatus = document.querySelector("#no");
  }

  let newBook = new Book(
    userInputTitle.value,
    userInputAuthor.value,
    userInputPages.value,
    userReadStatus.value
  );
  //resetting webpage
  let existingCards = document.querySelectorAll(".libraryCard");
  existingCards.forEach((libraryCard) => {
    libraryCard.remove();
  });

  //reset array

  //pre-made book objects for testing

  newBook.addBookToArray();

  for (let i in myLibrary) {
    let body = document.querySelector(".library");
    let libraryCard = document.createElement("div");
    libraryCard.setAttribute("class", "libraryCard");
    libraryCard.setAttribute("id", `${[i]}`);

    //looping oeach book object to obtain properties
    for (let key in myLibrary[i]) {
      if (key != "addBookToArray") {
        let bookProperty = document.createElement("p");
        bookProperty.innerText = myLibrary[i][key];
        libraryCard.appendChild(bookProperty);
      } else {
        break;
      }
    }
    let toggleStatusBtn = document.createElement("button");
    toggleStatusBtn.setAttribute("class", "toggleBtn");
    toggleStatusBtn.setAttribute("id", `${[i]}toggle`);
    toggleStatusBtn.innerText = "Change Status";
    libraryCard.appendChild(toggleStatusBtn);
    toggleStatusBtn.onclick = function () {
      selectedBookToggle = `${[i]}`;
      toggleReadStatus();
    };

    //delete book card button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", `${[i]}`);
    deleteBtn.setAttribute("class", "deleteBtn");

    deleteBtn.innerText = "Remove";
    libraryCard.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      selectedBookDelete = `${[i]}`;

      deleteBookFun();
    });

    //adding book to webpage
    body.appendChild(libraryCard);
  }
  document.querySelector("#newBookForm").reset();
}

//event listener for submission to display books

//function to have button pop up form
let newBookBtn = document.querySelector("#newBook");
newBookBtn.addEventListener("click", () => {
  document.querySelector("#bookFormDiv").style.display = "block";
});

//function to hide form on button press
let submitForm = document.querySelector("#submitBtn");
submitForm.addEventListener("click", () => {
  document.querySelector("#bookFormDiv").style.display = "none";

  addBookToLibrary();
});

function deleteBookFun() {
  let deleteBook = document.querySelectorAll(".libraryCard");
  deleteBook.forEach((chosenBook) => {
    if (chosenBook.getAttribute("id") == selectedBookDelete) {
      myLibrary.splice(chosenBook.getAttribute("id"), 1);
      chosenBook.remove();
    }
  });

  //resetting webpage
  let existingCards = document.querySelectorAll(".libraryCard");
  existingCards.forEach((libraryCard) => {
    libraryCard.remove();
  });
  for (let i in myLibrary) {
    let body = document.querySelector(".library");
    let libraryCard = document.createElement("div");
    libraryCard.setAttribute("class", "libraryCard");
    libraryCard.setAttribute("id", `${[i]}`);

    //looping oeach book object to obtain properties
    for (let key in myLibrary[i]) {
      if (key != "addBookToArray") {
        let bookProperty = document.createElement("p");
        bookProperty.innerText = myLibrary[i][key];
        libraryCard.appendChild(bookProperty);
      } else {
        break;
      }
    }
    let toggleStatusBtn = document.createElement("button");
    toggleStatusBtn.setAttribute("class", "toggleBtn");
    toggleStatusBtn.setAttribute("id", `${[i]}toggle`);
    toggleStatusBtn.innerText = "Change Status";
    libraryCard.appendChild(toggleStatusBtn);
    toggleStatusBtn.onclick = function () {
      selectedBookToggle = `${[i]}`;
      toggleReadStatus();
    };
    //delete book card button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", `${[i]}`);
    deleteBtn.setAttribute("class", "deleteBtn");

    deleteBtn.innerText = "Remove";
    libraryCard.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      selectedBookDelete = `${[i]}`;

      deleteBookFun();
    });

    //adding book to webpage
    body.appendChild(libraryCard);
  }
}

function toggleReadStatus() {
  let bookList = document.querySelectorAll(".libraryCard");
  bookList.forEach((newStatus) => {
    if (newStatus.getAttribute("id") == selectedBookToggle) {
      let children = newStatus.childNodes;
      children.forEach((item) => {
        console.log(item.innerText);
        if (item.innerText == "Yes") {
          item.innerText = "No";
          myLibrary[selectedBookToggle].readStatus = "No";
        } else if (item.innerText == "No") {
          item.innerText = "Yes";
          myLibrary[selectedBookToggle].readStatus = "Yes";
        }
        console.log(item);
      });
    }
  });
  let existingCards = document.querySelectorAll(".libraryCard");
  existingCards.forEach((libraryCard) => {
    libraryCard.remove();
  });
  for (let i in myLibrary) {
    let body = document.querySelector(".library");
    let libraryCard = document.createElement("div");
    libraryCard.setAttribute("class", "libraryCard");
    libraryCard.setAttribute("id", `${[i]}`);

    //looping oeach book object to obtain properties
    for (let key in myLibrary[i]) {
      if (key != "addBookToArray") {
        let bookProperty = document.createElement("p");
        bookProperty.innerText = myLibrary[i][key];
        libraryCard.appendChild(bookProperty);
      } else {
        break;
      }
    }
    let toggleStatusBtn = document.createElement("button");
    toggleStatusBtn.setAttribute("class", "toggleBtn");
    toggleStatusBtn.setAttribute("id", `${[i]}toggle`);
    toggleStatusBtn.innerText = "Change Status";
    libraryCard.appendChild(toggleStatusBtn);
    toggleStatusBtn.onclick = function () {
      selectedBookToggle = `${[i]}`;
      toggleReadStatus();
    };
    //delete book card button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", `${[i]}`);
    deleteBtn.setAttribute("class", "deleteBtn");

    deleteBtn.innerText = "Remove";
    libraryCard.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      selectedBookDelete = `${[i]}`;

      deleteBookFun();
    });

    //adding book to webpage
    body.appendChild(libraryCard);
  }
}
