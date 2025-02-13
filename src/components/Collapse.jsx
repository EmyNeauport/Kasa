import { useState } from "react"
import '../assets/styles/Collapse.scss'
import '../assets/styles/variables.scss'
import arrowClose from '../assets/arrow-close.svg'
import arrowOpen from '../assets/arrow-open.svg'

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div onClick={() => setIsOpen(!isOpen)} className="collapse__title">
                <h2>{title}</h2>
                <span>{isOpen ? <img src={arrowOpen} alt=""/> : <img src={arrowClose} alt="" />}</span>
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