function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('detalles').classList.remove('active');

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}

function showDetails(title, description, imageUrl, logoUrl, isSeries, temporadas = []) {
    // Mostrar la sección de detalles
    showSection('detalles');
    // Añadir imagen, título, descripción y logo
    document.getElementById('detalle-imagen').src = imageUrl;
    document.getElementById('logo').src = logoUrl;
    document.getElementById('descripcion').innerText = description;

    // Mostrar u ocultar el botón de reproducir según si es serie o película
    const reproducirBtn = document.getElementById('reproducir-btn');
    if (isSeries) {
        reproducirBtn.style.display = 'none';
        mostrarTemporadas(temporadas);
    } else {
        reproducirBtn.style.display = 'block';
        document.getElementById('temporadas').innerHTML = ''; // Limpiar temporadas
    }
}

function mostrarTemporadas(temporadas) {
    const temporadasDiv = document.getElementById('temporadas');
    temporadasDiv.innerHTML = ''; // Limpiar cualquier contenido previo

    temporadas.forEach(temp => {
        const contenedor = document.createElement('div');
        contenedor.className = 'temporada-contenedor';

        const img = document.createElement('img');
        img.src = temp.imagen;
        img.alt = temp.nombre;
        img.className = 'temporada-imagen';

        const nombre = document.createElement('h3');
        nombre.innerText = temp.nombre;
        nombre.className = 'temporada-nombre';

        contenedor.appendChild(img);
        contenedor.appendChild(nombre);
        temporadasDiv.appendChild(contenedor);
    });
}

function reproducir() {
    alert('Reproduciendo película...');
    // Aquí puedes agregar la lógica para reproducir la película
}