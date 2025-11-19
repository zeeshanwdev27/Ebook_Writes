import React from 'react'
import { motion } from "framer-motion";
import { Star } from "lucide-react";

function MainSection() {

  const dummyData = [
    {
      title: "John S",
      description:
        "Working with Ebook Writes was an incredible experience. They turned my manuscript into a masterpiece, and their marketing team helped me reach a wider audience. I highly recommend them to any author who wants to take their book to the next level.",
    },
    {
      title: "Maria C",
      description:
        "Ebook Writes is the best in the business. They provided me with a comprehensive publishing solution, from writing to marketing, and made the entire process seamless. I'm thrilled with the results and would definitely work with them again.",
    },
    {
      title: "David W.",
      description:
        "I've worked with several publishing companies in the past, but Ebook Writes stands out for their exceptional quality and attention to detail. Their editors are top-notch, and their marketing strategies are highly effective. I couldn't be happier with the outcome.",
    },
    {
      title: "Jessica L.",
      description:
        "Ebook Writes helped me achieve my dream of becoming a published author. They were with me every step of the way, providing valuable feedback and support. I highly recommend their self publishing services to anyone who wants to turn their manuscript into a bestseller.",
    },
    {
      title: "Peter M.",
      description:
        "I was blown away by the level of professionalism and expertise at Ebook Writes. Their team of writers, editors, and designers worked seamlessly to create a beautiful book that exceeded my expectations. I can't thank them enough for their hard work and dedication.",
    },
    {
      title: "Sarah R.",
      description:
        "Ebook Writes provided me with a stress-free publishing experience. They handled everything from book design to marketing, allowing me to focus on what I do best - writing. I'm grateful for their expertise and highly recommend them to anyone who wants to publish a book.",
    },
  ];

  // Star rating component to avoid repetition
  const StarRating = () => (
    <div className="flex gap-1 items-center">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 stroke-amber-400" />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Discover why authors trust Ebook Writes for their publishing journey
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dummyData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/60 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Client Info */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Client Name */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3">
                  {data.title}
                </h3>

                {/* Client Review */}
                <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base line-clamp-4 sm:line-clamp-5">
                  {data.description}
                </p>

                {/* Ratings Section */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="border-b border-gray-200 flex justify-between items-center p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-700">Communication</p>
                    <StarRating />
                  </div>

                  <div className="border-b border-gray-200 flex justify-between items-center p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-700">Quality Of Work</p>
                    <StarRating />
                  </div>

                  <div className="border-b border-gray-200 flex justify-between items-center p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-700">Delivery</p>
                    <StarRating />
                  </div>

                  <div className="flex justify-between items-center p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-700">Support</p>
                    <StarRating />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainSection