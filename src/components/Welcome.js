import { onNavigate } from "../main.js";

export const Welcome = () => {
  // esta función estará disponible en el main
  const div = document.createElement("div");
  div.className = "container";

  const header = document.createElement("header");
  header.className = "header";
  const nameApp = document.createElement("section");
  nameApp.className = "logo;";
  const welcomeTitle = document.createElement("p");
  welcomeTitle.textContent =
    "¡Bienvenid@ a  la app donde podrás ampliar tu red de apoyo!";
  const infoTitle = document.createElement("p");
  infoTitle.className = "welcomeMessage";
  infoTitle.textContent =
    "Si eres migrante en Colombia, no conoces muchas personas y deseas conocer más, este es el lugar indicado.";
  const welcomeImage = document.createElement("img");
  welcomeImage.setAttribute("src", "./img/cultural-diversity.png");
  welcomeImage.setAttribute("id", "diversityImage");

  div.append(nameApp, welcomeTitle, infoTitle);

  const sectioni = document.createElement("section");
  sectioni.setAttribute("id", "sectioni");
  const emailInput = document.createElement("input");
  emailInput.setAttribute("requiered", "");
  emailInput.setAttribute("placeholder", "Correo electrónico");
  emailInput.setAttribute("id", "emailLogin");
  emailInput.textContent = "Ingresa tu e-mail";
  const passInput = document.createElement("input");
  passInput.setAttribute("requiered", "");
  passInput.setAttribute("placeholder", "Contraseña");
  passInput.setAttribute("id", "passwordLogin");
  passInput.textContent = "Ingresa tu contraseña";
  const loginButton = document.createElement("button");
  loginButton.setAttribute("id", "loginButton1");
  loginButton.textContent = "Entrar";
  const googleLoginBtn = document.createElement("button");
  googleLoginBtn.setAttribute("id", "googleLoginBtnG");
  googleLoginBtn.textContent = "Ingresa con Google";
  const registerLink = document.createElement("button");
  registerLink.setAttribute("id", "registerLink1");
  registerLink.textContent = "¿No tienes una cuenta? ¡Puedes crearla aquí!";

  sectioni.append(
    emailInput,
    passInput,
    loginButton,
    googleLoginBtn,
    registerLink
  );

  registerLink.addEventListener("click", () => {
    onNavigate("/register");
  });

  div.append(header, sectioni, welcomeImage);

  return div;
};
