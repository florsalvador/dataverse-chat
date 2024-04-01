import { Home } from './views/Home.js';
import { Chat } from './views/Chat.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const routes = { 
  '/': Home,
  '/chat': Chat,
  // '/chatGrupal': ChatGrupal,
  // '/gatoInfo': GatoInfo,
  // '/ErrorGatuno': ErrorGatuno,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.querySelector("#root")); // rootEl = el
  onURLChange(window.location) 
  //renderView(routes['/'] , "Persa");
});

// window.addEventListener('popstate', ({objetivo}) => {
//   onURLChange(window.location);
// });
