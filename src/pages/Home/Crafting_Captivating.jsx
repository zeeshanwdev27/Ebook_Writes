import React from 'react'

function Crafting_Captivating() {
  return (
    <div className='min-h-[70vh] flex flex-col lg:flex-row justify-center items-center py-8 px-4 lg:py-12 lg:gap-65 mx-auto text-black '>
      
      {/* Left Content */}
      <div className='flex flex-col gap-6 max-w-lg text-center lg:text-left mb-8 lg:mb-0'>

        <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
          Crafting Captivating Stories To Designing Beautiful Covers
        </h1>

        <p className='text-slate-700 leading-relaxed'>
          As a leading publishers in USA, we are committed to excellence in everything we do. Whether you're an established author or a first-time writer, we're here to guide you every step of the way. Let us help you transform your dreams into reality and create a book that will leave a lasting impact on your readers. We also work as a photo book publisher, so if you are considering an all-in-one book publishing experts, we are the one!
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
      <img src="/Home/Crafting_Captivating/Crafting_Captivating.jpg" className='w-80 h-80 lg:w-110 lg:h-120' alt="Crafting_Captivating_ebook" />



    </div>
  )
}

export default Crafting_Captivating
