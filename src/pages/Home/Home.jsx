import React from 'react'
import MainHome from './MainHome.jsx'
import About from './About.jsx'
import BookPublishingExperts from './BookPublishingExperts.jsx'
import Crafting_Captivating from './Crafting_Captivating.jsx'
import Testimonials from './Testimonials.jsx'
import ContactForm from './ContactForm.jsx'

function Home() {
  return (
    <>
    <MainHome title="Your Story. Our Expertise" header="Book Publishers in USA – A Bestseller Awaits." description="As experts in book writing, publishing, and marketing, Ebook Writes is your one-stop shop for all your book publishing services needs. We offer end-to-end solutions that will help you transform your manuscript into a bestseller, leaving a lasting impact on your readers. With personalized pricing packages and discount bundles you can get the best of what you desire!" />
    <About/>
    <BookPublishingExperts/>
    <Crafting_Captivating/>
    <Testimonials/>
    <ContactForm/>
      
    </>
  )
}

export default Home
