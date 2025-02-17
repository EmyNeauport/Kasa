import '../assets/styles/Banner.scss'

function Banner({image, altText, text}) {
    return (
        <div className='banner'>
            <img src={image} alt={altText} className='banner__img'/>
            <h1 className='banner__text'>{text}</h1>
        </div>
    )
}

export default Banner