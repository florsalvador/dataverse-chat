// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home } from './views/Home.js';
import { setRootEl, setRoutes, renderView, onURLChange } from './router.js';

// define las rutas y sus vistas
const routes = {
  '/': Home(),
  // '/chat': Chat,
  // '/chatGrupal': ChatGrupal,
  // '/gatoInfo': Gato,
  // '/errorGatuno': ErrorGatuno
};

// asigna routes
setRoutes(routes);

// carga la url inicial
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // setRootEl();
  const root = document.querySelector("#root");
  // invoke onURLChange 
  // onURLChange();
  renderView(routes['/'], root);
});

// const root = document.querySelector("#root");
// renderView(routes['/'], root);

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/