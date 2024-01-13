// Get the current year and set it to the "year" element
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("year");
yearElement.textContent = currentYear;

// Get the last modified date and set it to the "lastModified" element
const lastModifiedDate = new Date(document.lastModified).toLocaleString();
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;