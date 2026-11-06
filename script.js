// ==========================================
// AULA WEB113 - JAVASCRIPT E INTERATIVIDADE
// ==========================================

// Passo 1: Mensagem de boas-vindas ao carregar a página
alert("Bem-vindo(a) ao meu portfólio interativo!");

// Passo 2: Função do botão "Quem sou eu?"
function apresentacao() {
    alert("Olá! Sou estudante de Desenvolvimento Web e estou aprendendo JavaScript.");
}

// Passo 3: Função para alterar o título dinamicamente com prompt
function alterarTagTitulo() {
    let nomeUsuario = prompt("Digite o seu nome para personalizar o portfólio:");
    if (nomeUsuario) {
        document.getElementById("titulo-principal").innerHTML = "Portfólio de " + nomeUsuario;
    }
}

// Passo 4: Função para destacar a seção "Sobre Mim" mudando estilos via DOM
function destacarSobre() {
    let secaoSobre = document.getElementById("sobre");
    secaoSobre.style.backgroundColor = "#FFF3CD";
    secaoSobre.style.border = "2px solid #FFC107";
    secaoSobre.style.borderRadius = "10px";
}

// Passo 5: Contador de cliques interativo
let cliques = 0;
function contarClique() {
    cliques = cliques + 1;
    document.getElementById("contador").innerHTML = cliques;
}

// Desafio Extra: Modo Escuro (Dark Mode)
let modoDarkAtivo = false;
function modoEscuro() {
    if (!modoDarkAtivo) {
        // Ativar modo escuro
        document.body.style.backgroundColor = "#1a1a2e";
        document.body.style.color = "#ffffff";
        
        // Seleciona todos os cards e escurece o fundo deles
        let cards = document.querySelectorAll(".card");
        cards.forEach(function(card) {
            card.style.backgroundColor = "#16213e";
            card.style.color = "#ffffff";
            card.style.borderColor = "#0f3460";
        });
        modoDarkAtivo = true;
    } else {
        // Voltar ao modo normal (recarrega a página ou desfaz)
        location.reload(); 
    }
}

// ==========================================================================
// AULA WEB114 - VALIDAÇÃO DE FORMULÁRIOS E SEGURANÇA (XSS)
// ==========================================================================

const formularioContato = document.getElementById("formContato");

if (formularioContato) {
    formularioContato.addEventListener("submit", function(evento) {
        // 1. Impede o recarregamento padrão da página ao enviar o formulário
        evento.preventDefault();

        // 2. Captura os valores digitados nos campos
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;
        let elementoFeedback = document.getElementById("feedback");

        // Limpa mensagens e classes anteriores
        elementoFeedback.textContent = "";
        elementoFeedback.className = "";

        // 3. Validações personalizadas com JavaScript
        if (nome.length < 3) {
            elementoFeedback.textContent = "❌ O nome deve ter pelo menos 3 caracteres.";
            elementoFeedback.className = "erro";
            return;
        }

        if (email.indexOf("@") === -1) {
            elementoFeedback.textContent = "❌ E-mail inválido. Certifique-se de incluir o caractere '@'.";
            elementoFeedback.className = "erro";
            return;
        }

        if (mensagem.length < 10) {
            elementoFeedback.textContent = "❌ A mensagem deve ter pelo menos 10 caracteres.";
            elementoFeedback.className = "erro";
            return;
        }

        // 4. Sucesso! Usamos textContent para evitar ataques XSS (Segurança)
        // Garante que tags HTML/JS inseridas pelo usuário apareçam apenas como texto puro na tela.
        elementoFeedback.textContent = "✅ Obrigado, " + nome + "! Mensagem enviada com sucesso.";
        elementoFeedback.className = "sucesso";

        // Limpa os campos do formulário após o envio bem-sucedido
        formularioContato.reset();
    });
}