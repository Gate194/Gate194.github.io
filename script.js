function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('detalles').classList.remove('active');

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}

function showDetails(title, description, imageUrl) {
    // Mostrar la sección de detalles
    showSection('detalles');
    // Añadir imagen, título y descripción
    document.getElementById('detalle-imagen').src = imageUrl;
    document.getElementById('descripcion').innerText = description;
}

function reproducir() {
    alert('Reproduciendo película...');
    // Aquí puedes agregar la lógica para reproducir la película
}