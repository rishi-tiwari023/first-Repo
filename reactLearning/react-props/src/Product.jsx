import "./Product.css";
export default function Product({title,price}) 
{
    return (
        <div className="Product">
        <h4>{title}</h4>
        <p>Price : {price}</p>
    {price >5000 && <p> "Discount of 5% is Applied." </p>} 
    {/* Conditional Rendering. This Doesn't render anything if the condition is false. No extra node in DOM. */}
        </div>
        )
}