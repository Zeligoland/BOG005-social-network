import { onNavigate } from "../main.js";
import { saveTask, getTasks, onGetTasks, deleteTask, getTask } from "../lib/firest.js";

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
    postElement.spellcheck = true;
    const postButton = document.createElement("button");
    postButton.setAttribute("id", "postButton1");
    postButton.textContent = "Publicar";
    const buttonLike = document.createElement("button");
    buttonLike.setAttribute("id", "buttonLike1");
    buttonLike.textContent = "Like";

    sectionPost.append(postElement, buttonLike);
    sectionPost.append(postElement, postButton);

    const posters = document.createElement("section");
    posters.setAttribute("id", "posters");
    const postComplete = document.createElement("section");
    postComplete.setAttribute("id", "postComplete");

    posters.append(postComplete);

    backButtonWall.addEventListener("click", () => {
        onNavigate("/");
    });

    window.addEventListener("DOMContentLoaded", async () => {

        onGetTasks((querySnapshot) => {
            let html = "";

            querySnapshot.forEach((doc) => {
                const task = doc.data();
                html += `
                    <div>
                        <h3>${task.postElement}</h3>
                        <button class="btn-delete" data-id="${doc.id}">Borrar</button>
                    </div>
                 `;
            });
            postComplete.innerHTML = html;

            const btnsDelete = postComplete.querySelectorAll(".btn-delete");

            btnsDelete.forEach(btn => {
                btn.addEventListener("click", ({ target: { dataset } }) => {
                    deleteTask(dataset.id);
                });
            });
        });
    });

    postButton.addEventListener("click", (e) => {
        e.preventDefault();

        const post = postElement;

        saveTask(postElement.value);

        postElement.value = "";
    });

    div.append(header, sectionPost, postComplete);

    return div;
};