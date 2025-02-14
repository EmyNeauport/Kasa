import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const product = data.find((item) => item.id === id);

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
    <div className="products__page">
      <Header />
      <Slider />
        <div className="product">
          <div className="product__item">
            <h1>{product.title}</h1>
            <p>{product.location}</p>
            <div className="product__item--tags">
              {product.tags.map((tag,index) => (
                  <span className="product__item--tag" key={index}>{tag}</span>
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
            key={product.id}
            title="Description"
            description={product.description} />
          <Collapse 
            key={product.id}
            title="Équipements"
            description=
              {product.equipments.map((equipment, index) => (
                <div key={index}>{equipment}</div>
              ))}
          />
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;