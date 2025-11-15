import Product from "./Product.jsx";
import "./ProductTab.css";

function ProductTab() {
    return (
        <div className="ProductTab">
            <h1>Products Available are:</h1>
        <Product title="laptop" price={69000}/>
        <Product title="mobile" price="21k"/>
        <Product title="ethernet connector" price="1k"/>
        </div>
    )
}
export default ProductTab;