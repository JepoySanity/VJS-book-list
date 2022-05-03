class Store {
  static getBooks() {
    let books;
    //check if localstorage is empty
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static storeBook(book) {
    let books = this.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static displayBooks() {
    const storedBooks = Store.getBooks();
    storedBooks.forEach(function (book) {
      const ui = new UI();
      ui.addBooktoList(book);
    });
  }
}
