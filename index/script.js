// Toggle Menu for Mobile Navigation
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
document.querySelector('header').appendChild(menuToggle);

const nav = document.querySelector('header nav ul');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('header nav ul li a');
links.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // Vérifie si le lien est une ancre interne (#section) ou un lien externe
        if (href.startsWith('#')) { 
            e.preventDefault(); // Empêche le comportement par défaut pour les ancres
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        }

        // Ferme le menu mobile après un clic (si applicable)
        nav.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});

// Scroll Animations for Sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('visible');
        }
    });
});

// Add "visible" class to the first section for initial animation
document.addEventListener('DOMContentLoaded', () => {
    sections[0].classList.add('visible');
});
