// Smooth scroll for navigation
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

// Form submission
const formOrcamento = document.getElementById('formOrcamento');
if (formOrcamento) {
  formOrcamento.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      nome: document.getElementById('nome').value,
      telefone: document.getElementById('telefone').value,
      servico: document.getElementById('servico').value,
      descricao: document.getElementById('descricao').value
    };

    // Simple validation
    if (!formData.nome || !formData.telefone || !formData.servico) {
      alert('Por favor, preench todos os campos obrigatórios!');
      return;
    }

    // Show success message
    alert(`Obrigado, ${formData.nome}! Sua solicitação foi recebida. Entraremos em contato em breve pelo telefone ${formData.telefone}`);
    
    // Reset form
    this.reset();
  });
}

// Scroll animations for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe gallery items and service cards
document.querySelectorAll('.gallery-item, .service-card, .processo-item, .testimonial-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Mobile menu toggle (if needed)
let menuOpen = false;

// Add class to body on scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Button click handlers
const btnSolicitar = document.querySelectorAll('.btn-primary');
btnSolicitar.forEach(btn => {
  btn.addEventListener('click', function(e) {
    if (this.textContent.toLowerCase().includes('solicitar')) {
      const orcamentoSection = document.querySelector('.orcamento');
      if (orcamentoSection) {
        orcamentoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

console.log('✨ Landing page Alfa Costura carregada com sucesso!');