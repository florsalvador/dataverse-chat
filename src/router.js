let ROUTES = {}; 
let rootEl; 

export const setRootEl = (el) => { 
  rootEl = el;
}

export const setRoutes = (routes) => {
  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  const object = {};
  for (const [key, value] of queryString) {
    object[key] = value;
  }
  return object;
}

const renderView = (pathname, props ={}) => { 
  rootEl.innerHTML = "";
  let keyId = 0;
  for (const key in props) {
    keyId = key;
  }
  if(!ROUTES[pathname] || (keyId ? keyId !== "id" : false)){
    window.history.pushState({}, "/errorGatuno", `${window.location.origin}/errorGatuno`);
    pathname = "/errorGatuno";
  } 
  rootEl.appendChild(ROUTES[pathname](props));
}

export const navigateTo = (pathname, props) => {
  window.history.pushState({}, pathname, `${window.location.origin + pathname}${props ? "?id=" + props.id : ""}`);
  window.scrollTo(0, 0);
  renderView(pathname, props);
}

export const onURLChange = (location) => {
  const pathname = location.pathname;
  const queryString = new URLSearchParams(location.search);
  const objProps = queryStringToObject(queryString);
  renderView(pathname, objProps);
}
