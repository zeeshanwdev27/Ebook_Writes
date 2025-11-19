import React from 'react'
import MainHome from '../Home/MainHome.jsx'


import BookPublishingAbout from './BookPublishingAbout.jsx'
import BookPublishingStrategies from './BookPublishingStrategies.jsx'
import BookPublishingProcess from './BookPublishingProcess.jsx'

import Portfolio from '../../components/Portfolio.jsx'
import ContactForm from '../Home/ContactForm.jsx'




function BookPublishing() {
  return (
    <>
    <MainHome title="Publishing Your Stories Globally" header="Introduce Your Book to the World Through Our World's Best Publishing Service." description="Your masterpiece is ready for the world to read. But you have no clue on how to publish it? We've got you covered. New York Publishers help your masterpiece reach to the target audience with utmost passion and commitment. Our team of experts and professionals can help you publish the book fast and easy way." />
    <BookPublishingAbout/>
    <BookPublishingStrategies/>
    <Portfolio title={'Our Recent Portfolio'} description={'Our work speaks for itself. We believe in offering the best value and most personalised service to you.'}/>
    <BookPublishingProcess/>
    <ContactForm/>

      
    </>
  )
}

export default BookPublishing
