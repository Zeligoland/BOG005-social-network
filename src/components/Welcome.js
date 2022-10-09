import { onNavigate } from "../main.js";
import { signInUser, popupGoogle } from "../lib/auth.js";

export const Welcome = () => {
  // esta función estará disponible en el main
  const div = document.createElement("div");
  div.className = "container";

  const header = document.createElement("header");
  header.className = "header";
  const logo = document.createElement("img");
  logo.setAttribute("src", "./img/migroredlogo.png");
  logo.setAttribute("id", "migroRedLogo");
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
  
  header.append(logo, welcomeTitle, infoTitle);

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
  passInput.setAttribute("type", "password");
  passInput.textContent = "Ingresa tu contraseña";
  const loginButton = document.createElement("button");
  loginButton.setAttribute("id", "loginButton1");
  loginButton.textContent = "Entrar";
  const googleLoginBtn = document.createElement("button");
  googleLoginBtn.setAttribute("id", "googleLoginBtnG");
  //googleLoginBtn.textContent = "Ingresa con Google";
  const registerLink = document.createElement("button");
  registerLink.setAttribute("id", "registerLink1");
  registerLink.textContent = "¿No tienes una cuenta? ¡Puedes crearla aquí!";

  const errorNotice = document.createElement("p");
  errorNotice.setAttribute("id", "error-paragraph");

  sectioni.append(
    emailInput,
    passInput,
    loginButton,
    googleLoginBtn,
    registerLink,
    errorNotice
  );

  registerLink.addEventListener("click", () => {
    onNavigate("/register");
  });

  // Escuchador botón google
  googleLoginBtn.addEventListener("click", () => {
    popupGoogle().then(() => {
      onNavigate("/wall");
    });
  });

  //Escuchador boton login
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const loginEmail = emailInput.value;
    const loginPassword = passInput.value;
    signInUser(loginEmail, loginPassword)
      .then(() => {
        onNavigate("/wall");
      })
      .catch((error) => {
        const userNotFound = "Este email no está registrado";
        const wrongPassword = "Clave equivocada, intente de nuevo";
        const invalidEmail =
          "Correo invalido, revise la información suministrada";
        const enterPassword = "Por favor ingrese la contraseña";

        if (error.code === "auth/invalid-email") {
          errorNotice.innerText = invalidEmail;
        } else if (error.code === "auth/wrong-password") {
          errorNotice.innerText = wrongPassword;
        } else if (error.code === "auth/user-not-found") {
          errorNotice.innerText = userNotFound;
        } else if (error.code === "auth/internal-error") {
          errorNotice.innerText = enterPassword;
        }
      });
  });

  div.append(header, sectioni, welcomeImage);

  return div;
}; 