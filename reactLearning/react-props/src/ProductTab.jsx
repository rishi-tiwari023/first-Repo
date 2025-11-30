import Product from "./Product.jsx";
function ProductTab()
{
    let options= [<li>" 16GB RAM "</li>,<li>" 512GB SSD "</li>,<li>" Ryzen 7"</li>];// pre-wrap for formatting.
    let opt= [" 16GB RAM "," 512GB SSD "," Ryzen 7"]; // apply map on this.
    let list =opt.map((feature) => <li>{feature}</li>); // forming list using map function.
    let options2={ a: "16GB RAM", b: "512GB SSD", c: "Ryzen 7"};
    return(
        <>
        <Product title="Laptop" price="64,999"
        features={options} list={list} features2={options2} />
        </>
    )
}
export default ProductTab;