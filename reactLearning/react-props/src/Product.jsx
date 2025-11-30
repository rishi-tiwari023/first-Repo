export default function Product({title,price,features,features2}) 
{
    return (
        <>
        <h4>{title}</h4>
        <p>Price : {price}</p>
        <p>{features}</p>
        <p>{features2.c}</p>
        </>
    )
}