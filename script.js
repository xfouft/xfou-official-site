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

// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 85;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        const mainNav = document.querySelector('.main-nav');
        if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
});

// --- Mobile Navigation Toggle (Hamburger Menu) ---
const Hamburger = document.querySelector('.hamburger-menu');
const mainnav = document.querySelector('.main-nav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// --- Project Inquiry Form Submission with Thank You Popup ---
const projectInquiryForm = document.querySelector('.project-inquiry-form');
const thankYouModal = document.getElementById('thankYouModal');
const closeButtons = document.querySelectorAll('.close-button, .modal-close-btn');

if (projectInquiryForm && thankYouModal) {
    projectInquiryForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // PREVENT DEFAULT PAGE REDIRECTION!

        const form = e.target;
        const formData = new FormData(form);
        const formspreeEndpoint = form.action; // Get the Formspree URL from HTML action attribute

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // Important for Formspree to return JSON
                }
            });

            if (response.ok) {
                // Form submitted successfully, show the popup
                thankYouModal.classList.add('show');
                form.reset(); // Clear the form fields
            } else {
                // Handle errors (e.g., show a generic error message)
                alert('Oops! There was a problem submitting your form. Please try again or contact us directly.');
                console.error('Form submission error:', response.statusText);
            }
        } catch (error) {
            alert('An error occurred. Please check your internet connection and try again.');
            console.error('Network or submission error:', error);
        }
    });

    // Close modal event listeners
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            thankYouModal.classList.remove('show');
        });
    });

    // Close modal if user clicks outside the modal content
    thankYouModal.addEventListener('click', (e) => {
        if (e.target === thankYouModal) {
            thankYouModal.classList.remove('show');
        }
    });
}

// --- Initialize AOS (Animate On Scroll) Library ---
// Ensure AOS library is loaded in index.html <head>
// <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
// And AOS JS is loaded at the end of <body> after script.js
// <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
// <script>AOS.init();</script> - This init is directly in index.html

// AOS initialization (already in index.html, but putting a reminder here)
// AOS.init({
//     duration: 1000,
//     once: true,
// });