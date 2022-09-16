import { onNavigate } from "../main.js";

export const Welcome = () => {
  // esta función estará disponible en el main
  const div = document.createElement("div");
  const welcomeTitle = document.createElement("h2");
  const emailInput = document.createElement("input");
  const passInput = document.createElement("input");
  const loginButton = document.createElement("button");
  const googleLoginBtn = document.createElement("button");
  const registerLink = document.createElement("button");

  welcomeTitle.textContent = "Bienvenid@ a tu nueva red de apoyo";
  emailInput.textContent = "Ingresa tu e-mail"
  passInput.textContent = "Ingresa tu contraseña"
  loginButton.textContent = "Ingresar - Iniciar Sesión";
  googleLoginBtn.textContent = "Continua con Google";
  registerLink.textContent = "¿No tienes una cuenta? ¡Puedes crearla aquí!";

  registerLink.addEventListener("click", () => {
    onNavigate("/register");
  });
  
  div.append(welcomeTitle, emailInput, passInput, loginButton, googleLoginBtn, registerLink);

  return div;
};
