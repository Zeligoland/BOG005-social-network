import { onNavigate } from "../main.js";

export const Wall = () => {

    const div = document.createElement("div");
    div.className = "container";

    const header = document.createElement("header");
    header.className = "header";
    const welcomeWall = document.createElement("p");
    welcomeWall.setAttribute("id", "welcomeWall")
    welcomeWall.textContent = "¡Comencemos a crear redes de apoyo!";
    const backButtonWall = document.createElement("button");
    backButtonWall.setAttribute("id", "backButton1");
    backButtonWall.textContent = "Salir";

    header.append(backButtonWall, welcomeWall);
    
    const sectionPost = document.createElement("section");
    sectionPost.setAttribute("id", "sectionPost");
    const postElement = document.createElement("textarea");
    postElement.setAttribute("id", "postContent");
    postElement.setAttribute("placeholder", "¿Que quieres decir/publicar?");
    const postButton = document.createElement("button");
    postButton.setAttribute("id", "postButton1");
    postButton.textContent = "Publicar";

    sectionPost.append(postElement, postButton);


    div.append(header, sectionPost);

    return div;
};