import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

function Header() {
    return (
    <header>
        <div>
            <img src={logo} alt="logo Kasa" />
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
        </nav>
    </header>
    )
}

export default Header