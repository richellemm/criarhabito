const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const footer = document.querySelector("footer");
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

// evento botão
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    const modoEscuroAtivoA = header.classList.contains("modo-escuro")
    const modoEscuroAtivoB = h1.classList.contains("modo-escuro")
    const modoEscuroAtivoC = footer.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro");
    header.classList.toggle("modo-escuro");
    h1.classList.toggle("modo-escuro");
    footer.classList.toggle("modo-escuro");

    if(modoEscuroAtivo,modoEscuroAtivoA,modoEscuroAtivoB, modoEscuroAtivoC){
         imagemBotaoTrocaTema.setAttribute("src", "./assets/imagens/sol.png")

    }else{
       imagemBotaoTrocaTema.setAttribute("src", "./assets/imagens/lua.png")
    
    }
});
