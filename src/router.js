let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
  // return rootEl;
}

export const setRoutes = (routes) => {
  // assign ROUTES
  ROUTES = routes;
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
}

export const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

export const renderView = (pathname, root) => {
  // clear the root element
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  // const view = ROUTES[pathname];
  // in case not found render the error view

  // render the correct view passing the value of props

  // add the view element to the DOM root element
  root.appendChild(pathname);
  // console.log(typeof root);
}

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}