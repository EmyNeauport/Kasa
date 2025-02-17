import { useState } from "react"
import '../assets/styles/Collapse.scss'
import '../assets/styles/variables.scss'
import arrow from '../assets/arrow-close.svg'

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div onClick={() => setIsOpen(!isOpen)} className="collapse__title">
                <h2>{title}</h2>
                <span>
                    <img 
                        src={arrow} 
                        alt=""
                        className={`collapse__arrow ${isOpen ? "rotate" : ""}`} 
                    />
                </span>
            </div>
            {isOpen && (
                <div className="collapse__description">
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse