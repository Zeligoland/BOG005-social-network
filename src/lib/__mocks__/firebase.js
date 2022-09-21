import { firebaseConfig } from "../../lib/__mocks__/config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import {  } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

auth.languageCode = "es";

export async function login() {
    try {
        const response = await auth.signInWithPopup(provider);
        console.log(response);
        return response.user;

    } catch(error){
        throw new Error(error);
    }
}

export function logout(){
    auth.signOut();
}


/*googleLoginBtn.addEventListener("click", e => {
    try {
  
      await login();
  
    } catch(error){}
  });*/
  