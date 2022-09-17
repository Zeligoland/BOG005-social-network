import { onNavigate } from "../main.js";

export const Welcome = () => {
  // esta función estará disponible en el main
  const div = document.createElement("div");
  const nameApp = document.createElement("h1");
  const welcomeTitle = document.createElement("h2");
  const emailInput = document.createElement("input");
  emailInput.setAttribute("requiered", "")
  emailInput.setAttribute("placeholder", "Correo electrónico")
  emailInput.setAttribute("id", "emailLogin")
  const passInput = document.createElement("input");
  passInput.setAttribute("requiered", "")
  passInput.setAttribute("placeholder", "Contraseña")
  passInput.setAttribute("id", "passwordLogin")
  const loginButton = document.createElement("button");
  loginButton.setAttribute("id", "loginButton1")
  const googleLoginBtn = document.createElement("button");
  googleLoginBtn.setAttribute("id", "googleLoginBtnG");
  const registerLink = document.createElement("button");

  nameApp.textContent = "MigroRed";
  welcomeTitle.textContent = "Bienvenid@ a  la app donde podrás ampliar tu red de apoyo, si eres migrante en Colombia, no conoces muchas personas y deseas conocer más, este es el lugar indicado.";
  emailInput.textContent = "Ingresa tu e-mail"
  passInput.textContent = "Ingresa tu contraseña"
  loginButton.textContent = "Inicia Sesión";
  googleLoginBtn.textContent = "Sign in with Google";
  registerLink.textContent = "¿No tienes una cuenta? ¡Puedes crearla aquí!";

  registerLink.addEventListener("click", () => {
    onNavigate("/register");
  });
  
  div.append(nameApp, welcomeTitle, emailInput, passInput, loginButton, googleLoginBtn, registerLink);

  return div;
};
