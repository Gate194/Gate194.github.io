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
    var navButtons = document.querySelectorAll('.bottom-nav button');
    navButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    var activeButton = document.querySelector('.bottom-nav button[onclick="showSection(\'' + sectionId + '\')"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
