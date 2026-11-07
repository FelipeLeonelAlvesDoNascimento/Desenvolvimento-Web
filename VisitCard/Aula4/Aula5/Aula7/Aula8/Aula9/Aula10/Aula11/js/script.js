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