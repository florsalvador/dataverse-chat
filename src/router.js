let ROUTES = {}; 
let rootEl; 

export const setRootEl = (el) => { 
  rootEl = el;
}

export const setRoutes = (routes) => {
  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  // const params = new URLSearchParams("foo=1&bar=2");
  const params = new URLSearchParams(queryString); // ("id=persa")
  const object = {};
  for (const [key, value] of params) {
    object[key] = value;
  }
  return object;

  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props ={}) => { 
  rootEl.innerHTML = "";//Colocarlo en otro lugar //mejorar //OH Lunes o martes
  rootEl.appendChild(ROUTES[pathname](props));

  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props) => {
  // const url = new URL(location);
  // url.search = 
  // const url = new URL(pathname, window.location.origin);
  // console.log(url.searchParams.set("foo", "bar"));
  // console.log(queryStringToObject("foo=1&bar=2"))
  // console.log(props.gatito);
  // console.log(queryStringToObject(window.location.search));
  const url = pathname + "?id=" + props.id;
  window.history.pushState({}, "", url);
  renderView(pathname, props);

  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  const pathname = location.pathname;
  console.log(location);
  const queryString = new URLSearchParams(location.search);
  const gatoId = queryStringToObject(queryString); // objeto con id de los gatos {id: "persa"}
  console.log(gatoId);
  // parse the location for the pathname and search params 
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathname, gatoId);
}