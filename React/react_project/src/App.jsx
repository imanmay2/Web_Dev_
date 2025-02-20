import "./App.css";
import { Title } from "./Title.jsx";

function App() {
  let name="js";
  return (
    <div>
      <h1>Welcome to React{name.toUpperCase()}</h1>
      <Title />
      <Title />
      <Title /></div>
  );
}


export default App