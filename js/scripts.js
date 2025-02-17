document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    // Seleccionar elementos necesarios
    const projectCards = document.querySelectorAll('#projects .card, #photos .card');
    const imagePreview = document.getElementById('image-preview');
    const previewImage = document.getElementById('image-preview-content');
    const closeBtn = document.querySelector('.close-btn');

    // Función para abrir la previsualización
    function openPreview(imageSrc) {
        previewImage.src = imageSrc;
        imagePreview.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Previene el scroll
    }

    // Función para cerrar la previsualización
    function closePreview() {
        imagePreview.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura el scroll
    }

    // Agregar eventos a las tarjetas
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                openPreview(img.src);
            }
        });
    });

    // Eventos para cerrar la previsualización
    closeBtn.addEventListener('click', closePreview);
    imagePreview.addEventListener('click', function(e) {
        if (e.target === imagePreview) {
            closePreview();
        }
    });

    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imagePreview.style.display === 'flex') {
            closePreview();
        }
    });
});