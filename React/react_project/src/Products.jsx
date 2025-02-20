import { Title } from "./Title.jsx";
import "./Products.css";
function Products() {
    return (
        <div className="Products">
            <Title item="Laptop" price={70000} description="Macbook Air M1" />
            <Title item="Mobile" price={10000} description="Samsung M34 5G" />
            <Title item="Mobile" price={10000} description="Samsung M34 5G" />
            <Title item="Laptop" price={70000} description="Macbook Air M1" />

        </div>
    );
}

export {Products};