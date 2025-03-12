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
    const cardWidth = cards[0].offsetWidth + 20; // Ancho + gap
    let currentPosition = 0;
    let baseSpeed = 1; // Velocidad base
    let currentSpeed = baseSpeed;
    let isHovered = false;

    function moveSlider() {
        currentPosition -= currentSpeed;
        
        if (Math.abs(currentPosition) >= cardWidth) {
            const firstCard = photoGrid.firstElementChild;
            photoGrid.appendChild(firstCard);
            currentPosition = 0;
            photoGrid.style.transform = `translateX(0)`;
        } else {
            photoGrid.style.transform = `translateX(${currentPosition}px)`;
        }
    }

    let animationFrameId;
    function animate() {
        moveSlider();
        animationFrameId = requestAnimationFrame(animate);
    }

    // Eventos de mouse para cambiar velocidad con transición suave
    let speedTransitionInterval;
    
    photoGrid.addEventListener('mouseenter', () => {
        isHovered = true;
        clearInterval(speedTransitionInterval);
        
        const MAX_SPEED = baseSpeed * 3;
        const SPEED_INCREMENT = 0.1;
        const INTERVAL_TIME = 10;
    
        speedTransitionInterval = setInterval(() => {
            if (currentSpeed < MAX_SPEED) {
                currentSpeed += SPEED_INCREMENT;
            } else {
                clearInterval(speedTransitionInterval);
            }
        }, INTERVAL_TIME);
    });

    photoGrid.addEventListener('mouseleave', () => {
        isHovered = false;
        clearInterval(speedTransitionInterval);
        
        speedTransitionInterval = setInterval(() => {
            if (currentSpeed > baseSpeed) {
                currentSpeed -= 0.1;
            } else {
                clearInterval(speedTransitionInterval);
            }
        }, 50);
    });

     // Eventos táctiles
     let isDragging = false;
     let startX = 0;
     let startPosition = 0;
 
     photoGrid.addEventListener('touchstart', (e) => {
         isDragging = true;
         startX = e.touches[0].pageX;
         startPosition = currentPosition;
         cancelAnimationFrame(animationFrameId);
     }, { passive: true });
 
     photoGrid.addEventListener('touchmove', (e) => {
         if (!isDragging) return;
         e.preventDefault();
         const x = e.touches[0].pageX;
         const walk = (startX - x);
         currentPosition = startPosition - walk;
         photoGrid.style.transform = `translateX(${currentPosition}px)`;
     }, { passive: false });
 
     photoGrid.addEventListener('touchend', () => {
         isDragging = false;
         // Restaurar velocidad según si está hover o no
         currentSpeed = isHovered ? baseSpeed * 3 : baseSpeed;
         animate();
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

    // Observador optimizado
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

    // Iniciar animación
    animate();

    // Limpiar al desmontar
    return () => {
        cancelAnimationFrame(animationFrameId);
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

const photoGrid = document.querySelector('.photo-grid');
if (photoGrid) {
    const cards = photoGrid.querySelectorAll('.photo-card');
    const totalCards = cards.length;

    // En lugar de clonar, controlamos el scroll para simular infinito
    photoGrid.addEventListener('scroll', () => {
        const scrollLeft = photoGrid.scrollLeft;
        const maxScroll = photoGrid.scrollWidth - photoGrid.clientWidth;

        if (scrollLeft <= 0) {
            // Si llegamos al inicio, saltamos cerca del final
            photoGrid.scrollLeft = maxScroll - 10;
        } else if (scrollLeft >= maxScroll) {
            // Si llegamos al final, saltamos cerca del inicio
            photoGrid.scrollLeft = 10;
        }
    });

    // Establecer la variable CSS para el total de tarjetas original
    photoGrid.style.setProperty('--total-cards', totalCards);
}