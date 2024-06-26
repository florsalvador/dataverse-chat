import data from '../data/dataset.js';
import { navigateTo } from '../router.js';

export function GatoInfo(props) {
  const divGatoInfo = document.createElement("div");
  divGatoInfo.classList.add("div-Chat");
  for (let i = 0; i < data.length; i++) {
    if (props.id === data[i].id) {
      const gatito = data[i];

      divGatoInfo.innerHTML = `
      <div class="contenedor-foto-chat">
        <div class="div-image-chat">
          <button id="volver-home" class="boton-chat">◀︎</button>
          <img class="imagen" src="${gatito.imageUrl}" alt="${gatito.id}">
          <h1 class="titulo-chat">Gatito ${gatito.name}</h1>
          <div class="div-vacio-apikey"></div>
        </div>
        <div class="div-descripcion-info">
          <p><span class="subtitulo">✦ Descripción: </span><span class="Descripcion">${gatito.description}</span></p>
          <p><span class="subtitulo">✦ Esperanza de vida mínima: </span><span class="esperanzaMinima">${gatito["facts"]["esperanzaMin"]}</span></p>
          <p><span class="subtitulo">✦ Esperanza de vida máxima: </span><span class="esperanzaMaxima">${gatito["facts"]["esperanzaMax"]}</span></p>
          <p><span class="subtitulo">✦ Peso mínimo: </span><span class="pesoMinimo">${gatito["facts"]["pesoMin"]}</span></p>
          <p><span class="subtitulo">✦ Peso máximo: </span><span class="pesoMaximo">${gatito["facts"]["pesoMax"]}</span></p>
          <p><span class="subtitulo">✦ Precio de cachorro: </span><span class="precioCachorro">${gatito["facts"]["precioCachorro"]}</span></p>
          <p><span class="subtitulo">✦ Tamaño: </span><span class="tamanoGato">${gatito["facts"]["tamanoGato"]}</span></p>
          <p><span class="subtitulo">✦ Lugar de origen: </span><span class="lugarDeOrigen">${gatito["facts"]["lugarDeOrigen"]}</span></p>
          <p><span class="subtitulo">✦ Pelaje: </span><span class="pelajeGato">${gatito["facts"]["pelajeGato"]}</span></p>
          <p><span class="subtitulo">✦ Rasgos faciales: </span><span class="rasgosFaciales">${gatito["facts"]["rasgosFaciales"]}</span></p>
          <p><span class="subtitulo">✦ Personalidad: </span><span class="personalidad"></span></p>
          <p><span class="subtitulo">✦ Enfermedades comunes: </span><span class="enfermedadesComunes"></span></p>
          <p><span class="subtitulo">✦ Cuidados: </span><span class="cuidados">${gatito["extraInfo"]["cuidados"]}</span></p>
        </div>
      </div>`;

      const volverHome = divGatoInfo.querySelector("#volver-home");
      volverHome.addEventListener("click", function () {
        navigateTo("/");
      })

      const personalidad = divGatoInfo.querySelector(".personalidad");
      let personalidadContenido = "";
      const pers = ["tranquilo", "carinoso", "sociable", "energico", "jugueton"];
      for (let i = 0; i < pers.length; i++) {
        if (gatito["extraInfo"]["personalidad"][pers[i]] === true) {
          personalidadContenido = personalidadContenido + pers[i] + ", ";
        }
      }
      personalidad.textContent = personalidadContenido;

      const enfermedadesComunes = divGatoInfo.querySelector(".enfermedadesComunes");
      let Contenido = "";
      const enfermedades = ["problemasRespiratorios", "problemasDentales", "problemasCardiacos", "problemasDePiel", "problemasRenales", "problemasOculares", "tendenciaObesidad"];
      for (let i = 0; i < enfermedades.length; i++) {
        if (gatito["extraInfo"]["enfermedadesComunes"][enfermedades[i]] === true) {
          Contenido = Contenido + " " + enfermedades[i] + ", ";
        }
      }
      enfermedadesComunes.textContent = Contenido;

    }

  }
  return divGatoInfo;
}
