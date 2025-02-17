import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.svg'
import '../assets/styles/Header.scss'

function Header() {
    const location = useLocation()
    return (
    <header>
        <div className='navbar'>
            <div>
                <img src={logo} alt="logo Kasa" className='navbar__img' />
            </div>
            <nav className='navbar__nav'>
                <Link to="/" className={`navbar__link ${location.pathname === "/" ? "active" : ""}`}>
                    Accueil
                </Link>
                <Link to="/about" className={`navbar__link ${location.pathname === "/about" ? "active" : ""}`}>
                    À propos
                </Link>
            </nav>
        </div>
    </header>
    )
}

export default Header