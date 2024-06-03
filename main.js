let modo = document.getElementById("modo");
let mudarPagina = document.querySelector(".mudarPagina");
let body = document.querySelector("body");
let main = document.querySelector("main");
let header = document.querySelector("header");
let footer = document.querySelector("footer");



document.addEventListener("DOMContentLoaded", () => {
  function escuro() {
    modo.classList.toggle("dark");
    body.classList.toggle("dark");
    main.classList.toggle("dark");
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
  }

  if (localStorage.getItem("modoEscuro") === "true") {
    escuro();
  }

  modo.addEventListener("click", () => {
    escuro();
    localStorage.setItem("modoEscuro", body.classList.contains("dark"));
  });
});

