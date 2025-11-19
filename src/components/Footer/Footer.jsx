import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full text-gray-700 bg-gray-100 body-font">
      {/* Footer Section */}
      <div className="container px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-full lg:w-64 mx-auto text-center lg:mx-0 lg:text-left mb-8 lg:mb-0">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="logo.png" 
                alt="ebookwrites_logo" 
                className='w-32 h-8 sm:w-40 sm:h-10 lg:w-48 lg:h-12' 
              />
            </div>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Write. Design. Publish. Your ebook, perfected.
            </p>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col sm:flex-row flex-grow w-full lg:w-auto justify-between lg:justify-start lg:pl-12 xl:pl-20 mt-8 lg:mt-0">
            {/* About Section */}
            <div className="w-full sm:w-1/2 lg:w-64 px-0 sm:px-4 mb-8 sm:mb-0">
              <h2 className="mb-4 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font text-center sm:text-left">
                About
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                We're a full-service book publishing company that offers end-to-end publishing solutions tailored to our client's needs.
              </p>
            </div>

            {/* Service Section */}
            <div className="w-full sm:w-1/2 lg:w-64 px-0 sm:px-4 mb-8 sm:mb-0 lg:ml-8 xl:ml-12">
              <h2 className="mb-4 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font text-center sm:text-left">
                Service
              </h2>
              <nav className="list-none">
                <li className="mt-3">
                  <Link to="/book-marketing" className="text-gray-600 hover:text-(--main-color) cursor-pointer transition-colors duration-200 text-sm sm:text-base flex items-center justify-center sm:justify-start group">
                    Book Marketing
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/book-writing" className="text-gray-600 hover:text-(--main-color) cursor-pointer transition-colors duration-200 text-sm sm:text-base flex items-center justify-center sm:justify-start group">
                    Book Writing
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/book-publishing" className="text-gray-600 hover:text-(--main-color) cursor-pointer transition-colors duration-200 text-sm sm:text-base flex items-center justify-center sm:justify-start group">
                    Book Publishing
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-(--main-color)">
        <div className="container px-4 sm:px-6 lg:px-8 py-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-sm sm:text-base text-white text-center md:text-left order-2 md:order-1 mt-2 md:mt-0">
              Copyright © 2025 EbookWrites. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer