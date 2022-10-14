// Este es el punto de entrada de tu aplicacion

import { Welcome } from "./components/Welcome.js";
import { Register } from "./components/Register.js";
import { Wall } from "./components/Wall.js";

const routes = {
  // aquí va la ruta y lo que debe renderizar
  "/": Welcome,
  "/register" : Register,
  "/wall" : Wall,
 };
// funcion on navigate recibe la ruta, después utiliza el obj window.history, avienta el push state, que requiere un estado (vacio)
// la ruta como parte del título y el dominio en el cual estamos más la ruta
// esta función onNavigate tiene la tarea de trabajar para la navegación
export const onNavigate = (pathname, paramRoutes = routes) => {
  const root = document.getElementById("root");
  window.history.pushState(
    {}, 
    pathname, 
    window.location.origin + pathname,
    );
  if (root.firstChild) {
    root.removeChild(root.firstChild)
  };
  root.appendChild(paramRoutes[pathname]());
};


window.onpopstate = () => {
  const component = routes[window.location.pathname];
  const root = document.getElementById("root");
  if (root.firstChild) {
    root.removeChild(root.firstChild)
  };
  root.append(component());
};

window.addEventListener("load", () => {
  const component = routes[window.location.pathname];
  root.appendChild(component());
})
