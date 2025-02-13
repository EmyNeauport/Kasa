import '../assets/styles/Banner.scss'

function Banner({image, altText, text}) {
    return (
        <div className='banner'>
            <img src={image} alt={altText} className='banner__img'/>
            <p className='banner__text'>{text}</p>
        </div>
    )
}

export default Banner