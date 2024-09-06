let currentSlide = 0;  
let slideInterval;  

function showSection(sectionId) {  
    const sections = document.querySelectorAll('.container');  
    sections.forEach(section => {  
        section.classList.remove('active');  
    });  
    document.getElementById(sectionId).classList.add('active');

  // Eliminar la clase active-tab de todos los enlaces
    const tabs = document.querySelectorAll('.navbar a');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Añadir la clase active-tab al enlace correspondiente
    const activeTab = document.querySelector(`#${sectionId}-tab`);
    if (activeTab) {
        activeTab.classList.add('active-tab');
    }

    // Detener el carrusel si se está mostrando otra sección  
    clearInterval(slideInterval);  
}  

function setupCarousel() {  
    const carouselImages = document.querySelector('.carousel-images');  
    const firstSlide = carouselImages.children[0].cloneNode(true);  
    carouselImages.appendChild(firstSlide); // Duplicar el primer slide al final  
}  

function moveSlide() {  
    const carouselImages = document.querySelector('.carousel-images');  
    const totalSlides = carouselImages.children.length; // Ahora incluye el slide duplicado  

    currentSlide++;  
    
    if (currentSlide === totalSlides) {  
        // Si llega al final (slide duplicado), salta sin transición al primer slide real  
        carouselImages.style.transition = 'none';  
        carouselImages.style.transform = `translateX(0)`;  
        currentSlide = 0;  

        // Forzar la recalculación de estilos y reanudar la transición  
        setTimeout(() => {  
            carouselImages.style.transition = 'transform 0.5s ease-in-out';  
            const offset = -currentSlide * 100;  
            carouselImages.style.transform = `translateX(${offset}%)`;  
        }, 20);  
    } else {  
        const offset = -currentSlide * 100;  
        carouselImages.style.transform = `translateX(${offset}%)`;  
    }  
}  

function showDetails(title, description, imageUrl, logoUrl, seasons = [], additionalImages = [], link = "") {  
    // Mostrar la sección de detalles  
    showSection('detalles');  
    
    // Añadir imagen, título, descripción y logo  
    const carouselImages = document.querySelector('.carousel-images');  
    carouselImages.innerHTML = ''; // Limpiar el contenedor de imágenes  

    const imgElement = document.createElement('img');  
    imgElement.src = imageUrl;  
    imgElement.alt = title;  
    imgElement.className = 'detalle-imagen';  
    carouselImages.appendChild(imgElement);  

    additionalImages.forEach(url => {  
        const img = document.createElement('img');  
        img.src = url;  
        img.alt = title;  
        img.className = 'detalle-imagen';  
        carouselImages.appendChild(img);  
    });  

    document.getElementById('logo').src = logoUrl;  
    document.getElementById('descripcion').innerText = description;  

    // Lógica para mostrar las temporadas  
    const temporadasContainer = document.getElementById('temporadas');  
    temporadasContainer.innerHTML = ''; // Limpiar temporadas previas  
    seasons.forEach(season => {  
        const temporadaCard = document.createElement('div');  
        temporadaCard.className = 'temporada-card';  
        
        // Create a link for the season with a customizable reference  
        const linkElement = document.createElement('a');  
        linkElement.href = season.link || `go:${season.number}`;  // Use a custom link if provided  

        const temporadaImg = document.createElement('img');  
        temporadaImg.src = season.imageUrl;  
        temporadaImg.alt = `Temporada ${season.number}`;  
        temporadaImg.className = 'temporada-imagen';   
        
        const temporadaNombre = document.createElement('div');  
        temporadaNombre.className = 'temporada-nombre';  
        temporadaNombre.innerText = `Temporada ${season.number}`;  

        // Append image and name to link  
        linkElement.appendChild(temporadaImg);  
        linkElement.appendChild(temporadaNombre);  
        temporadaCard.appendChild(linkElement); // Add link to temporadaCard  
        
        temporadasContainer.appendChild(temporadaCard);  
    });  

    // Configurar el enlace para el botón "Reproducir"  
    const reproducirBoton = document.getElementById('reproducir-boton');  
    reproducirBoton.onclick = () => {  
        window.location.href = link || 'default_link';  
    };
  
  

  // Mostrar botón "Regresar" solo si es una película (sin temporadas)
    const regresarBoton = document.getElementById('regresar-boton');
    if (seasons.length === 0) {
        regresarBoton.style.display = 'block';
        regresarBoton.onclick = () => {
            showSection('peliculas'); // Regresar a la sección películas
        };
    } else {
        regresarBoton.style.display = 'none';
    }

const regresarSeriesBoton = document.getElementById('regresar-series-boton');
    if (seasons.length > 0) {
        reproducirBoton.style.display = 'none';
        regresarSeriesBoton.style.display = 'block';
    } else {
        reproducirBoton.style.display = 'block';
        regresarSeriesBoton.style.display = 'none';
    }
  
  

    // Ocultar botón "Reproducir" en la sección de series  
    reproducirBoton.style.display = seasons.length > 0 ? 'none' : 'block';  

    // Configurar el carrusel para tener un deslizamiento infinito  
    setupCarousel();  

    // Iniciar el deslizamiento infinito del carrusel  
    clearInterval(slideInterval); // Limpiar cualquier intervalo existente  
    slideInterval = setInterval(moveSlide, 6000); // Desliza cada 6 segundos  
}  

function reproducir() {  
    // Esta función ya no es necesaria, el enlace se maneja en showDetails  
}

function regresarASeries() {
    showSection('series');
}

function buscar() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    const peliculas = document.querySelectorAll('.pelicula-card');
    const series = document.querySelectorAll('.serie-card');

    // Filtrar películas y series que coincidan con la búsqueda
    const resultados = [...peliculas, ...series].filter(item => {
        const nombre = item.querySelector('.pelicula-nombre, .serie-nombre').textContent.toLowerCase();
        return nombre.includes(query);
    });

    // Mostrar resultados
    if (resultados.length === 0) {
        resultsContainer.innerHTML = '<p>No se encontraron resultados</p>';
    } else {
        resultados.forEach(item => {
            // Clonar el elemento encontrado para que no se modifique el original
            const clon = item.cloneNode(true);
            resultsContainer.appendChild(clon);
        });
    }

    // Mostrar la sección de búsqueda con los resultados
    showSection('busqueda');
}