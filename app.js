//Book class: representsbook
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI class: handdle ui task
class UI {
  static displayBooks() {
    let storedBooks = [
      {
        title: "First Book",
        author: "John Doe",
        isbn: "6123466",
      },
      {
        title: "Second Book",
        author: "John Doe",
        isbn: "25551121",
      },
    ];
    let books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }
  //append to new book to tbody
  static addBookToList(book) {
    let list = document.querySelector("#book-list");
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="" class="delete-book">delete</a></td>
    `;

    list.appendChild(row);
  }
  //ui form validate
  static checkInput() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    if (title.length == "" || author.length == "" || isbn.length == "") {
      return true;
    }
  }
  //remove book
  static deleteBook(el) {
    if (el.classList.contains("delete-book")) {
      el.parentElement.parentElement.remove();
    }
  }

  //clearfield function on submit
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}
// display books on load
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// store books
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  //instantiate book class
  let book = new Book(title, author, isbn);
  if (UI.checkInput() == true) {
    alert("fill up the necessary fields");
  } else {
    UI.addBookToList(book);
    UI.clearFields();
  }
});
//remove book
document.querySelector("#book-list").addEventListener("click", (e) => {
  e.preventDefault();
  //delete book function
  UI.deleteBook(e.target);
});
//on key up event listener
document.querySelector("#filter").addEventListener("keyup", filterInput);

function filterInput(e) {
  const filterText = e.target.value.toLowerCase();
  document.querySelectorAll("#book-list").forEach(function (book) {
    const item = book.firstChild.textContent;
    if (item.toLowerCase().indexOf(filterText) != -1) {
      console.log("show");
    } else {
      console.log("hide");
    }
  });
}
