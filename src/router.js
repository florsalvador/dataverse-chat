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

  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props ={}) => { 
  rootEl.innerHTML = "";//Colocarlo en otro lugar //mejorar //OH Lunes o martes
  //rootEl.appendChild(ROUTES[pathname](props));
  let keyId = 0;
  //let valueId = 0; 
  for (const key in props) {
    keyId = key;
    //valueId = props[key];
  }
  
  //const idGatos =["persa", "siames", "maine-coon"]
  //console.log(window.location.search, keyId, valueId, props)
  //for(let i = 0; i < idGatos.length; i++){
  if(!ROUTES[pathname] || (keyId ? keyId !== "id" : false) /*|| (valueId ? valueId !== idGatos[i] : false)*/){
    //rootEl.appendChild(ROUTES["/errorGatuno"]);
    // Si no existe, redirigir a la ruta de error
    window.history.pushState({}, "/errorGatuno", `${window.location.origin}/errorGatuno`);
    // Actualizar pathname
    pathname = "/errorGatuno";
  } 
  //}
 
  rootEl.appendChild(ROUTES[pathname](props));
}

export const navigateTo = (pathname, props) => {
  //url que no funciona completamente
  //const url = new URL(location);
  //url.searchParams.set("id", props.id);
  //const url = pathname + "?id=" + props.id;
  window.history.pushState({}, pathname, `${window.location.origin + pathname}${props ? "?id=" + props.id : ""}`);
  window.scrollTo(0, 0); // Reinicia el scroll al inicio de la página
  renderView(pathname, props);
}

export const onURLChange = (location) => {
  const pathname = location.pathname;
  const queryString = new URLSearchParams(location.search); // convierte "?id=persa" a { id → "persa" }
  const objProps = queryStringToObject(queryString); // convierte { id → "persa" } a { id: "persa" }
  renderView(pathname, objProps);
}