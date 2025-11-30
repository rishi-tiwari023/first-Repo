import "./Product.css";
export default function Product({title,price}) 
{
    return (
        <div className="Product">
        <h4>{title}</h4>
        <p>Price : {price}</p>
        <p> {price >5000 ? "Discount of 5% is Applied." : "NO Discount"}</p>
        </div>
        )
}