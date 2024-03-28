//un router es un módulo de JavaScript que gestiona la navegación dentro la aplicación sin necesidad de recargar la página completa.
//Su función principal es asignar las URL a las diferentes vistas o componentes de la aplicación y actualizar la interfaz de usuario 
//según la URL actual.

//Un router basico:
// Almacenar las rutas de la aplicación.
// Para un nombre de ruta determinado en la URL, renderizar la vista adecuada (y pasar los argumentos apropiados a la vista si hay 
// search parámetros).
// Responder a la navegación dentro de la aplicación (enlaces, clics en botones, etc.)
// agregando un nuevo estado al historial del navegador para actualizar la URL
// luego renderizando la vista apropiada según la ruta (y pasar el argumentos apropiados si hay parámetros)
// Responder a la navegación con los botones de avance y retroceso en el navegador
// analizando la nueva URL para la ruta y los parámetros
// luego renderizando la vista apropiada según la ruta (y pasar los argumentos apropiados si hay parámetros)
// Cargando una página de error cuando la ruta no está definido en las rutas.
// No hay ningún error, mencionamos "renderizar la vista apropiada según la ruta" tres veces, entonces esto significa que escribiremos 
// una función que haga esto para poder usarla varias veces.

// Ahora profundizaremos explicando cómo lograr estas funcionalidades con código en router.js.

let ROUTES = {}; //objeto {}: Esta variable almacena información sobre las rutas en tu SPA.
let rootEl; // Elemento DOM: Una variable para almacenar el elemento raíz donde el contenido cambiará/aparecerá.

export const setRootEl = (el) => { // Una función para establecer el elemento raíz del router.
  //1)  
  // Esta función tiene un parámetro (elemento). Establece el elemento raíz donde se representarán las vistas, 
  //lo que le permite especificar en qué parte de su documento HTML aparecerá el contenido SPA.

  // assign rootEl

  rootEl = el;
}

export const setRoutes = (routes) => {
  //2)
  //Esta función asigna el valor del argumento routes al objeto ROUTES. routes debe ser un objeto (considere verificar que sea 
  //un objeto y arrojar un error si no es así). Utilice esta función para definir las rutas para su SPA.
  
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES

  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  //una función de utilidad para convertir una cadena de search o query string (ejemplo ?name=Noemi&color=blue) en un objeto 
  //para acceder fácilmente a los parámetros de consulta. Convierte el valor de queryString y devuelve un objeto de pares 
  //key/value creados a partir de queryString (por ejemplo,{ name: "Noemi", color: "blue" }). Puede hacer esto usando 
  //URLSearchParams para convertir la cadena en un tipo de datos iterable. Luego puede usar for...of o Object.fromEntries para 
  //crear el objeto a partir del iterable. 
  
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props/* ={} */) => { 
  //3)
  // Una función que renderiza una vista en el elemento root especificado. 
  //Tiene dos parametros:
  //pathname que es el parte de window.location y 
  //props que es un objeto de datos que podemos pasar a la vista. La función renderView borra el contenido existente, 
  //encuentra la función de view para el pathname dado y llama a esa función de vista pasando props como argumento.
  //Luego agrega el elemento devuelto por la función de vista al elemento root.
  /////////esta función representa una vista en el elemento raíz especificado. Borra el contenido existente, busca la función 
  //de vista para el nombre de ruta y luego busca la vista. funciona en routes y llama a la función de vista pasando el valor 
  //props como argumento a la vista. Agrega el elemento DOM devuelto por la función de vista al elemento root.
  
  // borrar el html de la página actual, llamar a la nueva función de vista correcta para renderizarla, y luego colocar el nuevo html en la página.
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element

  // clear the current html
  //find the correct view to render --or if there is none, use the error view--
  // call the view function (with the props) and get the new html element
  // put new html in the page
  rootEl.innerHTML = "";//Colocarlo en otro lugar //mejorar //OH Lunes o martes
  rootEl.appendChild(pathname(props));

} 

export const navigateTo = (pathname, props={}) => {
  //Los actores clave relacionados con la History API que utiliza un router son:
  // El método *pushState* nos permite agregar un nuevo estado a la cola del historial de la ventana.
  // El evento *popstate* es un evento que la ventana se activa cuando cambia el historial. Por ejemplo, cuando alguien presiona 
  // hacia atrás en el navegador.
  // Otros métodos de interés son *replaceState, go, forward, back*. Consulta la documentación completa de History API y Trabajando 
  // con la History API.
  // Otro evento de interés es hashchange, que no vamos a usar en nuestro router pero vale la pena conocerlo. Consulta la documentación de
  // *hashchange* para mas información.

  //esta función se utiliza para navegar mediante programación a una nueva ruta dentro del SPA (por ejemplo, hacer clic en 
  //botones o enlaces dentro de la aplicación). Actualiza la URL usando window.history.pushState y luego llama a renderView
  // con el pathname y los props dados para mostrar la vista correspondiente.
    
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  //4)
  //Back and Forward
  //esta función está destinada a manejar cambios de URL con *popstate* y también cuando el app carga la primera vez. 
  //Cuando la URL cambia, analiza el *pathname y la search* desde la location (window.location) y luego llama a renderView. 
  //Debes usar *queryStringToObject* para obtener los parámetros de la cadena de search en formato de objeto para pasar a renderView.
  //una función para manejar cambios de URL con popstate. Cuando la URL cambia, analiza el pathname y search desde la location (window.location) 
  //y luego llama a renderView.

  //Necesitamos conectar esta función para que se active cuando el usuario avance o retroceda. Para lograr esto, podemos escuchar el 
  //evento popstate de la window. Cuando se activa popstate, significa que la URL ha cambiado debido a la navegación o interacción del usuario.

  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  //console.log(location)

  const pathname = location.pathname;
  renderView(ROUTES[pathname], "Persa");
  
  //const params = new URLSearchParams(location.search);//queryString
}