import "../assets/styles/Card.scss"
import { useNavigate } from "react-router-dom";

function Card({id, image, altText, title}) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/product/${id}`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={image} alt={altText} className="card__img"/>
            <h2 className="card__tittle">{title}</h2>
        </div>
    )
}

export default Card