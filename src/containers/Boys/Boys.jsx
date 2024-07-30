import { useContext } from "react";
import { Product } from "../../componentes";
import { ProductContext } from "../../context/ProductsContext";
import "./Boys.css"
export default function Boys(){
    const {boys} = useContext(ProductContext)
    return (
        <div className="container">
        
        <Product data={boys}/>
        </div>
    )
}