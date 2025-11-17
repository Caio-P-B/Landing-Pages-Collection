// Calculadora de Economia
function calcularEconomia() {
    const rendaInput = document.getElementById('renda');
    const gastosInput = document.getElementById('gastos');
    const resultadoSpan = document.getElementById('resultado');

    const renda = parseFloat(rendaInput.value) || 0;
    const gastos = parseFloat(gastosInput.value) || 0;
    const economia = renda - gastos;

    const valorFormatado = economia.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    resultadoSpan.textContent = valorFormatado;
}

// Event Listeners para a Calculadora
document.getElementById('renda')?.addEventListener('input', calcularEconomia);
document.getElementById('gastos')?.addEventListener('input', calcularEconomia);
document.querySelector('.calculadora .btn-primary')?.addEventListener('click', calcularEconomia);

// Formulário de Contato
document.querySelector('.form-contato')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const telefone = this.querySelector('input[type="tel"]').value;
    const renda = this.querySelector('select').value;

    if (nome && email && telefone && renda !== 'Selecione') {
        alert(`Obrigado ${nome}! Vamos analisar seus dados e entrar em contato em breve!`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Smooth Scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Inicializar calculadora com valores padrão
calcularEconomia();

// Animação de números ao scrollar
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .step, .testimonial').forEach(element => {
    observer.observe(element);
});

// Adicionar animação CSS dinamicamente
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

    .card, .step, .testimonial {
        opacity: 0;
    }
`;
document.head.appendChild(style);