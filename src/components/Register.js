import { onNavigate } from "../main.js";

export const Register = () => {
  // esta función estará disponible en el main
  const div = document.createElement("div");
  const welcomeTitle = document.createElement("h2");
  const nameRequest = document.createElement("input");
  const lastNameRequest = document.createElement("input");
  const emailRequest = document.createElement("input");
  const button = document.createElement("button");
  const googleLoginBtn = document.createElement("button");
  const backButton = document.createElement("button");

  welcomeTitle.textContent = "Regístrate Aquí";
  button.textContent = "Enviar Información";
  googleLoginBtn.textContent = "Continua con Google";
  backButton.textContent = "Regresar";

  backButton.addEventListener("click", () => {
    onNavigate("/");
  });

  div.append(
    welcomeTitle,
    nameRequest,
    lastNameRequest,
    emailRequest,
    button,
    googleLoginBtn,
    backButton
  );

  return div;
};
