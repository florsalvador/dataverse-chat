import data from './data/dataset.js';

let ROUTES = {}; 
let rootEl; 

export const setRootEl = (el) => { 
  rootEl = el;
}

export const setRoutes = (routes) => {
  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
}

const renderView = (pathname, props/* ={} */) => { 

  rootEl.innerHTML = "";//Colocarlo en otro lugar //mejorar //OH Lunes o martes
  rootEl.appendChild(pathname(props));
} 

export const navigateTo = (pathname, props={}) => {
}

export const onURLChange = (location) => {
  const pathname = location.pathname;
  renderView(ROUTES[pathname], data);
  //const params = new URLSearchParams(location.search);//queryString
}