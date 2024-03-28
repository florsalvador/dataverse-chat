import { Home } from './views/Home.js';
import { Chat } from './views/Chat.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange} from './router.js';

// Define your routes and their associated views
const routes = { 
  //son pares key:value, donde key es el pathname de URL y el value es una función asociada que genera la vista (view). Por ejemplo, en el 
  //siguiente bloque de código, se define un objeto, donde las llaves son las pathnames y los valores son funciones.

  '/': Home,
  '/chat': Chat,
  // '/chatGrupal': ChatGrupal,
  // '/gatoInfo': GatoInfo,
  // '/ErrorGatuno': ErrorGatuno,

};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered // Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.querySelector("#root"));//rootEl = el
  onURLChange(window.location) 
  //renderView(routes['/'] , "Persa");
});

/*
window.addEventListener('popstate', ({objetivo}) => {
  onURLChange(window.location);
});
*/




///////////////////////////////////////
// const root = document.getElementById("root");
// root.appendChild(Home());
///////////////////////////////////////

// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/