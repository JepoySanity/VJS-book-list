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
    let books = crd.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }
  //append to new book to tbody
  static addBookToList(book) {
    let list = document.querySelector("#book-list");
    let row = document.createElement("tr");
    row.className = "book-row";

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
  //filter result
  static filterBooks(e) {
    const filterText = e.target.value.toLowerCase();
    document.querySelectorAll(".book-row").forEach(function (book) {
      const bookItem = book.textContent;
      if (bookItem.toLowerCase().indexOf(filterText) != -1) {
        book.style.display = "";
      } else {
        book.style.display = "none";
      }
    });
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
//crud class
class crd {
  static getBooks() {
    let storedBooks = localStorage.getItem("books");
    let books;
    if (storedBooks === null) {
      books = [];
    } else {
      books = JSON.parse(storedBooks);
    }
    return books;
  }
  static storeBook(book) {
    let storedBooks = crd.getBooks();
    storedBooks.push(book);
    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
  static removeBook(isbn) {
    let storedBooks = crd.getBooks();
    storedBooks.forEach(function (book, index) {
      if (book.isbn === isbn) {
        storedBooks.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(storedBooks));
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
  if (UI.checkInput()) {
    alert("fill up the necessary fields");
  } else {
    UI.addBookToList(book);
    crd.storeBook(book);
    UI.clearFields();
  }
});
//remove book
document.querySelector("#book-list").addEventListener("click", (e) => {
  e.preventDefault();
  UI.deleteBook(e.target);
  crd.removeBook(e.target.parentElement.previousElementSibling.textContent());
});
//filter keyup event
document.querySelector("#filter").addEventListener("keyup", UI.filterBooks);
