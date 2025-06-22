// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Adjust scroll position for fixed header (approx 85px height)
            const headerOffset = 85; // Height of your sticky header
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        // Close mobile nav after clicking a link if it's open
        const mainNav = document.querySelector('.main-nav');
        if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
});

// --- Mobile Navigation Toggle (Hamburger Menu) ---
const hamburger = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburger && mainNav) { // Check if elements exist before attaching listener
    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// --- Project Inquiry Form Submission ---
const projectInquiryForm = document.querySelector('.project-inquiry-form');

if (projectInquiryForm) { // Check if the form element exists on the page
    projectInquiryForm.addEventListener('submit', function(e) {
        // Formspree handles the actual submission and redirection to _next URL.
        // We just provide an alert for user feedback.

        alert('Your project inquiry has been sent to XFOU! We will get back to you within 24 hours. Thank you!');

        projectInquiryForm.reset(); // Clear the form fields after submission
    });
}

// --- Initialize AOS (Animate On Scroll) Library ---
// Ensure AOS library is loaded in index.html <head>
// <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
// And AOS JS is loaded at the end of <body> after script.js
// <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
// <script>AOS.init();</script> - This init is directly in index.html