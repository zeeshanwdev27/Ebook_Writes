import React from 'react'
import MainSection from './MainSection.jsx'
import HeroSection from '../HeroSection/HeroSection';
import HomeBottomSection from '../Home/HomeBottomSection.jsx';
import ContactForm from '../Home/ContactForm.jsx'



function Testimonials() {
  return (
    <>
    <HeroSection name='Testimonials' description='What Our Clients Say' />
    <HomeBottomSection/>
    <MainSection/>
    <ContactForm/>


    </>
  )
}

export default Testimonials
