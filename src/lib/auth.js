import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

//Importamos las funciones AUTH 
import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAjKkyDbHluBqhq8ZVzEkc1vb231KCN8os",
    authDomain: "migrored-9fcb3.firebaseapp.com",
    projectId: "migrored-9fcb3",
    storageBucket: "migrored-9fcb3.appspot.com",
    messagingSenderId: "947566190597",
    appId: "1:947566190597:web:a0d69f203b5840fa2b7c6c"
  };

  //Inicializamos Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  // Declaramos a Google como proveedor
  export const provider = new GoogleAuthProvider();
  export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  export const popupGoogle = () => signInWithPopup(auth, provider);
  export const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);