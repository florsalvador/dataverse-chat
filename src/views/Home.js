//  Es una función que crea el contenido de la vista y debe devolver un elemento DOM para el router usar
// export const Profile = ({ name }) => {
//   const el = document.createElement("p");
//   el.innerHTML = `Hello ${name}`;
//   return el;
// }

export function Home(props) { // Función crea elementos HTML y muestra, props son las propiedades de cada objeto(gatito)
  //se define una función Home, que crea, configura y retorna un <div>.
  const el = document.createElement("div");
  el.innerHTML = "I'm the Home Page " + props;
  return el;
}


// Definir funciones/componentes similares para otras rutas


