
// Get the last modified date and set it to the "lastModified" element
const lastModifiedDate = new Date(document.lastModified).toLocaleString();
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;



const nav = document.querySelector('.navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuButton.classList.toggle('show');
})

document.addEventListener('DOMContentLoaded', function () {
    // Check if localStorage is supported
    if (typeof Storage !== 'undefined') {
        // Get the current date
        var currentDate = new Date().toDateString();

        // Check if the user has visited before
        if (localStorage.getItem('lastVisitDate')) {
            // Get the stored visit date from localStorage
            var storedDate = localStorage.getItem('lastVisitDate');

            // Calculate the difference in days
            var timeDifference = Math.floor((Date.parse(currentDate) - Date.parse(storedDate)) / (24 * 60 * 60 * 1000));

            // Display the appropriate message based on the time difference
            var message = '';
            if (timeDifference === 0) {
                message = 'Back so soon! Awesome!';
            } else if (timeDifference === 1) {
                message = 'You last visited 1 day ago.';
            } else {
                message = 'You last visited ' + timeDifference + ' days ago.';
            }

            // Set the content for the website visit heading and message
            var websiteVisitHeading = document.getElementById('websiteVisitHeading');
            var websiteVisitMessage = document.getElementById('websiteVisitMessage');
            websiteVisitMessage.textContent = message;

        } else {
            // If it's the user's first visit, display a welcome message
            var welcomeMessage = 'Welcome! Let us know if you have any questions.';
            var websiteVisitHeading = document.getElementById('websiteVisitHeading');
            var websiteVisitMessage = document.getElementById('websiteVisitMessage');
            websiteVisitHeading.textContent = 'Website Visit';
            websiteVisitMessage.textContent = welcomeMessage;
        }

        // Store the current visit date in localStorage
        localStorage.setItem('lastVisitDate', currentDate);
    }
});

