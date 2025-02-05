function Card({image, altText, title}) {
    return (
        <div>
            <img src={image} alt={altText} />
            <p>{title}</p>
        </div>
    )
}

export default Card