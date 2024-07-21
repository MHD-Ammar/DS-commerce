import { Link } from "react-router-dom";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping as trash, faCashRegister as info, faCalendar as door} from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div className="nav-bar-links">
            <Link to="/boys">Boys</Link>
            <Link to="/girls">Girls</Link>
            <Link to="/collections"> New Collection</Link>
            <Link to="/about">About us</Link>
            </div>
            <div className="nav-bar-icons">
            <FontAwesomeIcon icon={trash}/>
            <FontAwesomeIcon icon={info}/>
            <FontAwesomeIcon icon={door}/>
            </div>
        </div>
    )
}

export default Navbar