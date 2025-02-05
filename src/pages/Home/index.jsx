
import './App.css'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import imageHomeBanner from '../../assets/sea-landscape.svg'
import imageCard from '../../assets/sea-landscape.svg'

function HomePage() {
  return (
    <div>
      <Header />
      <Banner image={imageHomeBanner} altText={"Paysage de falaises en face de la mer"} text={"Chez vous, partout et ailleurs"}/>
      <CardList />
      <Footer />
    </div>
  )
}

export default HomePage
