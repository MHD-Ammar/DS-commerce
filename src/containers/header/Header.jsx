import './header.css'
import girlImg from '../../assets/girl.jpg';
import boylImg from '../../assets/boy.jpg';
import Button from '../../componentes/button/Button';
const Header = () => {
    return (
        <div>
            <div className='header-bg'>
                <div className='header-bg2'>
                    <h3>With an outstanding style, only for you</h3>
                    <h1>Exclusivly designed for you</h1>
                    <div className='img-header-container'>
                        <div className='girlImg'>
                            <Button value={"For Girl"} />
                        </div>
                        <div className='boyImg'>
                            <Button value={"For boy"} />
                        </div>

                    </div>
                </div>
            </div >
        </div>
    )
}

export default Header