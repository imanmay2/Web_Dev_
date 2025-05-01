import './App.css'
import { Title } from './Title.jsx';
import { Product } from "./Product.jsx";
function App() {
  return (
    <div className='main_div'>
      <div className='heading'>
        <Title content={"Amazon-Great Summer Sale Staring from 1st May(Today)!"}></Title></div>  <br /> 
      <div className='product'>
        <Product heading={"LogiTech MX Master 3S"} features={["8000 DPI", "5 Programmable Buttons"]} rates={["12,495","8,999"]} />
        <Product heading={"Apple Pencil 2nd Gen"} features={["Intutive Touch Surface", "Designing for iPad Pro"]} rates={["12,495","8,999"]}/>
        <Product heading={"Zebronics Zeb-Transformer"} features={["Intutive Touch Surface", "Designing for iPad Pro"]} rates={["12,495","8,999"]}/>
        <Product heading={"Potronics Toad 23"} features={["Wireless Mouse 2.4GHz", "Optical Orientation"]} rates={["12,495","8,999"]}/>
      </div> <br />

      <div className="heading">
        <Title content={"BlockBuster Deals on Computer Accessories. Shop Now!"}/>
      </div>
    </div>
  )
}

export default App
