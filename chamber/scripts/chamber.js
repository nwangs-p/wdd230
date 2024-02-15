
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

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cardview");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}



//Calling our members API for discovery page data folder we created and pushed to github

//Declearing varables
// Get the ul element
let baseURL = "https://nwangs-p.github.io/wdd230/";

let linksURL = "chamber/data/members.json"

const mainCard = document.querySelector(".cardview");


const showMembers = (members) => {
    members.forEach((members) => {

        const section = document.createElement("section");

        const img = document.createElement("img");
        img.setAttribute('src', members.image);
        img.setAttribute('alt', `img of ${members.name}`); 

        const h4 = document.createElement("h4");
        h4.innerHTML = members.name;

        const span = document.createElement("span");
        span.innerHTML = `, ${members.level}`;

        const para1 = document.createElement("p");
        para1.textContent = members.address;

        const para2 = document.createElement("p");
        para2.textContent = members.country;

        const para3 = document.createElement("p");
        para3.textContent = members.phone;

        const para4 = document.createElement("p");
        para4.textContent = members.url;

        h4.append(span);

        section.append(img, h4, para1, para2, para3, para4);
        mainCard.appendChild(section);

    });
}




const getMembers = async() => {
    try{

        const response = await fetch(baseURL + linksURL)
        if(response.ok)
        {
            const data = await response.json();
            //console.log(data);
            showMembers(data.members);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch(error){
        //console.log(error);
    }
}

getMembers();


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("review");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active1";
}