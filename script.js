function trocarTema() {
  const html = document.documentElement;
  html.classList.toggle("branco");

  const img = document.querySelector("#profileblack img");

  if (html.classList.contains("branco")) {
    img.setAttribute("src", "assets/avatar-light.png");
    img.setAttribute("alt", "megumim em pé");
    } else {
    img.setAttribute("src", "assets/avatar.png");
    img.setAttribute("alt", "megumim deitada");
}
}
