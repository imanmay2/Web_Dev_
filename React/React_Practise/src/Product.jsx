import "./Product.css";
import {Rate} from "./Rate.jsx";
function Product({heading,features,rates}){
    const list=features.map((features)=>{
        return <li>{features}</li>
    });
    return(
        <div className="product_div">
            <h4>{heading} </h4>
            <p>{list} <br /></p>
            <div className="rate">
                <Rate rates={rates}/>
            </div>
        </div>
    )
}

export {Product};