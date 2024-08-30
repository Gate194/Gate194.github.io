function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById('peliculas').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    // Puedes agregar más secciones aquí si es necesario

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}