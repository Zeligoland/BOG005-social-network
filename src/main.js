// Este es el punto de entrada de tu aplicacion

import { Welcome } from "./components/Welcome.js";
import { Register } from "./components/Register.js";
<<<<<<< HEAD
<<<<<<< HEAD
import { Wall } from "./components/Wall.js";
=======
>>>>>>> 6537cb0 (Dando formato y haciendo ajustes para tests)
=======
import { Wall } from "./components/Wall.js";
>>>>>>> 508b3c2 (Receiving changes from Tatiana)

const root = document.getElementById("root");

const routes = {
  // aquí va la ruta y lo que debe renderizar
  "/": Welcome,
<<<<<<< HEAD
<<<<<<< HEAD
  "/register" : Register,
  "/wall" : Wall,
 };
=======
  "/register": Register,
};
>>>>>>> 6537cb0 (Dando formato y haciendo ajustes para tests)
=======
  "/register" : Register,
  "/wall" : Wall,
 };
>>>>>>> 508b3c2 (Receiving changes from Tatiana)
// funcion on navigate recibe la ruta, después utiliza el obj window.history, avienta el push state, que requiere un estado (vacio)
// la ruta como parte del título y el dominio en el cual estamos más la ruta
// esta función onNavigate tiene la tarea de trabajar para la navegación
export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());