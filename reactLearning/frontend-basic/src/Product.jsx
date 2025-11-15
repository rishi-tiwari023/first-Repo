import "./Product.css"
function Product({title, price}) {
    return <div className="Product">
    <h2>Product Title: {title}</h2>
    <p>Price: &#8377;{price}</p>
    </div>
}

export default Product;