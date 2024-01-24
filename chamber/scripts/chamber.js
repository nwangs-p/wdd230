
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