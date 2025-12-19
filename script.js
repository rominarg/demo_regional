/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); 
            }
        });
    }

        const menuLinks = document.querySelectorAll('.nav-links a'); 
        
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

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


    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15 
    });

    revealElements.forEach(el => revealObserver.observe(el));

    window.playMusic = function(btn) {
        const icon = btn.querySelector('i');
        
        document.querySelectorAll('.play-btn i').forEach(i => {
            if(i !== icon) {
                i.classList.remove('fa-pause');
                i.classList.add('fa-play');
                i.parentElement.style.background = 'transparent';
                i.parentElement.style.color = '#d4af37';
            }
        });

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