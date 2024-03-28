// export function Home(props) { 
//   const el = document.createElement("div");
//   el.innerHTML = "I'm the Home Page " + props;
//   return el;
// }

// import data from './data/dataset.js';
// import { filterData } from '../lib/dataFunctions.js';

export function Home(data) {
  //const viewEl = document.createElement('div');
 
  const nuevoUl = document.createElement("ul");
  // crear la etiqueta ul  
  data.forEach(onlyCat => {
    const nuevoLi = document.createElement("li"); // crear la etiqueta li para un gato
    nuevoLi.classList.add("tarjeta"); // agrega la clase "tarjeta" al li
    nuevoLi.setAttribute("itemscope", true);//<li itemscope></li> 
    nuevoLi.setAttribute("itemtype", "RazasDeGatos");//<li itemtype="RazasDeGatos"></li>

    nuevoLi.innerHTML = `<img src="${onlyCat.imageUrl}" alt="${onlyCat.id}">
    <h2 itemprop=sort-order>${onlyCat.name}</h2>
    <p itemprop="shortDescription" class="descripcion">${onlyCat.shortDescription}</p>
    <hr/>
    <p><span class="datos">✦ Tamaño:</span> <span itemprop="tamanoGato">${onlyCat.facts["tamanoGato"]}</span></p>
    <p><span class="datos">✦ Pelaje:</span> <span itemprop="pelajeGato">${onlyCat.facts["pelajeGato"]}</span></p>
    <p><span class="datos">✦ Esperanza de vida:</span> <span itemprop="esperanzaMax">${onlyCat.facts["esperanzaMax"]} años</span></p>
    <p><span class="datos">✦ Precio:</span> <span itemprop="precioCachorro">${onlyCat.facts["precioCachorro"]} dólares</span></p>`

    nuevoUl.appendChild(nuevoLi); // inserta la etiqueta li en la etiqueta ul
  });
  return nuevoUl;

  //return viewEl;
}