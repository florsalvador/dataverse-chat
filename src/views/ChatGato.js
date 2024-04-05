import data from '../data/dataset.js';
import { communicateWithOpenAI } from '../lib/openAIApi.js';

export function ChatGato(props) {

  const divChatGato = document.createElement("div");
  for (let i = 0; i < data.length; i++) {
    if (props.id === data[i].id) {
      const gatito = data[i];
      divChatGato.innerHTML = `
      <main>
      <h1>Chatea con el gatito ${gatito.id}</h1>
      <div class="contenedor">
        <img class="imagen" src="${gatito.imageUrl}" alt="${gatito.id}">
        <div class="contenedor-chat">
          <div id="mensajes"></div>
          <div class="contenedor-input">
            <input type="text" id="usuaria-input" placeholder="Escribe tu mensaje...">
            <button id="boton-enviar-input" class="boton-chat">Enviar</button>
          </div>
        </div>
      </div>
      </main>`

      const mensajes = divChatGato.querySelector("#mensajes");
      const inputUsuaria = divChatGato.querySelector("#usuaria-input");
      const botonEnviarInput = divChatGato.querySelector("#boton-enviar-input");

      botonEnviarInput.addEventListener("click", function () {
        const prompt = [
          {
            "role": "system",
            "content": "Como el rol de gatito" + gatito.id + "responde a la siguiente pregunta"
          },
          {
            "role": "user",
            "content": inputUsuaria.value
          }
        ];

        const parrafoGato = document.createElement("div");
        const parrafoUsuaria = document.createElement("div");
        parrafoGato.classList.add("mensaje-gato");
        parrafoUsuaria.classList.add("mensaje-usuaria");

        parrafoUsuaria.innerHTML = `<span class="negrita-mensajes">Tú:</span> ${inputUsuaria.value}`;
        parrafoGato.innerHTML = "Escribiendo...";

        communicateWithOpenAI(prompt)
          .then(response => {
            parrafoGato.innerHTML = `<span class="negrita-mensajes">Gatito ${gatito.id}:</span> ${response}`;
            // mensajeGato.innerHTML = response;
            // console.log("Respuesta de OpenAI:", response);
          })
          .catch(error => {
            // return error;
            console.error("Error al comunicarse con OpenAI:", error);
          });

        mensajes.appendChild(parrafoUsuaria);
        mensajes.appendChild(parrafoGato);

        inputUsuaria.value = "";

      });

    }
  }

  return divChatGato;
}
