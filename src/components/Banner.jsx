function Banner({image, altText, text}) {
    return (
        <div>
            <img src={image} alt={altText} />
            <p>{text}</p>
        </div>
    )
}

export default Banner