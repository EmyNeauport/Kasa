import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'

import imageAboutBanner from '../../assets/mountain-landscape.svg'

function AboutPage() {
  return (
    <div>
      <Header />
      <Banner image={imageAboutBanner} altText={"Paysage d'une forêt avec des montagnes enneigées en arrière plan"} text={""}/>
      <Collapse />
      <Footer />
    </div>
  )
}

export default AboutPage