document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 800,
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

    // Sistema de TypeWriter
    initTypeWriter();

    // Animaciones 3D
    initSkillCards();
    initSocialIcons();
    initWhatsAppButton();
    
    // Sistema de carrusel y preview de imágenes
    initPhotoCarousel();
    initImagePreview();
});

// Función para inicializar TypeWriter
function initTypeWriter() {
    const typeWriterElements = document.querySelectorAll('.typewriter');
    typeWriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
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
}

// Función para inicializar las tarjetas de habilidades
function initSkillCards() {
    const skillCards = document.querySelectorAll('#skills .card');
    
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 15;
            const angleY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
            card.style.transition = 'none';
            
            const shine = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`;
            card.style.backgroundImage = shine;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'all 0.5s ease';
            card.style.backgroundImage = 'none';
        });
    });
}

// Función para inicializar los iconos sociales
function initSocialIcons() {
    const socialIcons = document.querySelectorAll('.header .icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            icon.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px) scale(1.2)`;
            icon.style.transition = 'all 0.1s ease';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
            icon.style.transition = 'all 0.5s ease';
        });
    });
}

// Función para inicializar el botón de WhatsApp
function initWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('mousemove', (e) => {
            const rect = whatsappButton.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            whatsappButton.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px) scale(1.1)`;
            whatsappButton.style.transition = 'all 0.1s ease';
        });
        
        whatsappButton.addEventListener('mouseleave', () => {
            whatsappButton.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
            whatsappButton.style.transition = 'all 0.5s ease';
        });
    }
}

// Función para inicializar el carrusel de fotos
function initPhotoCarousel() {
    const photoGrid = document.querySelector('.photo-grid');
    if (!photoGrid) return;

    let isDragging = false;
    let startPos = 0;
    let scrollLeft = 0;
    let autoScrollInterval = null;
    let autoRotateInterval = null;
    const scrollSpeed = 1; // Reducido de 2 a 1 para más suavidad
    let isAutoScrolling = false;

 // Función para el desplazamiento automático
    function startAutoRotate() {
        if (autoRotateInterval) return;
        
        autoRotateInterval = setInterval(() => {
            if (!isDragging && !isAutoScrolling) {
                const maxScroll = photoGrid.scrollWidth - photoGrid.clientWidth;
                let newScrollLeft = photoGrid.scrollLeft + scrollSpeed;

                // Si llegamos al final, volvemos al inicio suavemente
                if (newScrollLeft >= maxScroll) {
                    newScrollLeft = 0;
                    // Hacer la transición al inicio más suave
                    photoGrid.style.scrollBehavior = 'auto';
                    photoGrid.scrollLeft = 0;
                    setTimeout(() => {
                        photoGrid.style.scrollBehavior = 'smooth';
                    }, 50);
                } else {
                    photoGrid.scrollTo({
                        left: newScrollLeft,
                        behavior: 'smooth'
                    });
                }
            }
        }, 100); // Aumentado de 50 a 100 para hacer más lento el auto-scroll
    }

function stopAutoRotate() {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
    }
}

 // Iniciar rotación automática
 startAutoRotate();

    // Crear áreas de scroll
    const container = photoGrid.parentElement;
    const leftArea = document.createElement('div');
    const rightArea = document.createElement('div');
    leftArea.className = 'scroll-area left';
    rightArea.className = 'scroll-area right';
    container.appendChild(leftArea);
    container.appendChild(rightArea);

// Funciones de auto-scroll al pasar el mouse por los bordes
function startAutoScroll(direction) {
    stopAutoRotate();
    isAutoScrolling = true;
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
        photoGrid.scrollBy({
            left: direction * 2, // Reducido de 5 a 2 para más suavidad
            behavior: 'smooth'
        });
    }, 16);
}

function stopAutoScroll() {
    isAutoScrolling = false;
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
    // Reanudar rotación automática después de un breve delay
    setTimeout(startAutoRotate, 1000);
}
    // Make scroll areas invisible but functional
    leftArea.style.position = 'absolute';
    leftArea.style.top = '0';
    leftArea.style.left = '0';
    leftArea.style.width = '20%';
    leftArea.style.height = '100%';
    leftArea.style.opacity = '0';
    leftArea.style.pointerEvents = 'auto';

    rightArea.style.position = 'absolute';
    rightArea.style.top = '0';
    rightArea.style.right = '0';
    rightArea.style.width = '20%';
    rightArea.style.height = '100%';
    rightArea.style.opacity = '0';
    rightArea.style.pointerEvents = 'auto';

    // Eventos de scroll automático
    leftArea.addEventListener('mouseenter', () => startAutoScroll(-1));
    rightArea.addEventListener('mouseenter', () => startAutoScroll(1));
    leftArea.addEventListener('mouseleave', stopAutoScroll);
    rightArea.addEventListener('mouseleave', stopAutoScroll);

    // Eventos de arrastre
    photoGrid.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPos = e.pageX - photoGrid.offsetLeft;
        scrollLeft = photoGrid.scrollLeft;
        photoGrid.style.cursor = 'grabbing';
    });

    photoGrid.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - photoGrid.offsetLeft;
        const walk = (x - startPos) * 2;
        photoGrid.scrollLeft = scrollLeft - walk;
    });

    photoGrid.addEventListener('mouseup', () => {
        isDragging = false;
        photoGrid.style.cursor = 'grab';
    });

    photoGrid.addEventListener('mouseleave', () => {
        isDragging = false;
        photoGrid.style.cursor = 'grab';
    });

    // Efecto 3D para las fotos
    const cards = photoGrid.querySelectorAll('.photo-card');
    
    photoGrid.addEventListener('mousemove', (e) => {
        if (!isDragging) {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const distanceFromCenter = (cardCenterX - e.clientX) / 10;
                
                const rotation = Math.min(Math.max(distanceFromCenter, -30), 30);
                const scale = 1 - Math.abs(distanceFromCenter) / 1000;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateY(${rotation}deg) 
                    scale(${scale})
                `;
                card.style.transition = 'transform 0.1s ease';
            });
        }
    });

    photoGrid.addEventListener('mouseleave', () => {
        cards.forEach(card => {
            card.style.transform = 'perspective(1000px) rotateY(0) scale(1)';
            card.style.transition = 'transform 0.5s ease';
        });
    });
}

// Función para inicializar el preview de imágenes
function initImagePreview() {
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

    const imagePreview = document.querySelector('.image-preview');
    const previewImage = imagePreview.querySelector('.preview-image');
    const closeBtn = imagePreview.querySelector('.close-btn');

    function openPreview(imageSrc) {
        previewImage.src = imageSrc;
        imagePreview.style.display = 'flex';
        setTimeout(() => {
            imagePreview.style.opacity = '1';
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closePreview() {
        imagePreview.style.opacity = '0';
        setTimeout(() => {
            imagePreview.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Eventos para las imágenes
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
}

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