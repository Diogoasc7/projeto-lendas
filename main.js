document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');

    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('bg-dark');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.add('bg-transparent');
        }
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[data-target]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});