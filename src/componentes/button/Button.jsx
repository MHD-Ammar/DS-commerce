import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'
const Button = ({ value, endPoint }) => {
    return (
        <>
            {/* <Link to={`/products/${endPoint}`}>
                <button className='customBtn' >{value}</button>
            </Link> */}
            <button className='customBtn' >{value}</button>

        </>
    )
}

export default Button