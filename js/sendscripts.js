document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        easing: 'ease-in-out', // Tipo de easing
        once: true // Si la animación debe ocurrir solo una vez
    });

    const backToTop = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('.section');
    const images = document.querySelectorAll('.photo-gallery img');

    // Mostrar u ocultar el botón "back to top" basado en el scroll
    window.addEventListener('scroll', function() {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Desplazarse suavemente hacia arriba al hacer clic en el botón "back to top"
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer para animaciones al entrar en vista
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
    images.forEach(image => observer.observe(image));

    // Inicializar Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});