import logo from '../assets/logo-white.svg'
import "../assets/styles/Footer.scss"

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt="logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer