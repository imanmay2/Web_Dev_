import "./Title.css";

function Title({item,price=1,description}){
    return (
        <div className="Title">
            <p>Item_Name: {item}</p>
            <p>Item_Price: {price}</p>
            <p>Description : {description}</p>
            {price>=30000 ? <p>Discount : 5%</p> : null}
        </div>
    );
}


export {Title};