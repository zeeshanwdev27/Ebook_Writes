import React from 'react'

function About() {
  return (
    <div className='min-h-[70vh] flex flex-col lg:flex-row justify-center items-center py-8 px-4 lg:py-12 lg:gap-40 mx-auto text-black '>
      
      {/* Left Content */}
      <div className='flex flex-col gap-6 max-w-lg lg:text-center lg:text-left mb-8 lg:mb-0'>

        <h1 className='text-3xl lg:text-4xl font-semibold leading-tight'>
          Ebook Writes, where your story comes to life.
        </h1>

        <p className='text-slate-700 leading-relaxed'>
          As a premier book writing, marketing and a legacy books publisher company, we pride ourselves on our unmatched proficiency in turning your manuscript into a bestseller.
        </p>

        <p className='text-slate-700 leading-relaxed'>
          Find book publisher in the USA that is affordable and provides top-rated quality work without any compromise and delays in submissions.
        </p>

        <ul className='list-disc flex flex-col gap-2 text-(--main-color) font-medium pl-5'>
            <li>Ghostwriting </li>
            <li>Professional editing and proofreading </li>
            <li>Cover designing and Illustrations </li>
            <li>Book Promotions and Marketing </li>
            <li>Amazon Publishing and Printing </li>
            <li>Chidren Book illustration and publishing </li>
        </ul>

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
      <img src="/Home/About/about-img.png" className='w-100 h-100 lg:w-180 lg:h-120' alt="ebooks_images" />



    </div>
  )
}

export default About
