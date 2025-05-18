// Tworzenie cząstek
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Ustawienie losowej pozycji
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Losowa wielkość
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Losowa przejrzystość
        particle.style.opacity = Math.random() * 0.5;
        
        // Losowe opóźnienie animacji
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        // Losowa długość animacji
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        particles.appendChild(particle);
    }
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Zmień ikonę menu
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Smooth scroll dla linków nawigacyjnych
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Zamknij menu mobilne, jeśli otwarte
                const navMenu = document.getElementById('navMenu');
                navMenu.classList.remove('active');
                
                // Zmień ikonę menu na hamburgera
                const icon = document.querySelector('#mobileMenuBtn i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Przycisk do góry - pokazywanie/ukrywanie
function setupBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animacje przy przewijaniu
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right');
    
    const checkIfInView = () => {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Sprawdź, czy element jest widoczny w oknie
            if (
                elementBottomPosition >= windowTopPosition && 
                elementTopPosition <= windowBottomPosition - 100
            ) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) translateX(0)';
            } else {
                if (element.classList.contains('animate-fade-up')) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(30px)';
                } else if (element.classList.contains('animate-fade-left')) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateX(-30px)';
                } else if (element.classList.contains('animate-fade-right')) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateX(30px)';
                }
            }
        });
    };
    
    // Wywołaj funkcję przy ładowaniu strony i przy przewijaniu
    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
}

// Inicjalizacja wszystkich funkcji
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupMobileMenu();
    setupSmoothScroll();
    setupBackToTopButton();
    setupScrollAnimations();
});