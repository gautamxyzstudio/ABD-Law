
import AboutUs from "../../components/home/aboutUs/AboutUs"
import ChooseUs from "../../components/home/chooseUs/ChooseUs"
import HeroSection from "../../components/home/heroSec/HeroSection"
import PromoSection from "../../components/home/promoSection/PromoSection"
import Services from "../../components/home/services/Services"
import Testimonials from "../../components/home/testimonials/Testimonials"


const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <ChooseUs/>
      <PromoSection/>
      <Testimonials/>
    </>
  )
}

export default Home
