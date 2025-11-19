import React from 'react'
import MainHome from '../Home/MainHome.jsx'

import BookWritingAbout from './BookWritingAbout.jsx'
import BookWritingStrategies from './BookWritingStrategies.jsx'
import BookWritingProcess from './BookWritingProcess.jsx'

import Portfolio from '../../components/Portfolio.jsx'
import ContactForm from '../Home/ContactForm.jsx'




function BookWriting() {
  return (
    <>
    <MainHome title="Want to Share your story?" header="Book Writing Services – Our Nice-Specific Writers Can Do Wonders." description="Our team of skilled writers specializes in various genres and niches to help you share your experiences, ideas, and expertise without any boundaries. From heartwarming romances to spine-tingling thrillers, we have the talent and expertise to craft the perfect story that resonates with you and your target audience. Get the best book writing services today." />
    <BookWritingAbout/>
    <BookWritingStrategies/>
    <Portfolio title={'Our Enthralling Portfolio'} description={'We are proud to showcase our work that reflects our hard work and dedication on every project.'}/>
    <BookWritingProcess/>
    <ContactForm/>

      
    </>
  )
}

export default BookWriting
