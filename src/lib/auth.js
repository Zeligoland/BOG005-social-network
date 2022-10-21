//Importamos las funciones AUTH - Cambiamos la ruta del firebase de cada una
import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
} from "./utils.js";

const firebaseConfig = {
  apiKey: "AIzaSyDx_0y-QEOg_iKrs2rvQkEXNMtu9I9UmRo",
  authDomain: "migroredsn.firebaseapp.com",
  projectId: "migroredsn",
  storageBucket: "migroredsn.appspot.com",
  messagingSenderId: "893397271902",
  appId: "1:893397271902:web:773b4f117290368ad9bbcf"
};

//Inicializamos Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Declaramos a Google como proveedor
export const provider = new GoogleAuthProvider();
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const popupGoogle = () => signInWithPopup(auth, provider);
export const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);



 
  