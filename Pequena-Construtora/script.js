// Smooth scroll to form
function scrollToForm() {
    const formSection = document.getElementById('contato');
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('budgetForm');
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        type: document.getElementById('type').value,
        address: document.getElementById('address').value,
        description: document.getElementById('description').value,
        timestamp: new Date().toLocaleString('pt-BR')
    };

    // Store in localStorage (simulating backend)
    let budgets = JSON.parse(localStorage.getItem('budgets')) || [];
    budgets.push(formData);
    localStorage.setItem('budgets', JSON.stringify(budgets));

    // Log to console for demonstration
    console.log('Novo orçamento recebido:', formData);

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Reset form
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.work-card, .service-card, .step').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Format phone input
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
    }
    e.target.value = value;
});

// Phone input validation
document.getElementById('phone').addEventListener('blur', function() {
    const phoneRegex = /^$$\d{2}$$\s\d{4,5}-\d{4}$/;
    if (this.value && !phoneRegex.test(this.value)) {
        this.style.borderColor = '#FF6B35';
    } else {
        this.style.borderColor = '#E0E0E0';
    }
});

// Add mobile menu toggle (optional enhancement)
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        navbar.style.overflowX = 'auto';
    }
}

window.addEventListener('resize', initMobileMenu);
window.addEventListener('load', initMobileMenu);

// Log stored budgets to console (for demonstration)
console.log('📋 Orçamentos armazenados localmente:', JSON.parse(localStorage.getItem('budgets')) || []);