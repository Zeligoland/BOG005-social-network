// Configuración de Firestore
import { app } from "../lib/auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc } from "./utils.js";

const db = getFirestore(app);
export const saveTask = (postElement,email) => {
    addDoc(collection(db, "tasks"), {postElement, likes: [], email, date: {}}) //añadir like: []/ like: 0
};

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) => onSnapshot(collection(db,"tasks"), callback);
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const getTask = (id) => getDoc(doc(db, "tasks", id));
export const updateTask = (id, newFields) => 
    updateDoc(doc(db, "tasks", id), newFields); 




