document.addEventListener('DOMContentLoaded', () => {  
    const peliculasLink = document.getElementById('peliculas-link');  
    const seriesLink = document.getElementById('series-link');  
    const peliculasSection = document.getElementById('peliculas');  
    const seriesSection = document.getElementById('series');  

    // Función para mostrar la sección seleccionada  
    function showSection(sectionToShow) {  
        peliculasSection.style.display = 'none';  
        seriesSection.style.display = 'none';  
        sectionToShow.style.display = 'grid';  
    }  

    // Evento para el enlace de películas  
    peliculasLink.addEventListener('click', (event) => {  
        event.preventDefault(); // Evita el comportamiento por defecto del enlace  
        showSection(peliculasSection);  
        peliculasLink.classList.add('active');  
        seriesLink.classList.remove('active');  
    });  

    // Evento para el enlace de series  
    seriesLink.addEventListener('click', (event) => {  
        event.preventDefault(); // Evita el comportamiento por defecto del enlace  
        showSection(seriesSection);  
        seriesLink.classList.add('active');  
        peliculasLink.classList.remove('active');  
    });  

    // Mostrar la sección de películas por defecto al cargar  
    showSection(peliculasSection);  
});
