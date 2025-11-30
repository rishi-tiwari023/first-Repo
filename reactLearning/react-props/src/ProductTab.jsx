import Product from "./Product.jsx";
function ProductTab()
{
    let options= [" 16GB RAM "," 512GB SSD "," Ryzen 7"];
    let options2={ a: "16GB RAM", b: "512GB SSD", c: "Ryzen 7"};
    return(
        <>
        <Product title="Laptop" price="64,999"
        features={options} features2={options2} />
        </>
    )
}
export default ProductTab;