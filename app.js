class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBooktoList(book) {
    const table = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="">delete</a></td>
    `;
    table.appendChild(row);
  }
}

//event listener for form submit
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let bookTitle = document.getElementById("title").value,
    bookAuthor = document.getElementById("author").value,
    bookIsbn = document.getElementById("isbn").value;

  let book = new Book(bookTitle, bookAuthor, bookIsbn);
  let ui = new UI();
  ui.addBooktoList(book);
});
