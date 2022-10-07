import { onNavigate } from "../main.js";
import { createUser, popupGoogle } from "../lib/auth.js";

export const Register = () => {
  // esta función estará disponible en el main
  const div = document.createElement("div");
  div.className = "container";

  const regHeader = document.createElement("header");
  regHeader.className = "regHeader";
  const logo = document.createElement("img");
  logo.setAttribute("src", "./img/migroredlogo.png");
  logo.setAttribute("id", "migroRedLogoR");
  const welcomeTitle = document.createElement("p");
  welcomeTitle.textContent =
    "Aquí puedes registrarte rápido y facil, solo ingresa tu correo y contraseña. También puedes registrarte automáticamente con tu cuenta de Google.";
  welcomeTitle.setAttribute("id", "welcomeRegister");
  const welcomeImg = document.createElement("img");
  welcomeImg.setAttribute("src", "./img/cultural-diversity.png");
  welcomeImg.setAttribute("id", "diversityImage");

  regHeader.append(logo, welcomeTitle);

  const registerSection = document.createElement("section");
  registerSection.setAttribute("id", "registerBox");
  const emailRequest = document.createElement("input");
  emailRequest.setAttribute("placeholder", "Correo Electrónico");
  emailRequest.setAttribute("id", "emailInput");
  const passwordRequest = document.createElement("input");
  passwordRequest.setAttribute("placeholder", "Contraseña");
  passwordRequest.setAttribute("id", "passInput");
  passwordRequest.setAttribute("type", "password");
  const button = document.createElement("button");
  button.textContent = "Registrarme";
  button.setAttribute("id", "registerButton");
  const googleRegisterBtn = document.createElement("button");
  //googleRegisterBtn.textContent = "Continua con Google";
  googleRegisterBtn.setAttribute("id", "googleRegisterBtn");
  const backButton = document.createElement("button");
  backButton.setAttribute("id", "backToLoginBtn");
  backButton.textContent = "¿Ya tienes una cuenta? ¡Ingresa aquí!";

  const errorNotice = document.createElement("p");
  errorNotice.setAttribute("id", "error-paragraph");

  registerSection.append(
    emailRequest,
    passwordRequest,
    button,
    googleRegisterBtn,
    backButton,
    errorNotice
  );

  backButton.addEventListener("click", () => {
    onNavigate("/");
  });

  // Escuchador botón google
  googleRegisterBtn.addEventListener("click", () => {
    popupGoogle().then(() => {
      onNavigate("/wall");
    });
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const signupEmail = emailRequest.value;
    const signupPassword = passwordRequest.value;

    createUser(signupEmail, signupPassword)
      .then(() => {
        onNavigate("/wall");
      })
      .catch((error) => {
        const usedEmail = "Email en uso, inicie sesión";
        const shortPasword = "La contraseña debe ser minimo de 6 caracteres";
        const invalidEmail = "Ingrese un email valido";
        const missingEmail = "Escriba un email";

        if (error.code === "auth/invalid-email") {
          errorNotice.innerText = invalidEmail;
        } else if (error.code === "auth/email-alredy-in-use") {
          errorNotice.innerText = usedEmail;
        } else if (error.code === "auth/missing-email") {
          errorNotice.innerText = missingEmail;
        } else if (error.code === "auth/weak-password") {
          errorNotice.innerText = shortPasword;
        }
      });
  });

  div.append(regHeader, registerSection, welcomeImg);

  return div;
};
