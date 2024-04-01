export function GatoInfo(props) { 
  const el = document.createElement("div");
  el.innerHTML = JSON.stringify(props);
  return el;
}