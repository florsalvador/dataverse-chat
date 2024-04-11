import data from '../data/dataset.js';
import { communicateWithOpenAI } from '../lib/openAIApi.js';

export function ChatGrupal(/*props*/) {

  const divChatGrupal = document.createElement("div");
  divChatGrupal.classList.add("div-Chat");
  divChatGrupal.innerHTML = `
    <h1 class="titulo-chat">Chatea con todos los gatos</h1>
    <div class="contenedor-foto-chat">
        <div id="imagenes-chat"></div>
        <div class="contenedor-chat">
        <div id="mensajes"></div>
        <div class="contenedor-input">
            <textarea id="usuaria-input" placeholder="Escribe tu mensaje..." rows="3"></textarea>
            <button id="boton-enviar-input" class="boton-chat">▶</button>
        </div>
        </div>
    </div>`

  const imagenesChat = divChatGrupal.querySelector("#imagenes-chat");

  data.forEach(gatito => {
    imagenesChat.innerHTML += `<img class="imagen" src="${gatito.imageUrl}" alt="${gatito.id}"></img>` 

    const mensajes = divChatGrupal.querySelector("#mensajes");
    const inputUsuaria = divChatGrupal.querySelector("#usuaria-input");
    const botonEnviarInput = divChatGrupal.querySelector("#boton-enviar-input");
  
    botonEnviarInput.addEventListener("click", function () {
      const prompt = [
        {
          "role": "system",
          "content": "Toma el rol de un gatito de raza " + gatito.id + " y responde a la siguiente pregunta"
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

      parrafoUsuaria.innerHTML = `<p class="negrita-mensajes">Tú 👩🏻</p> ${inputUsuaria.value}`;
      parrafoGato.innerHTML = "Escribiendo...";

      communicateWithOpenAI(prompt)
        .then(response => {
          parrafoGato.innerHTML = `<p class="negrita-mensajes">Gatito ${gatito.id} 🐈</p> ${response}`;
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

  });


  return divChatGrupal;
}


