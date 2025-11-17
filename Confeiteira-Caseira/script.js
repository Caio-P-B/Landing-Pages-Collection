// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth scroll para navegação
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

// Animação de entrada dos elementos ao scrollar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards de produtos
document.querySelectorAll('.produto-card, .depoimento-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Efeito de hover nos cards
document.querySelectorAll('.produto-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contador simples de cliques no botão WhatsApp
let whatsappClicks = 0;
document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-mobile').forEach(btn => {
    btn.addEventListener('click', function() {
        whatsappClicks++;
        console.log('WhatsApp clicado:', whatsappClicks, 'vezes');
    });
});

// Efeito parallax no hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollTop = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPosition = `0px ${scrollTop * 0.5}px`;
    }
});

console.log('🧁 Doces Sonhos - Landing Page Carregada com Sucesso!');