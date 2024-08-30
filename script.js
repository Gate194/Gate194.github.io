function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}