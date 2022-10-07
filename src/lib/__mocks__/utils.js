// Este archivo hace un mock de cada función de firebase que pide el test
// Todo lo que está en mocks debe ser espejo de lo que está afuera
export const initializeApp = () => Promise.resolve({}); // Initialize app resuelve una promesa
export const getAuth = () => Promise.resolve({}); // getAuth mockeado
export class GoogleAuthProvider {  constructor() {this.name = 'google';}};
export const getFirestore = () => Promise.resolve({});