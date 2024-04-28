import { book } from "./arrayOfBooks.js";
const books = JSON.parse(localStorage.getItem("book_items")) || [];

//let b = JSON.parse(localStorage.getItem("book_items"));

//const button = document.getElementById("confirmAdd");
// button.addEventListener("click", function () {
//   alert("Book is added successfully!");
//   window.location.href = "adminBooks.html";
// });
//function handleSubmit(event) {
//event.preventDefault();

// document
//   .getElementById("confirmAdd")
//   .addEventListener("click", function (event) {
document
  .getElementById("confirmAdd")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bookData = {
      nam: document.getElementById("name").value,
      auth: document.getElementById("author").value,
      desc: document.getElementById("description").value,
      publisher: document.getElementById("Publisher").value,
      ISBN: document.getElementById("isbn").value,
      gen: document.getElementById("genre").value,
      lang: document.getElementById("language").value,
      edi: document.getElementById("edition").value,
      dat: document.getElementById("date").value,
      img: document.getElementById("cover").files[0],
    };
    // const nam = document.getElementById("name").value;
    // const auth = document.getElementById("author").value;
    // const desc = document.getElementById("description").value;
    // const ISBN = document.getElementById("isbn").value;
    // const publisher = document.getElementById("Publisher").value;
    // const gen = document.getElementById("genre").value;
    // const lang = document.getElementById("language").value;
    // const edi = document.getElementById("edition").value;
    // const dat = document.getElementById("date").value;
    // const img = document.getElementById("cover").files[0];

    // localStorage.setItem("book_name", nam);
    // localStorage.setItem("book_author", auth);
    // localStorage.setItem("book_description", desc);
    // localStorage.setItem("book_ISBN", ISBN);
    // localStorage.setItem("book_publisher", publisher);
    // localStorage.setItem("book_genre", gen);
    // localStorage.setItem("book_language", lang);
    // localStorage.setItem("book_edition", edi);
    // localStorage.setItem("book_date", dat);

    const newBook = new book(
      bookData.nam,
      bookData.auth,
      bookData.img,
      bookData.desc,
      bookData.dat,
      bookData.publisher,
      bookData.ISBN,
      bookData.edi,
      bookData.gen,
      bookData.lang,
      true
    );
    // let b = JSON.parse(localStorage.getItem("book_items")) || [];

    books.push(newBook);
    localStorage.setItem("book_items", JSON.stringify(books));
    console.log(books);
  });

function myFunc() {
  if (confirm("Are you sure you want to reset input fields?")) {
    return true;
  }
  return false;
}
