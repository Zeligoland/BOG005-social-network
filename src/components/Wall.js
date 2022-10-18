import { onNavigate } from "../main.js";
import { saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask } from "../lib/firest.js";
import { auth } from "../lib/auth.js";
import { arrayUnion } from "../lib/utils.js";

export const Wall = () => {

    const div = document.createElement("div");
    div.className = "container";

    const header = document.createElement("header");
    header.className = "header";
    const logo = document.createElement("img");
    logo.setAttribute("src", "./img/migroredlogo.png");
    logo.setAttribute("id", "migroRedLogoW");
    const welcomeWall = document.createElement("p");
    welcomeWall.setAttribute("id", "welcomeWall")
    welcomeWall.textContent = "¡Comencemos a crear redes de apoyo!";
    const backButtonWall = document.createElement("button");
    backButtonWall.setAttribute("id", "backButton1");
    backButtonWall.textContent = "Salir";

    header.append(logo, backButtonWall, welcomeWall);

    const sectionPost = document.createElement("section");
    sectionPost.setAttribute("id", "sectionPost");
    const postElement = document.createElement("textarea");
    postElement.setAttribute("id", "postContent");
    postElement.setAttribute("placeholder", "¿Qué quieres decir/publicar?");
    postElement.spellcheck = true;
    const postButton = document.createElement("button");
    postButton.setAttribute("id", "postButton1");
    postButton.textContent = "Publicar";

    sectionPost.append(postElement, postButton);

    const posters = document.createElement("section");
    posters.setAttribute("class", "posters");
    const postComplete = document.createElement("section");
    postComplete.setAttribute("class", "postComplete");
    const errorMessage = document.createElement("p");

    posters.append(errorMessage, postComplete);

    backButtonWall.addEventListener("click", () => {
        onNavigate("/");
    });

    let editStatus = false;
    let id = "";
    
        onGetTasks((querySnapshot) => {
            let html = "";
            let counterLike = 0;
            querySnapshot.forEach((doc) => {
                const task = doc.data();
                const user = auth.currentUser;
                html += `
                <div>
                <section class="postBox">
                <h2>${task.email}</h2>
                <br>
                <button style=" visibility:${task.email === auth.currentUser.email?"visible":"hidden"}"class="btn-edit" data-id="${doc.id}"></button>
                <section class="post">
                <h3>${task.postElement}</h3>
                </section>
                <p class="counter-likes">${task.likes.length}</p>
                <button class="btn-like" data-id="${doc.id}"></button>
                <button style=" display:${task.email === auth.currentUser.email?"block":"none"}" class="btn-delete" data-id="${doc.id}">Borrar</button>
                </section>
                </div>
                `;
            });
            postComplete.innerHTML = html;
            
            const btnsDelete = postComplete.querySelectorAll(".btn-delete");
            
            const counterLikes = postComplete.querySelectorAll(".counter-likes");
            const btnLike = postComplete.querySelectorAll(".btn-like");
            
            btnLike.forEach(btn => {
                btn.addEventListener("click", ({ target: { dataset } }) => {
                    console.log(auth.currentUser.email)
                    console.log("like", )
                    updateTask(dataset.id, {
                        likes:  arrayUnion(auth.currentUser.email)});
                   
                    counterLikes.innerHTML=``;
                    counterLike++;
                    counterLikes.innerHTML=`${counterLike}`;
                    
                });
            });


            btnsDelete.forEach(btn => {
                btn.addEventListener("click", ({ target: { dataset } }) => {
                    const result = confirm("¿Estás seguro de borrar esta publicación?");
                    if (result === true){
                        return deleteTask(dataset.id);
                    }
                    else {
                        return false;
                    }

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

    postButton.addEventListener("click", (e) => {
        e.preventDefault();

        const post = postElement;

        if (post.value === "") {
            return errorMessage.textContent = "Por favor escriba algo";
        }

       if (!editStatus) {
        saveTask(postElement.value,auth.currentUser.email);
       } else {
        updateTask(id, {
            postElement: postElement.value});
            editStatus = false;
        } 
       
        postElement.value = ""; 
        postButton.innerText = "Publicar";

    });

    div.append(header, sectionPost, postComplete);

    return div;
};