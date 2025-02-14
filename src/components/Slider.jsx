import { useLinkClickHandler, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from "../../data.json";
import "../assets/styles/slider.scss"
import leftArrow from "../assets/arrow-left.svg"
import rightArrow from "../assets/arrow-right.svg"

function Slider() {
    const { id } = useParams()
    const product = data.find((items) => items.id === id)
    
    return <Carousel 
        infiniteLoop 
        showThumbs={false}
        statusFormatter={(currentItem, total) =>
            total === 1 ? "" : `${currentItem}/${total}`}
        renderArrowPrev={(useLinkClickHandler, hasPrev) =>
            hasPrev && (
                <button className="carousel__arrow carousel__arrow--prev" onClick={useLinkClickHandler}>
                    <img src={leftArrow} alt=""/>
                </button>
            )
        }
        renderArrowNext={(useLinkClickHandler, hasNext) =>
            hasNext && (
                <button className="carousel__arrow carousel__arrow--next" onClick={useLinkClickHandler}>
                    <img src={rightArrow} alt=""/>
                </button>
            )
        }
        >
                
        {product.pictures.map((picture, index) => (
            <div key={index}>
                <img src={picture} alt=""/>
            </div>
        ))}
    </Carousel>
}

export default Slider 