// En este archivo están todas las funciones/utilidades redirigidas por una URL hacia firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc, 
  arrayUnion,
  Timestamp
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

//Importamos las funciones AUTH
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

export {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  onAuthStateChanged,
  arrayUnion,
  Timestamp
};
