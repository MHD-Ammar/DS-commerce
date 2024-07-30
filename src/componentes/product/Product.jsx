import './product.css'
const Product = ({data}) => {
    return (
        <>
        {
            data?.map((item,index)=>{
                return (
                    <div key={index} className="card">
                        <h1 className="title">{item.name}</h1>
                        <p className="price">{item.current_price}</p>
                        <img src={item.url} className="card-img" alt="product-img" />

                        <button className="add-to-cart">Add to cart</button>
                    </div>
                )
            })
        }
        </>
    )
}

export default Product