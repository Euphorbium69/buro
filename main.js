document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Atvērt/Aizvērt izvēlni
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Novērš lapas skrollingu, kad izvēlne ir vaļā
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Aizvērt izvēlni, kad uzklikšķina uz saites
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Header fona maiņa skrollējot
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});