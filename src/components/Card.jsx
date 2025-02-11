import "../styles/Card.scss"

function Card({image, altText, title}) {
    return (
        <div className="card">
            <img src={image} alt={altText} className="card__img"/>
            <p className="card__tittle">{title}</p>
        </div>
    )
}

export default Card