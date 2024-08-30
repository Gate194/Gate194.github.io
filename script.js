// Manejar la navegación entre películas y series  
document.getElementById('nav-movies').addEventListener('click', () => {  
    document.getElementById('movies').style.display = 'grid';  
    document.getElementById('series').style.display = 'none';  
    setActiveNav('nav-movies');  
});  

document.getElementById('nav-series').addEventListener('click', () => {  
    document.getElementById('movies').style.display = 'none';  
    document.getElementById('series').style.display = 'grid';  
    setActiveNav('nav-series');  
});  

// Función para establecer el elemento de navegación activo  
function setActiveNav(activeId) {  
    document.querySelectorAll('.nav-item').forEach(nav => {  
        nav.classList.remove('active');  
    });  
    document.getElementById(activeId).classList.add('active');  
}