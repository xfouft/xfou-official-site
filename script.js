// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Adjust scroll position for fixed header (approx 80px height from CSS)
            window.scrollTo({
                top: targetElement.offsetTop - 80,
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

// --- Dummy Project Inquiry Form Submission ---
const projectInquiryForm = document.querySelector('.project-inquiry-form');

if (projectInquiryForm) { // Check if the form element exists on the page
    projectInquiryForm.addEventListener('submit', function(e) {
        // IMPORTANT: For Formspree to work, you generally don't use e.preventDefault()
        // if you want Formspree to handle the redirect to _next URL automatically.
        // However, for adding a custom alert *before* redirect, you can use it.
        // If you remove preventDefault(), Formspree will handle the submission and redirect.

        // e.preventDefault(); // Uncomment if you want to prevent default form submission and manage redirection manually

        // This alert is for immediate user feedback on the demo.
        alert('Your project inquiry has been sent to XFOU! We will get back to you within 24 hours. Thank you!');

        // If you uncommented e.preventDefault(), you would manage redirection here,
        // or rely solely on Formspree's action attribute to handle the redirect.
        // For Formspree's standard functionality, the form action handles the post and redirect.

        projectInquiryForm.reset(); // Clear the form fields after submission
    });
}