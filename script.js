function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    // Actualizar los botones de navegación
    var navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    var activeButton = document.querySelector('nav button[onclick="showSection(\'' + sectionId + '\')"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Función para recargar la página completamente
function reloadPage() {
    location.reload(true);
}