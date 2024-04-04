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
          <div id="mensaje-gato"></div>
          <div id="mensaje-usuaria"></div>
          <div class="contenedor-input">
            <input type="text" id="usuaria-input" placeholder="Escribe tu mensaje...">
            <button id="boton-enviar-input" class="boton-chat">Enviar</button>
          </div>
        </div>
      </div>
      </main>`

      const mensajeGato = divChatGato.querySelector("#mensaje-gato");
      const mensajeUsuaria = divChatGato.querySelector("#mensaje-usuaria");
      const inputUsuaria = divChatGato.querySelector("#usuaria-input");
      const botonEnviarInput = divChatGato.querySelector("#boton-enviar-input");
    
      botonEnviarInput.addEventListener("click", function(){
        const prompt = "Como el rol de gatito" + gatito.id + "responde a la siguiente pregunta"+ inputUsuaria.value;
        mensajeGato.innerHTML = "Hola soy el gatito" + gatito.id  + communicateWithOpenAI(prompt);
        inputUsuaria.value = "";
      })

    }
  }


  return divChatGato;
}
  