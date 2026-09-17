// Array com os caminhos das imagens do Banner Hero
const imagens = [
    "public/assets/images/img-header.jpg",
    "public/assets/images/img-header2.jpg"
];

let indexAtual = 0;
const heroElement = document.getElementById("hero-banner");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function atualizarFundo() {
    if (heroElement) {
        heroElement.style.backgroundImage = `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url('${imagens[indexAtual]}')
        `;
    }
}

// Botão Próximo
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        indexAtual = (indexAtual + 1) % imagens.length;
        atualizarFundo();
    });
}

// Botão Anterior
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
        atualizarFundo();
    });
}

// Carrega a primeira imagem logo que a página abre
atualizarFundo();

// Envio do formulário para o WhatsApp
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        const telefone = "5511970494049"; 

        const texto = `Olá! Meu nome é *${nome}*.\nMeu e-mail é: ${email}\n\nMensagem:\n${mensagem}`;

        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');
    });
}

// Script para o Menu Responsivo (Hambúrguer) corrigido para 'nav-menu'
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu automaticamente quando o usuário clica em algum link de âncora
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}



