// @ts-check

let myLibrary = [];

class Book {
  /**
   * @param {String} title
   * @param {String} author
   * @param {Number} pages
   * @param {Boolean} read
   */
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  if (
    // @ts-ignore
    document.getElementById("title").value === "" ||
    // @ts-ignore
    document.getElementById("author").value === "" ||
    // @ts-ignore
    document.getElementById("pages").value === ""
  ) {
    alert("Please fill in all fields");
  } else {
    // @ts-ignore
    let title = document.getElementById("title").value;
    // @ts-ignore
    let author = document.getElementById("author").value;
    // @ts-ignore
    let pages = document.getElementById("pages").value;
    // @ts-ignore
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    closeForm();
    displayLibrary();
    // @ts-ignore
    document.getElementById("newBookForm").reset();
  }
}

function displayLibrary() {
  let library = document.getElementById("library");
  // @ts-ignore
  library.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    // @ts-ignore
    library.innerHTML += `<div class="book">
	<h3>${myLibrary[i].title}</h3>
	<p>${myLibrary[i].author}</p>
	<p>${myLibrary[i].pages} pages</p>
	<p>${myLibrary[i].read ? "Read" : "Unread"}</p>
  <button onclick="deleteBook(${i})">Delete</button>
  <button onclick="changeReadStatus(${i})">${
      myLibrary[i].read ? "Unread" : "Read"
    }</button>
  </div>`;
  }
}

/**
 * @param {number} index
 */
function changeReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary();
}

/**
 * @param {number} index
 */
function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function openForm() {
  // @ts-ignore
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  // @ts-ignore
  document.getElementById("myForm").style.display = "none";
}
