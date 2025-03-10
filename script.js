// Script para manejar la navegación
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Cambiar testimonios automáticamente
    let testimonios = document.querySelectorAll('.testimonio');
    let currentTestimonio = 0;
    
    if (testimonios.length > 1) {
        // Ocultar todos los testimonios excepto el primero
        for (let i = 1; i < testimonios.length; i++) {
            testimonios[i].style.display = 'none';
        }
        
        // Cambiar testimonios cada 5 segundos
        setInterval(() => {
            testimonios[currentTestimonio].style.display = 'none';
            currentTestimonio = (currentTestimonio + 1) % testimonios.length;
            testimonios[currentTestimonio].style.display = 'block';
        }, 5000);
    }
    
    // Animación para los elementos cuando aparecen en el viewport
    const animarElementos = () => {
        const cards = document.querySelectorAll('.destino-card, .servicio-item');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 150) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicialmente configurar elementos para animación
    const cards = document.querySelectorAll('.destino-card, .servicio-item');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('load', animarElementos);
    window.addEventListener('scroll', animarElementos);
}); 