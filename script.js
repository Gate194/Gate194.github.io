let currentSlide = 0;
let slideInterval;

function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('detalles').classList.remove('active');

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');

    // Detener el carrusel si se está mostrando otra sección
    clearInterval(slideInterval);
}

function setupCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const firstSlide = carouselImages.children[0].cloneNode(true);
    carouselImages.appendChild(firstSlide); // Duplicar el primer slide al final
}

function moveSlide() {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = carouselImages.children.length; // Ahora incluye el slide duplicado

    currentSlide++;
    
    if (currentSlide === totalSlides) {
        // Si llega al final (slide duplicado), salta sin transición al primer slide real
        carouselImages.style.transition = 'none';
        carouselImages.style.transform = `translateX(0)`;
        currentSlide = 0;

        // Forzar la recalculación de estilos y reanudar la transición
        setTimeout(() => {
            carouselImages.style.transition = 'transform 0.5s ease-in-out';
            const offset = -currentSlide * 100;
            carouselImages.style.transform = `translateX(${offset}%)`;
        }, 20);
    } else {
        const offset = -currentSlide * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }
}

function showDetails(title, description, imageUrl, logoUrl, seasons = [], additionalImages = []) {
    // Mostrar la sección de detalles
    showSection('detalles');
    
    // Añadir imagen, título, descripción y logo
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.innerHTML = ''; // Limpiar el contenedor de imágenes

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = title;
    imgElement.className = 'detalle-imagen';
    carouselImages.appendChild(imgElement);

    additionalImages.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = title;
        img.className = 'detalle-imagen';
        carouselImages.appendChild(img);
    });

    document.getElementById('logo').src = logoUrl;
    document.getElementById('descripcion').innerText = description;

    // Lógica para mostrar las temporadas
    const temporadasContainer = document.getElementById('temporadas');
    temporadasContainer.innerHTML = ''; // Limpiar temporadas previas
    seasons.forEach(season => {
        const temporadaCard = document.createElement('div');
        temporadaCard.className = 'temporada-card';
        
        const temporadaImg = document.createElement('img');
        temporadaImg.src = season.imageUrl;
        temporadaImg.alt = `Temporada ${season.number}`;
        temporadaImg.className = 'temporada-imagen';
        
        const temporadaNombre = document.createElement('div');
        temporadaNombre.className = 'temporada-nombre';
        temporadaNombre.innerText = `Temporada ${season.number}`;
        
        temporadaCard.appendChild(temporadaImg);
        temporadaCard.appendChild(temporadaNombre);
        
        temporadasContainer.appendChild(temporadaCard);
    });

    // Ocultar botón "Reproducir" en la sección de series
    const reproducirBoton = document.getElementById('reproducir-boton');
    if (seasons.length > 0) {
        reproducirBoton.style.display = 'none';
    } else {
        reproducirBoton.style.display = 'block';
    }

    // Configurar el carrusel para tener un deslizamiento infinito
    setupCarousel();

    // Iniciar el deslizamiento infinito del carrusel
    clearInterval(slideInterval); // Limpiar cualquier intervalo existente
    slideInterval = setInterval(moveSlide, 6000); // Desliza cada 6 segundos
}

function reproducir() {
    alert('Reproduciendo...');
}