import "./Title.css";

function Title({item,Discount_price,Actual_price,description}){
    description=description.map((d)=><li>{d}</li>);
    return (
        <div className="Title">
            <div className="sky">
            <p>{item}</p>
            <p>Description : {description}</p></div>
            <p className="gold"><font id="discount">Rs.{Discount_price}</font> &nbsp; Rs.{Actual_price}</p>
        </div>
    );
}


export {Title};