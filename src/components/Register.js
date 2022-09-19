import { onNavigate } from "../main.js";

export const Register = () => {
  // esta función estará disponible en el main
  const div = document.createElement("div");

  const registerSection = document.createElement("section");
  registerSection.setAttribute("id", "registerBox");
  const welcomeTitle = document.createElement("p");
  const nameRequest = document.createElement("input");
  nameRequest.setAttribute("placeholder", "Nombres");
  nameRequest.setAttribute("id", "nameInput");
  const lastNameRequest = document.createElement("input");
  lastNameRequest.setAttribute("placeholder", "Apellidos");
  lastNameRequest.setAttribute("id", "lastNameInput");
  const emailRequest = document.createElement("input");
  emailRequest.setAttribute("placeholder", "Correo Electrónico");
  emailRequest.setAttribute("id", "emailInput");
  const passwordRequest = document.createElement("input");
  passwordRequest.setAttribute("placeholder", "Contraseña");
  passwordRequest.setAttribute("id", "passInput");
  const button = document.createElement("button");
  button.textContent = "Registrarme";
  button.setAttribute("id", "registerButton");
  const googleRegisterBtn = document.createElement("button");
  googleRegisterBtn.textContent = "Continua con Google";
  googleRegisterBtn.setAttribute("id", "googleRegisterBtn");
  const backButton = document.createElement("button");
  backButton.textContent = "¿Ya tienes una cuenta? ¡Ingresa aquí!";
  backButton.setAttribute("id", "backToLoginBtn");
  const welcomeImg = document.createElement("img");
  welcomeImg.setAttribute("src", "./img/cultural-diversity.png");
  welcomeImg.setAttribute("id", "diversityImage");

  welcomeTitle.textContent = "Aquí puedes registrarte rápido y facil.";



  registerSection.append(
    nameRequest,
    lastNameRequest,
    emailRequest,
    passwordRequest,
    button,
    googleRegisterBtn,
    backButton
  );

  backButton.addEventListener("click", () => {
    onNavigate("/");
  });

  div.append(
    welcomeTitle,
    registerSection,
    welcomeImg
  );

  return div;
};
