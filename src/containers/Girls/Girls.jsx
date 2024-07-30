import { useContext } from "react"
import { Product } from "../../componentes"
import { ProductContext } from "../../context/ProductsContext";
import "./Girls.css"
function Girls() {
    const {girls} = useContext(ProductContext)
    return (
        <div className="items-container">
        
        <Product data={girls}/>
        </div>
    )
}

export default Girls
