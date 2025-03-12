document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    // Función de WhatsApp
    window.redirectToWhatsApp = function() {
        const phoneNumber = '946978919';
        const message = 'Hola, nos interesa tus servicios. ¿Podrías ayudarnos?';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

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

    // Sistema de Preview de Imágenes
    // Crear el contenedor de preview si no existe
    if (!document.querySelector('.image-preview')) {
        const imagePreview = document.createElement('div');
        imagePreview.className = 'image-preview';
        imagePreview.innerHTML = `
            <div class="image-preview-container">
                <span class="close-btn">&times;</span>
                <img class="preview-image" src="" alt="Preview">
            </div>
        `;
        document.body.appendChild(imagePreview);
    }

    // Obtener elementos necesarios
    const imagePreview = document.querySelector('.image-preview');
    const previewImage = imagePreview.querySelector('.preview-image');
    const closeBtn = imagePreview.querySelector('.close-btn');

    // Función para abrir preview
    function openPreview(imageSrc) {
        previewImage.src = imageSrc;
        imagePreview.style.display = 'flex';
        setTimeout(() => {
            imagePreview.style.opacity = '1';
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar preview
    function closePreview() {
        imagePreview.style.opacity = '0';
        setTimeout(() => {
            imagePreview.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Agregar eventos a las imágenes en photo-card
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        const img = card.querySelector('img');
        if (img) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => openPreview(img.src));
        }
    });

    // Eventos para cerrar el preview
    closeBtn.addEventListener('click', closePreview);
    imagePreview.addEventListener('click', (e) => {
        if (e.target === imagePreview) {
            closePreview();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePreview();
        }
    });

    // Scroll suave
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                formMessage.textContent = '¡Mensaje enviado con éxito!';
                formMessage.className = 'form-message success';
                this.reset();
                formMessage.style.animation = 'fadeInUp 0.5s ease';
            } catch (error) {
                formMessage.textContent = 'Error al enviar el mensaje. Por favor, intente nuevamente.';
                formMessage.className = 'form-message error';
                formMessage.style.animation = 'shake 0.5s ease';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar';
            }
        });
    }

    // Lazy loading para imágenes
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