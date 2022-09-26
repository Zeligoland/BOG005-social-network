import { onNavigate } from "../main.js";

export const Wall = () => {

    const div = document.createElement("div");
    div.className = "container";

    const header = document.createElement("header");
    header.className = "header";
    const welcomeTitle = document.createElement("p");
    welcomeTitle.textContent = "¡Bienvenid@ a  la app donde podrás ampliar tu red de apoyo!";

    header.append(welcomeTitle);

    div.append(header);

    return div;
};