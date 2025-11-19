import React from 'react'

function AboutUsContent() {
  return (
    <div className='min-h-[70vh] flex flex-col lg:flex-row justify-center items-center py-8 px-4 lg:py-12 lg:gap-40 mx-auto text-black '>
      
      {/* Left Content */}
      <div className='flex flex-col gap-6 max-w-lg text-center lg:text-left mb-8 lg:mb-0'>

        <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
          Transforming Your Writing Dream into a Best-Selling Reality, Step by Step.
        </h1>

        <p className='text-slate-700 leading-relaxed'>
          As avid believers in the power of storytelling, we at EbookWrites are dedicated to helping you achieve your writing and publication dreams. Whether you want to share your personal journey, craft a captivating work of fiction, or delve into a historical topic, our passionate book enthusiasts will refine your experience word by word.
        </p>

        <p className='text-slate-700 leading-relaxed'>
          Our seasoned experts are masters of their respective genres, boasting a wealth of experience and talent that sets us apart from the competition.
        </p>

      </div>

      {/* Right Form */}
      <img src="/Home/About/about-img.png" className='w-180 h-120' alt="ebooks_images" />



    </div>
  )
}

export default AboutUsContent
