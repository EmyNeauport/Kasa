import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import '../styles/Header.scss'

function Header() {
    return (
    <header>
        <div className='navbar'>
            <div>
                <img src={logo} alt="logo Kasa" className='navbar__img' />
            </div>
            <nav className='navbar__nav'>
                <Link to="/" className='navbar__link navbar__link--active' >Accueil</Link>
                <Link to="/about" className="navbar__link">À propos</Link>
            </nav>
        </div>
    </header>
    )
}

export default Header