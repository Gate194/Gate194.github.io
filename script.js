function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('detalles').classList.remove('active');

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}

function showDetails(title, description, imageUrl, logoUrl, seasons = []) {
    // Mostrar la sección de detalles
    showSection('detalles');
    
    // Añadir imagen, título, descripción y logo
    document.getElementById('detalle-imagen').src = imageUrl;
    document.getElementById('logo').src = logoUrl;
    document.getElementById('descripcion').innerText = description;

    // Añadir las temporadas
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

    // Mostrar u ocultar el botón de reproducir según el tipo de contenido
    const botonReproducir = document.getElementById('reproducir-boton');
    if (seasons.length > 0) { // Si hay temporadas, es una serie
        botonReproducir.style.display = 'none';
        document.getElementById('detalles').classList.add('series');
    } else {
        botonReproducir.style.display = 'block';
        document.getElementById('detalles').classList.remove('series');
    }
}

function reproducir() {
    alert('Reproduciendo película...');
    // Aquí puedes agregar la lógica para reproducir la película
}