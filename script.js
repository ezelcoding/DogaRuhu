// JavaScript for Search Functionality and Contact Form

// Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('#searchBar');
    const searchButton = document.querySelector('#searchButton');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim();
        if (query) {
            alert(`Searching for: ${query}`); // Replace with actual search logic
        } else {
            alert('Please enter a search term.');
        }
    });
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.querySelector('#contactName').value.trim();
        const email = document.querySelector('#contactEmail').value.trim();
        const message = document.querySelector('#contactMessage').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for contacting us!');
        contactForm.reset(); // Reset the form after submission
    });
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
