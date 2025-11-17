// Menu Toggle para Mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Formulário
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    // Validação básica
    if (nome && email && telefone) {
        alert(`Obrigado, ${nome}! Entraremos em contato em breve via ${email}`);
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

// Smooth scroll para botões de ação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animação ao scrollar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards e elementos
document.querySelectorAll('.feature-card, .plano-card, .testimonio-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Adicionar keyframes para animação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Atualizar ano no footer
const year = new Date().getFullYear();
document.querySelectorAll('.footer-bottom p').forEach(p => {
    if (p.textContent.includes('2025')) {
        p.textContent = p.textContent.replace('2025', year);
    }
});