//import data from '../data/dataset.js';

export function ChatGato(props) { 
  const divChatGato = document.createElement("div");
  divChatGato.innerHTML = `<header>
  <h1>Chatea con el gatito ${props.id}</h1>
  </header>
  <main>
   <div></div>
   <button id="div-apikey">🗝️</button>
  </main>`

  return divChatGato;
}
  