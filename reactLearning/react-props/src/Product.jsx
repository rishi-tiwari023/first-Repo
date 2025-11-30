import "./Product.css";
export default function Product({title,price}) 
{
    if(price>5000)
    {
        return (
        <div className="Product">
        <h4>{title}</h4>
        <p>Price : {price}</p>
        <p>Discount of 5% is Applied.</p>
        </div>
        )
    }
    else
    {
        return (
        <div className="Product">
        <h4>{title}</h4>
        <p>Price : {price}</p>
        <p> No Discount is Applied.</p>
        </div>
        )
    }
}