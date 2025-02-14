import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from "../../data.json";
import "../assets/styles/Slider.scss"

function Slider() {
    const { id } = useParams()
    const product = data.find((items) => items.id === id)
    
    return <Carousel 
        infiniteLoop 
        showThumbs={false}>
        
        {/* statusFormatter pour changer le format des chiffres */}
        
        {product.pictures.map((picture, index) => (
            <div key={index}>
                <img src={picture} alt=""/>
            </div>
        ))}
    </Carousel>
}

export default Slider 