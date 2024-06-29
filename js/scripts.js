// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // Smooth scrolling using jQuery easing
    const navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;

                window.scroll({
                    top: document.querySelector(hash).offsetTop - 70,
                    behavior: "smooth"
                });

                // Add hash to URL after scroll
                window.location.hash = hash;
            }
        });
    });

    // Collapse the navbar when page is scrolled
    const navbar = document.querySelector('#mainNav');
    const navbarCollapse = function() {
        if (navbar.offsetTop > 100) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    window.addEventListener('scroll', navbarCollapse);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.querySelector('body');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', function() {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
