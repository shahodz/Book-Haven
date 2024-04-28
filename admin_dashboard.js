// Function to load add_book.html content
function loadAddBookContent() {
    $.ajax({
        url: "add_book.html",
        success: function(response) {
            $(".main").html(response);
        }
    });
}

// Function to load view_books.html content
function loadViewBooksContent() {
    $.ajax({
        url: "view_books.html",
        success: function(response) {
            $(".main").html(response);
        }
    });
}

// Function to load edit_books.html content
function loadEditBooksContent() {
    $.ajax({
        url: "edit_books.html",
        success: function(response) {
            $(".main").html(response);
        }
    });
}

// Function to load delete_books.html content
function loadDeleteBooksContent() {
    $.ajax({
        url: "delete_books.html",
        success: function(response) {
            $(".main").html(response);
        }
    });
}

// Wait for the document to be ready
$(document).ready(function() {
    // Event listeners for feature buttons
    $("#loadAddBook").click(function() {
        loadAddBookContent();
    });

    $("#loadViewBooks").click(function() {
        loadViewBooksContent();
    });

    $("#loadEditBooks").click(function() {
        loadEditBooksContent();
    });

    $("#loadDeleteBooks").click(function() {
        loadDeleteBooksContent();
    });
});
