import { Title } from "./Title.jsx";
import "./Products.css";
function Products() {
    return (
        <div className="Products">
            <Title item="Logitech MX Master 3S" Discount_price={12495} Actual_price={8999} description={["8000 DPI,5 Programmable Buttons"]} />
            <Title item="Apple Pencil (2nd Gen)" Discount_price={11900} Actual_price={9199} description={["Intutive touch surface","Designed for iPad Pro"]} />
            <Title item="Zebbronics Keyboard" Discount_price={1599} Actual_price={899} description={["Intutive touch surface","Designed for iPad Pro"]}/>
            <Title item="Potronics Toad 23 Wireless Mouse" Discount_price={599} Actual_price={278} description={["Wireless Mouse 2.4GHz","Optical Orientation"]} />

        </div>
    );
}

export {Products};