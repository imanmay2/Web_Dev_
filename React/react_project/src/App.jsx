import "./App.css";
import {Products} from "./Products.jsx"
export default function App(){
  let user="Blockbuster Deals on Computers and Accessesories"
  return (
    <>
    <p><b>{user}</b></p>
    <Products/>
      </>
  );
}