import React from 'react'

function BookMarketingAbout() {
  return (
    <div className='min-h-[70vh] flex flex-col lg:flex-row justify-center items-center py-8 px-4 lg:py-12 lg:gap-40 mx-auto text-black '>
      
      {/* Left Content */}
      <div className='flex flex-col gap-6 max-w-lg text-center lg:text-left mb-8 lg:mb-0'>

        <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
          Exclusive Book Promotion Services with Bullseye Plans
        </h1>

        <p className='text-slate-700 leading-relaxed'>
          Here at Ebook Writes, we know that each work is different and requires its own special approach to promotion. Thus, we take time to learn about your book’s assets, weaknesses, and intended audience as part of our book promotion services. Informed by this research, we craft a comprehensive strategy that employs both classic and cutting-edge channels to give your work the widest possible audience. Book evaluations, social media campaigns, email marketing, author interviews, and more are all possible components of the individualized plans we create for our clients. In order to get your book in front of the right eye at the right moment, our marketing experts will work closely with you to create a unique plan of action.
        </p>


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

export default BookMarketingAbout
