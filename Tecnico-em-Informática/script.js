// Smooth scrolling para links de navegação
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

// WhatsApp Business
function openWhatsApp() {
    const phone = '5511999999999'; // Número com código do país
    const message = 'Olá! Gostaria de saber mais sobre os serviços da InfoSolution.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Chamar Urgente buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Chamar')) {
            const phone = '11999999999';
            window.location.href = `tel:+55${phone}`;
        }
    });
});

// Animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.service-card, .testimonial-card, .guarantee-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Adicionar animação CSS
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

// Mobile menu toggle (se necessário)
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrollando para baixo
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        // Scrollando para cima
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Formatar telefone
function formatPhone(phone) {
    return phone.replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{4})(\d)/, '$1-$2');
}