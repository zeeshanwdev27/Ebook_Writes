import React from 'react'
import HeroSection from '../HeroSection/HeroSection';
import HomeBottomSection from '../Home/HomeBottomSection.jsx';
import ContactForm from '../Home/ContactForm.jsx'

import AboutUsContent from './AboutUsContent.jsx'
import AboutUsStrategies from './AboutUsStrategies.jsx'
import YouAreTheBoss from './YouAreTheBoss.jsx'



function AboutUs() {
  return (
    <>
    <HeroSection name='Our Identity' description='What Makes Us Different' />
    <HomeBottomSection/>
    <AboutUsContent/>
    <AboutUsStrategies/>
    <YouAreTheBoss/>
    <ContactForm/>



    </>
  )
}

export default AboutUs
