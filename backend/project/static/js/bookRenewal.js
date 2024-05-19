window.onload = function () {
    var today = new Date();
    var maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 21); // Set maximum date to three weeks from today
    var dateInput = document.getElementById('date');
    dateInput.min = today.toISOString().split('T')[0]; // Set minimum date to today
    dateInput.max = maxDate.toISOString().split('T')[0]; // Set maximum date to three weeks from today
};

// array to validate the form
const books2 = [
    {
    title: "The Book Thief",
    author: "Markus Zusak",
    section: "Historical Fiction",
    borrowedDate: "3/10/2024",
    dueDate: "3/17/2024",
    cover: "book_covers/historical_1.jpg"
    },
    {
    title: "Gone Girl",
    author: "Gillian Flynn",
    section: "Mystery",
    borrowedDate: "3/10/2024",
    dueDate: "3/17/2024",
    cover: "book_covers/mystery_3.jpg"
    },
    {
    title: "Dune",
    author: "Frank Herbert",
    section: "Science Fiction",
    borrowedDate: "3/10/2024",
    dueDate: "3/17/2024",
    cover: "book_covers/sciencefiction_1.jpg"
    }
];
localStorage.setItem('books2', JSON.stringify(books2));
const booksLS2 = JSON.parse(localStorage.getItem('books2'));

// Function to validate the form
function validateForm() {
    // Get the form element by its ID
    const myForm = document.getElementById("bookForm"); 
    // Set an event listener for the form's submit event
    myForm.onsubmit = function(e) {
        // Get the values of the book title and author inputs, 
        //and trim any leading/trailing spaces
        const bookTitle = document.getElementById("book_name").value.trim();
        const author = document.getElementById("author").value.trim();
        let matchFound = false; 
// Loop through the books array to check 
//if the input values match any book title and author
        booksLS2.forEach(book => { 
            if (bookTitle.toLowerCase() === book.title.toLowerCase() && author.toLowerCase() === book.author.toLowerCase()) {
                matchFound = true;
            }
        });
        if (!matchFound) {
            e.preventDefault(); // Prevent default form submission
            window.alert("You can't renew a book without borrowing it!");
        } 
    };
}
validateForm(); // Call validateForm to bind the event
