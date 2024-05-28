function verificarTema() {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    const modoEscuroAtivoA = header.classList.contains("modo-escuro");
    const modoEscuroAtivoB = h1.classList.contains("modo-escuro");
    const modoEscuroAtivoC = footer.classList.contains("modo-escuro");

    if (modoEscuroAtivo && modoEscuroAtivoA && modoEscuroAtivoB && modoEscuroAtivoC) {
        imagemBotaoTrocaTema.setAttribute("src", "./assets/imagens/sol.png");
    } else {
        imagemBotaoTrocaTema.setAttribute("src", "./assets/imagens/lua.png");
    }
}

// Chamar a função para verificar o tema ao carregar a página
window.addEventListener("load", verificarTema);

// evento botão
botaoAlterarTema.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    header.classList.toggle("modo-escuro");
    h1.classList.toggle("modo-escuro");
    footer.classList.toggle("modo-escuro");

    // Verificar e aplicar o tema após a alteração do tema
    verificarTema();
});