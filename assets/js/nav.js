// FUNCIONES DE NAVEGACIÓN

// Toggle menú móvil
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.querySelector('.nav-toggle');
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera (solo en móvil)
    document.addEventListener('click', (e) => {
        // Verificar si el menú está abierto
        if (navMenu.classList.contains('active')) {
            // Verificar si el clic fue fuera del menú y del botón hamburguesa
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
