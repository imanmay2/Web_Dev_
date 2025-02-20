import "./App.css";
import {Products} from "./Products.jsx"
export default function App(){
  let user="Manmay"
  return (
    <>
    <h1>Welcome {user}</h1>
    <Products/>
      </>
  );
}