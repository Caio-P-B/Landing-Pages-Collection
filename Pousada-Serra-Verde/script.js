// Scroll to sections
function scrollToReserva() {
    const element = document.getElementById('reserva');
    element.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAcomodacoes() {
    const element = document.getElementById('acomodacoes');
    element.scrollIntoView({ behavior: 'smooth' });
}

// Select accommodation from card
function selecionarAcomodacao(nome) {
    const select = document.getElementById('acomodacao');
    
    // Map accommodation name to select value
    const valores = {
        'Quarto Casal': 'Quarto Casal',
        'Quarto Família': 'Quarto Família',
        'Chalé': 'Chalé'
    };
    
    select.value = valores[nome];
    scrollToReserva();
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const formData = {
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        acomodacao: document.getElementById('acomodacao').value,
        hospedes: document.getElementById('hospedes').value,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        observacoes: document.getElementById('observacoes').value
    };

    // Validate dates
    const checkin = new Date(formData.checkin);
    const checkout = new Date(formData.checkout);
    
    if (checkout <= checkin) {
        alert('A data de check-out deve ser posterior à data de check-in!');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    // Calculate number of nights
    const nights = Math.floor((checkout - checkin) / (1000 * 60 * 60 * 24));
    
    // Show success message
    const precos = {
        'Quarto Casal': 250,
        'Quarto Família': 420,
        'Chalé': 580
    };
    
    const preco = precos[formData.acomodacao] || 0;
    const total = preco * nights;

    alert(`Reserva confirmada! 🎉\n\n` +
        `Hóspede: ${formData.nome}\n` +
        `Acomodação: ${formData.acomodacao}\n` +
        `Noites: ${nights}\n` +
        `Total: R$ ${total.toFixed(2)}\n\n` +
        `Um e-mail de confirmação foi enviado para ${formData.email}`);

    // Reset form
    document.getElementById('reservaForm').reset();
}

// Set minimum checkout date
document.addEventListener('DOMContentLoaded', function() {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    checkinInput.min = today;
    checkoutInput.min = today;
    
    // Update checkout minimum when checkin changes
    checkinInput.addEventListener('change', function() {
        const tomorrow = new Date(this.value);
        tomorrow.setDate(tomorrow.getDate() + 1);
        checkoutInput.min = tomorrow.toISOString().split('T')[0];
    });
});