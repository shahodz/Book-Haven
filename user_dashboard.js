// Function to load user_Books.html content
function loadViewBooksContent() {
    fetch("user_Books.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".main").innerHTML = data;
        });
}

// Function to load user_books.html content
function loadBorrowBookContent() {
    fetch("user_books.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".main").innerHTML = data;
        });
}

// Function to load borrowed_books.html content
function loadBorrowedBooksContent() {
    fetch("borrowed_books.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".main").innerHTML = data;
        });
}

// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Event listeners for feature buttons
    document.querySelector("#loadViewBooks").addEventListener("click", function() {
        loadViewBooksContent();
    });

    document.querySelector("#loadBorrowBook").addEventListener("click", function() {
        loadBorrowBookContent();
    });

    document.querySelector("#loadBorrowedBooks").addEventListener("click", function() {
        loadBorrowedBooksContent();
    });
});
