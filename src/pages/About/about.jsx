import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'

import imageAboutBanner from '../../assets/mountain-landscape.svg'

import '../../assets/styles/about.scss'

import collapsesData from "../../../text.json"

function AboutPage() {
  return (
    <div className='about'>
      <Header />
      <Banner image={imageAboutBanner} altText={"Paysage d'une forêt avec des montagnes enneigées en arrière plan"} text={""}/>
      <div>
        {collapsesData.map((section) => (
          <Collapse key={section.id} title={section.title} description={section.description} />)
        )}
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage