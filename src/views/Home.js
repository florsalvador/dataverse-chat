export function Home(props) { 
  const el = document.createElement("div");
  el.innerHTML = "I'm the Home Page " + props;
  return el;
}