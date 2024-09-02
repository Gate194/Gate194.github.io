let currentImageIndex = 0;

function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('detalles').classList.remove('active');

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}

function showDetails(title, description, imageUrls, logoUrl, seasons = []) {
    showSection('detalles');

    // Configurar logo y descripción
    document.getElementById('logo').src = logoUrl;
    document.getElementById('descripcion').innerText = description;

    // Configurar las imágenes del carrusel
    const detalleImagenes = document.getElementById('detalle-imagenes');
    detalleImagenes.innerHTML = ''; // Limpiar imágenes anteriores

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = title;
        img.className = 'detalle-imagen';
        detalleImagenes.appendChild(img);
    });

    currentImageIndex = 0;
    updateCarrusel();

    // Configurar temporadas
    const temporadasContainer = document.getElementById('temporadas');
    temporadasContainer.innerHTML = ''; // Limpiar el contenedor de temporadas
    seasons.forEach(season => {
        const card = document.createElement('div');
        card.className = 'temporada-card';
        
        const img = document.createElement('img');
        img.src = season.imageUrl;
        img.alt = `Temporada ${season.number}`;
        img.className = 'temporada-imagen';
        
        const name = document.createElement('div');
        name.className = 'temporada-nombre';
        name.innerText = `Temporada ${season.number}`;
        
        card.appendChild(img);
        card.appendChild(name);
        temporadasContainer.appendChild(card);
    });

    const botonReproducir = document.getElementById('reproducir-boton');
    if (seasons.length > 0) { 
        botonReproducir.style.display = 'none';
        document.getElementById('detalles').classList.add('series');
    } else {
        botonReproducir.style.display = 'block';
        document.getElementById('detalles').classList.remove('series');
    }
}

function updateCarrusel() {
    const detalleImagenes = document.getElementById('detalle-imagenes');
    const offset = -currentImageIndex * 100;
    detalleImagenes.style.transform = `translateX(${offset}%)`;
}

function prevImage() {
    const imageCount = document.querySelectorAll('.detalle-imagen').length;
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = imageCount - 1;
    }
    updateCarrusel();
}

function nextImage() {
    const imageCount = document.querySelectorAll('.detalle-imagen').length;
    if (currentImageIndex < imageCount - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateCarrusel();
}

function reproducir() {
    alert('Reproduciendo película...');
    // Aquí puedes agregar la lógica para reproducir la película
}