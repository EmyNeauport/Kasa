import { useState, useEffect } from "react"
import Card from "./Card"
import cardsData from "../../data.json"
import "../styles/CardList.scss"

function CardList() {
    const [cards, setCards] = useState([])
    useEffect(() => {
      setCards(cardsData)
    }, [])
  
    return (
      <div className="cardlist">
        {cards.map((card) => (
          <Card 
            key={card.id} 
            image={card.cover} 
            altText={card.localisation} 
            title={card.title} 
          />
        ))}
      </div>
    )
  }

export default CardList