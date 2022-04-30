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
      <td><a href="">delete</a></td>
    `;

    list.appendChild(row);
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
  UI.addBookToList(book);
  //clear form fields on submit
  UI.clearFields();
});
