// ============================================
// Funções Utilitárias
// ============================================

/**
 * Scroll suave para uma seção específica
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

/**
 * Simular agendamento de consulta
 */
function simularAgendamento(dia, hora) {
    const dias = {
        'seg': 'Segunda-feira',
        'qua': 'Quarta-feira',
        'sex': 'Sexta-feira'
    };

    const mensagem = `Você selecionou: ${dias[dia]} às ${hora}\n\nEsta é uma demonstração. Em um site real, você seria redirecionado para um formulário de agendamento.`;
    
    // Criar modal personalizado
    mostrarModalAgendamento(mensagem);
}

/**
 * Mostrar modal de confirmação de agendamento
 */
function mostrarModalAgendamento(mensagem) {
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;

    // Criar modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        animation: slideUp 0.4s ease-out;
    `;

    modal.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">📅</div>
        <h3 style="color: #1e5bb8; margin-bottom: 1rem;">Agendamento Simulado</h3>
        <p style="color: #6b7280; margin-bottom: 2rem; line-height: 1.6;">${mensagem}</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="fecharModal()" style="
                padding: 0.75rem 1.5rem;
                border: 2px solid #1e5bb8;
                background: transparent;
                color: #1e5bb8;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            ">Fechar</button>
            <button onclick="abrirWhatsApp()" style="
                padding: 0.75rem 1.5rem;
                border: none;
                background: #1e5bb8;
                color: white;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            ">Falar no WhatsApp</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Adicionar estilos de animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Fechar modal ao clicar fora
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            fecharModal();
        }
    });
}

/**
 * Fechar modal
 */
function fecharModal() {
    const overlay = document.querySelector('div[style*="position: fixed"]');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => overlay.remove(), 300);
    }
}

/**
 * Abrir WhatsApp
 */
function abrirWhatsApp() {
    const numero = '5511987654321';
    const mensagem = 'Olá! Gostaria de agendar uma consulta com o Dr. João Silva.';
    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
}

/**
 * Inicializar animações ao scroll
 */
function initScrollAnimations() {
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

    // Observar elementos para animação
    document.querySelectorAll('.card, .especialidade-card, .beneficio-item, .faq-item, .agenda-day').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Configurar interações do FAQ
 */
function setupFAQInteractions() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('toggle', function() {
            // Fechar outros itens quando um novo for aberto
            if (this.open) {
                faqItems.forEach(otherItem => {
                    if (otherItem !== this && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });
}

/**
 * Configurar efeito de destaque no header ao scroll
 */
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });
}

/**
 * Inicializar todas as funcionalidades
 */
function inicializarPagina() {
    console.log('Inicializando página do Dr. João Silva...');

    // Configurar animações
    initScrollAnimations();
    setupFAQInteractions();
    setupHeaderScroll();

    // Adicionar evento para botões do WhatsApp
    document.addEventListener('click', (e) => {
        if (e.target.textContent === 'Falar com WhatsApp') {
            abrirWhatsApp();
        }
    });

    console.log('Página inicializada com sucesso!');
}

// Aguardar carregamento do DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarPagina);
} else {
    inicializarPagina();
}