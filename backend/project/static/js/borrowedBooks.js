

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


