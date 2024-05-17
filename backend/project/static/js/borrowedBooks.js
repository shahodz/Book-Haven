// Array of book objects
const books1 = [
    {
        title: "The Book Thief (2005)",
        author: "Markus Zusak",
        section: "Historical Fiction",
        borrowedDate: "3/10/2024",
        dueDate: "3/17/2024",
        cover: "book_covers/historical_1.jpg"
    },
    {
        title: "Gone Girl (2012)",
        author: "Gillian Flynn",
        section: "Mystery",
        borrowedDate: "3/10/2024",
        dueDate: "3/17/2024",
        cover: "book_covers/mystery_3.jpg"
    },
    {
        title: "Dune (1965)",
        author: "Frank Herbert",
        section: "Science Fiction",
        borrowedDate: "3/10/2024",
        dueDate: "3/17/2024",
        cover: "book_covers/sciencefiction_1.jpg"
    }
];
localStorage.setItem('books1', JSON.stringify(books1));
const booksLS = JSON.parse(localStorage.getItem('books1'));

// Function to display books on the webpage
function displayBooks() {
    const booksContainer = document.getElementById("books-container");

    // Loop through each book and create HTML elements to display them
    booksLS.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        // Create and set title element
        const title = document.createElement("h3");
        title.textContent = book.title;

        // Create and set image element
        const image = document.createElement("img");
        image.src = book.cover;
        image.alt = book.title;
        image.width = 150;
        image.height = 220;
        image.classList.add("images");

        // Create details list element
        const details = document.createElement("ul");
        details.classList.add("details");

        // Create and set author, section, borrowedDate, and dueDate elements
        const author = document.createElement("li");
        author.innerHTML = `<b>Author :</b> ${book.author}`;

        const section = document.createElement("li");
        section.innerHTML = `<b>Section :</b> ${book.section}`;

        const borrowedDate = document.createElement("li");
        borrowedDate.innerHTML = `<b>Borrowed Date :</b> ${book.borrowedDate}`;

        const dueDate = document.createElement("li");
        dueDate.innerHTML = `<b>Due Date :</b> ${book.dueDate}`;

        // Create drop-off button element
        const dropOffButton = document.createElement("li");
        dropOffButton.innerHTML = `<button class="buttons"> Book Drop-off </button>`;

        // Create renew button element
        const renewButton = document.createElement("li");
        renewButton.innerHTML = `<a href="book renewal.html" target="_blank"><button class="buttons">renew</button></a>`;

        // Append author, section, borrowedDate, dueDate, dropOffButton, and renewButton to details
        details.append(author, section, borrowedDate, dueDate, dropOffButton, renewButton);

        // Append title, image, and details to bookDiv
        bookDiv.append(title, image, details);

        // Append bookDiv to booksContainer
        booksContainer.appendChild(bookDiv);
    });
}

// Call the displayBooks function to display the books on the webpage
displayBooks();

// Function to switch the visibility of book details
function switchVisibility(details) {
    if (details.style.display === 'block') {
        details.style.display = 'none'; // Hide details if currently visible
    } else {
        hideAllInfo(); // Hide all book details
        details.style.display = 'block'; // Show clicked book's details
        details.style.animation = 'fadein 0.5s'; // Apply fade-in animation
        details.style.transition = 'opacity 0.5s'; // Apply opacity transition
        setTimeout(() => {
            details.style.opacity = 1; // Set opacity to 1 after animation
        }, 100);
    }
}

// Function to hide all book details
function hideAllInfo() {
    document.querySelectorAll('.details').forEach((details) => {
        details.style.display = 'none'; // Hide each book's details
        details.style.opacity = 0; // Set opacity to 0
        details.style.transition = 'none'; // Remove transition effect
        details.style.animation = 'none'; // Remove animation effect
    });
}

// Add click event listener to each book image to toggle visibility of details
document.querySelectorAll('.images').forEach((image) => {
    image.addEventListener('click', () => {
        const details = image.nextElementSibling; // Get details element next to clicked image
        switchVisibility(details); // Call switchVisibility to toggle visibility
    });
});
