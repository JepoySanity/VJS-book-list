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
  //form validator
  validateInput(title, author, isbn) {
    if (title == "" || author == "" || isbn == "") {
      return false;
    } else {
      return true;
    }
  }
  //alert message
  showMessage(alertType, msg) {
    let messageEl = document.getElementById("message");
    let alertEl = document.createElement("div");
    alertEl.className = `alert alert-${alertType}`;
    alertEl.textContent = msg;

    messageEl.appendChild(alertEl);
  }
  //hide alert message
  hideMessage(elSelector) {
    setTimeout(function () {
      document.querySelector(elSelector).remove();
    }, 3000);
  }
}
