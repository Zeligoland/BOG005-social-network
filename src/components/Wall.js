import { onNavigate } from "../main.js";
import { saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask } from "../lib/firest.js";

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

    sectionPost.append(postElement, postButton);

    const posters = document.createElement("section");
    posters.setAttribute("class", "posters");
    const postComplete = document.createElement("section");
    postComplete.setAttribute("class", "postComplete");

    posters.append(postComplete);

    backButtonWall.addEventListener("click", () => {
        onNavigate("/");
    });

    let editStatus = false;
    let id = "";


    window.addEventListener("DOMContentLoaded", async () => {

        onGetTasks((querySnapshot) => {
            let html = "";
            let counterLike = 0;
            querySnapshot.forEach((doc) => {
                const task = doc.data();
                html += `
                    <div>
                        <section class="postBox">
                        <br>
                        <button class="btn-edit" data-id="${doc.id}"></button>
                        <section class="post">
                        <h3>${task.postElement}</h3>
                        </section>
                        <p class="counter-likes">0</p>
                        <button class="btn-like" data-id="${doc.id}">like</button>
                        <button class="btn-delete" data-id="${doc.id}">Borrar</button>
                        </section>
                    </div>
                 `;
            });
            postComplete.innerHTML = html;

            const btnsDelete = postComplete.querySelectorAll(".btn-delete");

            const counterLikes = postComplete.querySelector(".counter-likes");
            const btnLike = postComplete.querySelectorAll(".btn-like");

            btnLike.forEach(btn => {
                btn.addEventListener("click", ({ target: { dataset } }) => {
                    console.log("like", dataset.id)

                    counterLikes.innerHTML=``;
                    counterLike++;
                    counterLikes.innerHTML=`${counterLike}`;
                    
                });
            });


            btnsDelete.forEach(btn => {
                btn.addEventListener("click", ({ target: { dataset } }) => {
                    deleteTask(dataset.id);
                }); 
            });

            const btnsEdit = postComplete.querySelectorAll(".btn-edit");
            const taskForm = document.getElementById("postContent");

            btnsEdit.forEach((btn) => {
                btn.addEventListener("click", async (e) => {
                    const doc = await getTask(e.target.dataset.id);
                    const task = doc.data();

                    taskForm.value = task.postElement;

                    editStatus = true;
                    id = doc.id;

                    postButton.innerText = "Editar";
                })
            })
        });
    });

    postButton.addEventListener("click", (e) => {
        e.preventDefault();

        const post = postElement;

        saveTask(postElement.value);
       if (!editStatus) {
        saveTask(postElement.value);
       } else {
        updateTask(id, {
            postElement: postElement.value});
            editStatus = false;

       };

        postElement.value = ""; 
        postButton.innerText = "Publicar";

    });



    div.append(header, sectionPost, postComplete);

    return div;
};