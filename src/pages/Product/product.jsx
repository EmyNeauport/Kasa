import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../../../data.json";
import '../../assets/styles/product.scss'
import '../../assets/styles/variables.scss'

import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'

import grayStar from '../../assets/star.svg'
import redStar from '../../assets/star-red.svg'

function ProductPage() {
  const { id } = useParams() //récupérer l'id du produit
  const navigate = useNavigate() //permettre de rediriger vers la page error si besoin
  const product = data.find((item) => item.id === id) //lien id/data.json
    
    useEffect(() => {
      if (!product) {
        navigate("/error", { replace: true }); 
      }
    }, [product, navigate]);
  
    if (!product) return null;

    const generateStars = (rating) => {
      const totalStars = 5;
      return Array.from({ length: totalStars }, (_, index) => (
        <img
          src={index < rating ? redStar : grayStar}
          key={index}
          className="star"
          alt="star"
        />
      ));
    };

  return (
    <div className="product">
      <Header />
      <Slider />
      <div>
        <div className="product__container">
          <div className="product__item">
            <h1>{product.title}</h1>
            <p>{product.location}</p>
            <div className="product__item--tags">
              {product.tags.map((tag,index) => (
                  <h3 className="product__item--tag" key={`${product.id}-tag-${index}`}>{tag}</h3>
                ))}
            </div>
          </div>
          <div className="product__host">
            <div className="product__host--people">
              <p>{product.host.name}</p>
              <img src={product.host.picture} />
            </div>
            <div className="product__host--stars">
            {generateStars(product.rating)}
            </div>
          </div>
        </div>
      <div className="product__collapses">
          <Collapse 
            key={`${product.id}-desc`} 
            title="Description"
            description={product.description} />
          <Collapse 
            key={`${product.id}-equip`}
            title="Équipements"
            description={product.equipments.map((equipment, index) => (
                <span key={index}>{equipment}<br /></span>
              ))}
          />
      </div>
      </div>
      <Footer />
    </div>
  )
}


export default ProductPage;