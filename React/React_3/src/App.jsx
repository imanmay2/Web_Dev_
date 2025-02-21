import './App.css'
let handleClick = () => {
  console.log("Button is clicked! ");
}

let handleHover = () => {
  console.log("Hovered!");
}

let handledblClick=()=>{
  console.log("Double Clicked!!");
}
export default function App() {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={handleHover}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Ipsa eius omnis tempora quam sit sequi architecto nemo numquam sed, 
        quia quas velit saepe reiciendis. Illum maiores excepturi iure rerum voluptas.!</p>
      <button onDoubleClick={handledblClick}>Double Click!</button>
    </div>
  );
}