import '../../assets/styles/home.scss'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import Footer from '../../components/Footer'

import imageHomeBanner from '../../assets/sea-landscape.svg'

function HomePage() {
  return (
    <div className='home'>
      <Header />
      <Banner 
        image={imageHomeBanner}
        altText={"Paysage de falaises en face de la mer"}
        text={"Chez vous, partout et ailleurs"}/>
      <CardList />
      <Footer />
    </div>
  )
}

export default HomePage
