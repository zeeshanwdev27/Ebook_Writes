import React from 'react'

function BookWritingAbout() {
  return (
    <div className='min-h-[70vh] flex flex-col lg:flex-row justify-center items-center py-8 px-4 lg:py-12 lg:gap-40 mx-auto text-black '>
      
      {/* Left Content */}
      <div className='flex flex-col gap-6 max-w-lg text-center lg:text-left mb-8 lg:mb-0'>

        <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
          Book Writers For Hire are Available
        </h1>

        <p className='text-slate-700 leading-relaxed'>
            We all have some story to tell, but only a few have the time or the writing skills to craft a compelling piece that resonates with the audience. This is where our book writers for hire come in. We connect you with a specialist in your genre and niche with the skills and expertise to capture your unique voice and amplify it for you.
        </p>

        <p className='font-bold'>Hire book writers today!</p>


        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
          <button className=' cursor-pointer bg-(--main-color) border border-white text-white px-6 py-3 rounded-lg font-semibold   transition duration-300 shadow-lg'>
            Get A Quote
          </button>
          <button className=' cursor-pointer  bg-(--main-color) border-2 border-(--main-color) text-white px-6 py-3 rounded-lg font-semibold hover:bg-transparent hover:border-orange-600  hover:text-black transition duration-300'>
            Talk To An Expert
          </button>
        </div>
      </div>

      {/* Right Form */}
      <img src="/Home/About/about-img.png" className='w-180 h-120' alt="ebooks_images" />



    </div>
  )
}

export default BookWritingAbout
