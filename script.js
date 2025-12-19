/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto Scroll Header
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.padding = '10px 5%';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.padding = '20px 5%';
        }
    });

    // 2. Animaciones al hacer Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, {
        root: null,
        threshold: 0.15 // Dispara cuando el 15% del elemento es visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Simulación de Reproductor de Música
    window.playMusic = function(btn) {
        const icon = btn.querySelector('i');
        
        // Resetear otros botones (para este demo simple)
        document.querySelectorAll('.play-btn i').forEach(i => {
            if(i !== icon) {
                i.classList.remove('fa-pause');
                i.classList.add('fa-play');
                i.parentElement.style.background = 'transparent';
                i.parentElement.style.color = '#d4af37';
            }
        });

        // Toggle Play/Pause visual
        if (icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            btn.style.background = '#d4af37';
            btn.style.color = '#000';
            console.log("Reproduciendo corrido...");
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            btn.style.background = 'transparent';
            btn.style.color = '#d4af37';
            console.log("Pausa");
        }
    }
});