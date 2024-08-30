function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('detalles').classList.remove('active');

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}

function showDetails(title, description) {
    // Mostrar la sección de detalles
    showSection('detalles');
    // Añadir título y descripción
    document.getElementById('titulo').innerText = title;
    document.getElementById('descripcion').innerText = description;
}

function reproducir() {
    alert('Reproduciendo película...');
    // Aquí puedes agregar la lógica para reproducir la película
}