export default function Product({title,price,features,list,features2}) 
{
    return (
        <>
        <h4>{title}</h4>
        <p>Price : {price}</p>
        <p>----Preformatted---{features}</p>
        <p>---Using Maps---{list}</p>
        <p>---Specefic Item of an object--- &nbsp;{features2.c}</p>
        </>
    )
}