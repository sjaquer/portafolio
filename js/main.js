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

    // Inicializaciones
    initTypeWriter();
    initSkillCards();
    initSocialIcons();
    initWhatsAppButton();
    initSlider();
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
        
        const observer = new IntersectionObserver(entries => {
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
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'all 0.5s ease';
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

// Función para inicializar el slider
function initSlider() {
    const photoGrid = document.querySelector('.photo-grid');
    if (!photoGrid) return;

    const cards = photoGrid.querySelectorAll('.photo-card');
    let autoScrollInterval;
    const scrollSpeed = 3; // Velocidad del scroll automático

    // Función para el scroll con inercia
    function momentumScroll() {
        if (!isScrolling) {
            const velocity = (photoGrid.scrollLeft - scrollLeft) * 0.8;
            if (Math.abs(velocity) < 0.5) return;
            
            photoGrid.scrollLeft += velocity;
            scrollLeft = photoGrid.scrollLeft;
            momentumID = requestAnimationFrame(momentumScroll);
        }
    }

     // Eventos del mouse
     photoGrid.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - photoGrid.offsetLeft;
        scrollLeft = photoGrid.scrollLeft;
        cancelAnimationFrame(momentumID);
        
        photoGrid.style.cursor = 'grabbing';
        photoGrid.style.userSelect = 'none';
    });

    photoGrid.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        
        e.preventDefault();
        const x = e.pageX - photoGrid.offsetLeft;
        const walk = (x - startX) * 2;
        photoGrid.scrollLeft = scrollLeft - walk;
    });

    photoGrid.addEventListener('mouseup', () => {
        isScrolling = false;
        photoGrid.style.cursor = 'grab';
        photoGrid.style.removeProperty('user-select');
        momentumScroll();
    });

    photoGrid.addEventListener('mouseleave', () => {
        if (isScrolling) {
            isScrolling = false;
            photoGrid.style.cursor = 'grab';
            photoGrid.style.removeProperty('user-select');
            momentumScroll();
        }
    });

    // Eventos táctiles
   photoGrid.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startX = e.touches[0].pageX - photoGrid.offsetLeft;
        scrollLeft = photoGrid.scrollLeft;
        cancelAnimationFrame(momentumID);
    }, { passive: true });

    photoGrid.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - photoGrid.offsetLeft;
        const walk = (x - startX) * 2;
        photoGrid.scrollLeft = scrollLeft - walk;
    }, { passive: false });

    photoGrid.addEventListener('touchend', () => {
        isScrolling = false;
        momentumScroll();
    });


    // Efecto 3D optimizado
    function updateCardsEffect() {
        const centerX = window.innerWidth / 2;
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.left < window.innerWidth && rect.right > 0) {
                const cardCenterX = rect.left + rect.width / 2;
                const distanceFromCenter = cardCenterX - centerX;
                const normalizedRotation = (distanceFromCenter / window.innerWidth) * 30;
                
                card.style.transform = `
                    perspective(1000px)
                    rotateY(${normalizedRotation}deg)
                    scale(${1 - Math.abs(normalizedRotation) / 180})
                `;
            }
        });
    }

    // Scroll infinito
    photoGrid.addEventListener('scroll', () => {
        requestAnimationFrame(updateCardsEffect);
        
        const scrollLeft = photoGrid.scrollLeft;
        const maxScroll = photoGrid.scrollWidth - photoGrid.clientWidth;

        if (scrollLeft <= 0) {
            photoGrid.scrollLeft = maxScroll - 1;
        } else if (scrollLeft >= maxScroll) {
            photoGrid.scrollLeft = 1;
        }
    });

    // Observador para el efecto 3D
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(updateCardsEffect);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '50px'
    });

    cards.forEach(card => scrollObserver.observe(card));

    // Actualización inicial
    updateCardsEffect();

    // Limpiar al desmontar
    return () => {
        scrollObserver.disconnect();
    };
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

    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        const img = card.querySelector('img');
        if (img) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => openPreview(img.src));
        }
    });

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