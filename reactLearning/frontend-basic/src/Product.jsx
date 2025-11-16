import "./Product.css"
import Price from "./Price.jsx";
function Product({title, idx}) {
    let description=[["8,000 DPI", "5 Programmable Buttons"],
                ["intutive surface","designed for iPad Pro"],
                ["designed for iPad Pro","intutive surface"],
                ["wireless","optical orientation"]]
    return <div className="Product">
    <h3>{title}</h3>
    <p>{description[idx][0]}</p>
    <p>{description[idx][1]}</p>
    <Price idx={idx} />
    </div>
}

export default Product;