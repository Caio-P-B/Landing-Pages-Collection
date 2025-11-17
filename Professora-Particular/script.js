// Smooth scroll to form
function scrollToForm() {
    const form = document.getElementById('formAula');
    form.scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.form-input').focus();
}

// Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const nome = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const whatsapp = form.querySelector('input[type="tel"]').value;
    const materia = form.querySelectorAll('select')[0].value;
    const nivel = form.querySelectorAll('select')[1].value;
    
    // Validation
    if (!nome || !email || !whatsapp || !materia || !nivel) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Create success message
    const message = `
    ✅ Solicitação Recebida!
    
    Nome: ${nome}
    Email: ${email}
    WhatsApp: ${whatsapp}
    Matéria: ${materia}
    Nível: ${nivel}
    
    Em breve entraremos em contato com você!
    `;
    
    alert(message);
    
    // Reset form
    form.reset();
    
    // Simulate sending data (in production, this would go to a backend)
    console.log('Form Data:', {
        nome,
        email,
        whatsapp,
        materia,
        nivel,
        timestamp: new Date().toISOString()
    });
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    }
});

// Intersection Observer for fade-in animations
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

// Observe all cards and sections
document.querySelectorAll('.materia-card, .metodo-card, .publico-card, .depoimento-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (for future expansion)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}