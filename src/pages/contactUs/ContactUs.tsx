import ContactForm from '../../components/contact/contactForm/ContactForm'
import ContactInfo from '../../components/contact/contactInfo/ContactInfo'
import Testimonials from '../../components/home/testimonials/Testimonials'
import PagesHero from '../../components/module/pagesHero/PagesHero'
import { contactHero, image1, image2 } from '../../exports'

const ContactUs = () => {

  return (
    <div>
      <PagesHero
        title="Contact Us" 
        imageBack={contactHero} 
      />
      <div className='relative'>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-0 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute top-0 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
        <ContactForm/>
      </div>
      <ContactInfo/>
      <Testimonials/>
    </div>
  )
}
export default ContactUs
