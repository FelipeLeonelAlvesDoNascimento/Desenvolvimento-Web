function modoEscuro() {

    document.body.classList.toggle("dark-mode");

    const escuroAtivado = document.body.classList.contains("dark-mode");

    const icone = document.getElementById("iconeTema");

    if (escuroAtivado) {
        icone.src = "imagens/tema claro.png";
        icone.alt = "Ativar modo claro";
    } else {
        icone.src = "imagens/tema escuro.png";
        icone.alt = "Ativar modo escuro";
    }
}


// =================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// =================================

const formularioContato = document.getElementById("formularioContato");

if (formularioContato) {

    formularioContato.addEventListener("submit", function(e) {

        e.preventDefault();

        const nome = document.getElementById("nomeContato").value.trim();
        const email = document.getElementById("emailContato");
        const mensagem = document.getElementById("mensagemContato").value.trim();
        const feedback = document.getElementById("feedback");

        feedback.textContent = "";
        feedback.className = "feedback";

        // Verifica o nome
        if (nome.length < 3) {

            feedback.textContent = "❌ Nome deve ter pelo menos 3 caracteres.";
            feedback.classList.add("erro");
            return;

        }

        // Verifica o e-mail
        if (!email.checkValidity()) {

            feedback.textContent = "❌ E-mail inválido. Digite um e-mail válido.";
            feedback.classList.add("erro");
            email.focus();
            return;

        }

        // Verifica a mensagem
        if (mensagem.length < 10) {

            feedback.textContent = "❌ Mensagem deve ter pelo menos 10 caracteres.";
            feedback.classList.add("erro");
            return;

        }

        // Exibe mensagem de sucesso
        feedback.textContent = "✅ Formulário validado com sucesso!";
        feedback.classList.add("sucesso");

        // Limpa os campos
        formularioContato.reset();

    });

}