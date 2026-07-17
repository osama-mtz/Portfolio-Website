/* =========================================
   1. MOBILE MENU TOGGLE
   ========================================= */

// Grab the button and the nav menu from the HTML using their id
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// When the hamburger button is clicked, toggle the "active" class
// on the nav menu. CSS uses .active to show/hide it on mobile.
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Optional: close the menu automatically when a link is clicked
// (useful on mobile so the menu doesn't stay open after navigating)
const allNavLinks = navLinks.querySelectorAll("a");

allNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});


/* =========================================
   2. CONTACT FORM VALIDATION
   ========================================= */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {

  // Stop the form from actually submitting / reloading the page
  event.preventDefault();

  // Get the values typed into each field, and trim extra spaces
  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();

  // Simple check: make sure nothing is empty
  if (nameValue === "" || emailValue === "" || messageValue === "") {
    formStatus.textContent = "Please fill in all fields before sending.";
    return; // stop here, don't continue
  }

  // Simple check: email must contain "@" and "."
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    formStatus.textContent = "Please enter a valid email address.";
    return;
  }

  // If everything passed, show a success message
  formStatus.textContent = "Thanks " + nameValue + "! Your message has been received.";

  // Clear the form fields
  contactForm.reset();
});


/* =========================================
   3. AUTO-UPDATE FOOTER YEAR
   ========================================= */

// Find the <span id="year"> in the footer and fill it
// with the current year, so you never have to update it by hand.
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
