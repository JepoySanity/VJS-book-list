class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  //add book to table body
  addBooktoList(book) {
    const table = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.className = "book-entry";

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="" class="delete-book">delete</a></td>
    `;
    table.appendChild(row);
  }
  removeBookToList(e) {
    if (e.target.className === "delete-book") {
      e.target.parentElement.parentElement.remove();
    }
  }
  //form reset
  formReset() {
    let titleInput = document.getElementById("title");
    let authorInput = document.getElementById("author");
    let isbnInput = document.getElementById("isbn");

    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
  }
  validateInput(title, author, isbn) {
    if (title == "" || author == "" || isbn == "") {
      return false;
    } else {
      return true;
    }
  }
}

//event listener for form submit
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let bookTitle = document.getElementById("title").value,
    bookAuthor = document.getElementById("author").value,
    bookIsbn = document.getElementById("isbn").value;

  let ui = new UI();
  let validateInput = ui.validateInput(bookTitle, bookAuthor, bookIsbn);

  if (validateInput === true) {
    let book = new Book(bookTitle, bookAuthor, bookIsbn);
    ui.addBooktoList(book);
    ui.formReset();
  } else {
    alert("please fill up all the necessary fields");
  }
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  e.preventDefault();
  ui = new UI();
  ui.removeBookToList(e);
});
