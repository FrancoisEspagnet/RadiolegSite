// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Burger menu
const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
