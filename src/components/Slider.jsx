import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../../data.json";
import "../assets/styles/slider.scss";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

function Slider() {
    const { id } = useParams();
    const product = data.find((item) => item.id === id);

    // État pour l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);

    const pictures = product.pictures;
    const totalImages = pictures.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    return (
        <div className="carousel-root">
            <div className="carousel">
                <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />

                {totalImages > 1 && (
                    <button className="carousel__arrow carousel__arrow--prev" onClick={prevSlide}>
                        <img src={leftArrow} alt="Précédent" />
                    </button>
                )}

                {totalImages > 1 && (
                    <button className="carousel__arrow carousel__arrow--next" onClick={nextSlide}>
                        <img src={rightArrow} alt="Suivant" />
                    </button>
                )}

                {totalImages > 1 && (
                    <div className="carousel-status">
                        <p> {currentIndex + 1}/{totalImages} </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Slider;
