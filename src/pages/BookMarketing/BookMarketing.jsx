import React from 'react'
import MainHome from '../Home/MainHome.jsx'
import BookMarketingAbout from './BookMarketingAbout.jsx'
import BookMarketingStrategies from './BookMarketingStrategies.jsx'
import BookMarketingProcess from './BookMarketingProcess.jsx'
import ContactForm from '../Home/ContactForm.jsx'

import Portfolio from '../../components/Portfolio.jsx'

function BookMarketing() {
  return (
    <>
    <MainHome title="Making your Words Available everywhere" header="Book Marketing Services –Taking the Market by Leaps and Bounds" description="We know that completing a manuscript is only the beginning of the road to fame and fortune. This is why we provide a full menu of promotional options designed to increase your book’s exposure and enable you to get in front of your intended audience. So, take advantage of New York publishers’ end-to-end book marketing strategy and get your work read by a global audience!" />
    <BookMarketingAbout/>
    <BookMarketingStrategies/>
    <Portfolio title={"Our Recent Portfolio"} description={"Scroll and review our agency’s latest and finest work. We offer value and originality, which is evident in our work."}/>
    <BookMarketingProcess/>
    <ContactForm/>

      
    </>
  )
}

export default BookMarketing
