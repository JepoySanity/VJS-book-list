class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//create new instance of UI class (UIclass.js)
let ui = new UI();
let store = new Store();
//list books on load
document.addEventListener("DOMContentLoaded", Store.displayBooks());
//event listener for form submit
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let bookTitle = document.getElementById("title").value,
    bookAuthor = document.getElementById("author").value,
    bookIsbn = document.getElementById("isbn").value;

  let validateInput = ui.validateInput(bookTitle, bookAuthor, bookIsbn);

  if (validateInput === true) {
    let book = new Book(bookTitle, bookAuthor, bookIsbn);
    Store.storeBook(book);
    ui.addBooktoList(book);
    ui.formReset();
    ui.showMessage("success", "Book added");
    ui.hideMessage(".alert");
  } else {
    ui.showMessage("danger", "Please fill up the necessary fields");
    ui.hideMessage(".alert");
  }
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  e.preventDefault();
  ui.removeBookToList(e);
  Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
  ui.showMessage("success", "book removed");
  ui.hideMessage(".alert");
});
