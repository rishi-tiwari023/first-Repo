import Product from "./Product.jsx";
import "./ProductTab.css";

function ProductTab() {
    return (
        <div className="ProductTab">
            <h1>Products Available are:</h1>
        <Product />
        <Product />
        <Product />
        </div>
    )
}
export default ProductTab;