import { Home } from './views/Home.js';
import { ChatGato } from './views/ChatGato.js';
import { GatoInfo } from './views/GatoInfo.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const routes = { 
  '/': Home,
  '/chatGato': ChatGato,
  // '/chatGrupal': ChatGrupal,
  '/gatoInfo': GatoInfo,
  // '/ErrorGatuno': ErrorGatuno,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.querySelector("#root")); // rootEl = el
  onURLChange(window.location) 
});

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});
