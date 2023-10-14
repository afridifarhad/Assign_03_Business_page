// Get the current URL
var currentUrl = window.location.href;

// Find all <a> elements in the navigation menu
var navLinks = document.querySelectorAll("nav a");

// Loop through the links and check if the link's href matches the current URL
for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentUrl) {
        // If there's a match, add a "highlight" class to the link
        navLinks[i].classList.add("highlight");
        break; // Exit the loop once a match is found
    }
}



