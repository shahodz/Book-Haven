import { book, books } from './arrayOfBooks.js';

let b = JSON.parse(localStorage.getItem("book_items"));
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.book_details_container');

    const params = new URLSearchParams(window.location.search);
    const bookIndex = params.get('book');

    if (bookIndex !== null && bookIndex >= 0 && bookIndex < b.length) {
        const selectedBook = b[bookIndex];

        document.getElementById('book_name').textContent = selectedBook.name;
        document.getElementById('book_author').textContent = selectedBook.author;
        document.getElementById('book_description').textContent = selectedBook.description;
        document.getElementById('book_year').textContent = selectedBook.year;
        document.getElementById('book_publisher').textContent = selectedBook.publisher;
        document.getElementById('book_isbn').textContent = selectedBook.ISBN;
        document.getElementById('book_edition').textContent = selectedBook.edition;
        document.getElementById('book_genre').textContent = selectedBook.genre;
        document.getElementById('book_language').textContent = selectedBook.language;
        document.getElementById('book_image').src = selectedBook.image;

        const borrowButton = document.getElementById('borrowButton');

        // borrowButton.addEventListener('click', function() {
        //     selectedBook.available = false;
        //     borrowButton.disabled = true;

        //     localStorage.setItem("books", JSON.stringify(books));
        // });
    } else {

        container.innerHTML = '<p>Error: Book not found</p>';
    }
});

