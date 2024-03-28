export function Chat(props) { 
  const el = document.createElement("div");
  el.innerHTML = "Chatea con el gatito" + props;
  return el;
}
  