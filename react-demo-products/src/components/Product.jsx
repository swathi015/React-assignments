function Product(props){
    let {productId,name,price,brand,description,image} = props.products
    return(
        <div className="flex flex-col w-90 items-center justify-evenly" >
            <img src={image} width="150px" alt="" />
            <p>{productId}</p>
            <p>{name}</p>
            <p>{price}</p>
            <p>{brand}</p>
            <p>{description}</p>
            
        </div>
    )
}
export default Product;