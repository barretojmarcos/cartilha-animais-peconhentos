// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.card, .prevention-item, .animal-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add click effect to emergency contact cards
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function() {
        const phoneNumber = this.querySelector('.phone-number').textContent;
        // In a real application, this could trigger a phone call
        console.log(`Ligando para: ${phoneNumber}`);
        
        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
        }, 150);
    });
});

// Add search functionality (if needed in the future)
function searchContent(query) {
    const sections = document.querySelectorAll('.section');
    const results = [];
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            results.push(section);
        }
    });
    
    return results;
}

// Video player enhancements for local video
const librasVideo = document.getElementById('libras-video');

if (librasVideo) {
    // Add loading state
    librasVideo.addEventListener('loadstart', function() {
        console.log('Carregando vídeo em LIBRAS...');
    });

    // Handle video loaded
    librasVideo.addEventListener('loadedmetadata', function() {
        console.log('Vídeo em LIBRAS carregado com sucesso');
    });

    // Handle video errors
    librasVideo.addEventListener('error', function(e) {
        console.error('Erro ao carregar o vídeo:', e);
        const errorMsg = document.createElement('div');
        errorMsg.className = 'video-error';
        errorMsg.innerHTML = '<p>⚠️ Erro ao carregar o vídeo. Verifique se o arquivo CartilhaLibras.mp4 está na mesma pasta do site.</p>';
        librasVideo.parentNode.appendChild(errorMsg);
    });

    // Add keyboard accessibility
    librasVideo.addEventListener('keydown', function(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (librasVideo.paused) {
                librasVideo.play();
            } else {
                librasVideo.pause();
            }
        }
    });
}

// Console message
console.log('%c🐍 Cartilha de Animais Peçonhentos', 'color: #2c5530; font-size: 20px; font-weight: bold;');
console.log('%cInformações educativas sobre prevenção e primeiros socorros', 'color: #4a7c59; font-size: 12px;');
console.log('%c👋 Acessível em LIBRAS', 'color: #d32f2f; font-size: 14px;');

