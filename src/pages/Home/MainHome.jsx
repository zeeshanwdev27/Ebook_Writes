import React from 'react'
import HomeBottomSection from './HomeBottomSection';

function MainHome() {
  return (
    <>
   
    <div className='min-h-[70vh] flex flex-col lg:flex-row justify-center items-center py-8 px-4 lg:py-12 lg:gap-40 mx-auto bg-slate-900 text-white'>
      
      {/* Left Content */}
      <div className='flex flex-col gap-6 max-w-lg text-center lg:text-left mb-8 lg:mb-0'>
        <p className='text-lg font-semibold text-blue-200'>Your Story. Our Expertise</p>

        <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
          Book Publishers in New York – A Bestseller Awaits.
        </h1>

        <p className='text-gray-200 leading-relaxed'>
          As experts in book writing, publishing, and marketing, NY Publishers is your one-stop shop for all your book publishing services needs. We offer end-to-end solutions that will help you transform your manuscript into a bestseller, leaving a lasting impact on your readers. With personalized pricing packages and discount bundles you can get the best of what you desire!
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
          <button className=' cursor-pointer bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:border-white hover:text-black transition duration-300 shadow-lg'>
            Get A Quote
          </button>
          <button className=' cursor-pointer  bg-(--main-color) border-2 border-(--main-color) text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:border-white hover:text-black transition duration-300'>
            Talk To An Expert
          </button>
        </div>
      </div>

      {/* Right Form */}
      <img src="/Home/heroSection_Books.png" className='w-180 h-120' alt="ebooks_images" />



    </div>


    <HomeBottomSection/>


     </>

  )
}

export default MainHome