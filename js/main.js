document.addEventListener('DOMContentLoaded', function() {
    
        // Función de WhatsApp
    window.redirectToWhatsApp = function() {
        const phoneNumber = '946978919'; // Número de teléfono
        const message = 'Hola, nos interesa tus servicios. ¿Podrías ayudarnos?';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank'); // Cambiar window.location por window.open
    };
    
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    // Configuración de TypeWriter
    const typeWriterElements = document.querySelectorAll('.typewriter');
    typeWriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Iniciar efecto cuando el elemento es visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });


    // Configuración de la previsualización de imágenes
    const imagePreview = document.createElement('div');
    imagePreview.id = 'image-preview';
    imagePreview.className = 'image-preview';
    imagePreview.innerHTML = `
        <div class="image-preview-container">
            <span class="close-btn">&times;</span>
            <img id="image-preview-content" class="preview-image" src="" alt="Preview">
        </div>
    `;
    document.body.appendChild(imagePreview);

    // Manejo de previsualización de imágenes
    const previewImage = document.getElementById('image-preview-content');
    const closeBtn = imagePreview.querySelector('.close-btn');
    const cards = document.querySelectorAll('#photos .card, #projects .card');

    function openPreview(imageSrc) {
        previewImage.src = imageSrc;
        previewImage.alt = "Preview de imagen";
        imagePreview.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Mejorar la animación de fade in
        imagePreview.style.opacity = '0';
        imagePreview.style.transition = 'opacity 0.3s ease';
        
        // Asegurar que la imagen se cargue antes de mostrarla
        previewImage.onload = () => {
            requestAnimationFrame(() => {
                imagePreview.style.opacity = '1';
            });
        };
    }

    function closePreview() {
        imagePreview.style.opacity = '0';
        setTimeout(() => {
            imagePreview.style.display = 'none';
            document.body.style.overflow = 'auto';
            previewImage.src = ''; // Limpiar la fuente de la imagen
        }, 300);
    }

    // Mejorar el manejo de eventos de las tarjetas
    cards.forEach(card => {
        const img = card.querySelector('img');
        if (img) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                openPreview(img.src);
            });
        }
    });

    closeBtn.addEventListener('click', closePreview);
    imagePreview.addEventListener('click', function(e) {
        if (e.target === imagePreview) {
            closePreview();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imagePreview.style.display === 'flex') {
            closePreview();
        }
    });

    // Smooth Scroll mejorado
    document.querySelectorAll('a[href^="#"], button[onclick*="href"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href') || this.getAttribute('onclick').match(/'#[^']+'/)[0].replace(/'/g, '');
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación de scroll para secciones
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Manejo del formulario de contacto con animaciones
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Animación de envío
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

            try {
                // Simular envío (reemplazar con tu lógica real)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                formMessage.textContent = '¡Mensaje enviado con éxito!';
                formMessage.className = 'form-message success';
                this.reset();

                // Animación de éxito
                formMessage.style.animation = 'fadeInUp 0.5s ease';
            } catch (error) {
                formMessage.textContent = 'Error al enviar el mensaje. Por favor, intente nuevamente.';
                formMessage.className = 'form-message error';
                
                // Animación de error
                formMessage.style.animation = 'shake 0.5s ease';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar';
            }
        });
    }

    // Lazy loading para imágenes con animación de fade
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '50px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.style.opacity = '0';
                
                img.onload = () => {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});
