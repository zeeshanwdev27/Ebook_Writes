import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {  Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const dummyData = [
    {
      title: "John S",
      description:
        "Working with EbookWrites Publishers was an incredible experience. They turned my manuscript into a masterpiece, and their marketing team helped me reach a wider audience. I highly recommend them to any author who wants to take their book to the next level.",
    },
    {
      title: "Maria C",
      description:
        "EbookWrites Publishers is the best in the business. They provided me with a comprehensive publishing solution, from writing to marketing, and made the entire process seamless. I'm thrilled with the results and would definitely work with them again.",
    },
    {
      title: "David W.",
      description:
        "I've worked with several publishing companies in the past, but EbookWrites Publishers stands out for their exceptional quality and attention to detail. Their editors are top-notch, and their marketing strategies are highly effective. I couldn't be happier with the outcome.",
    },
    {
      title: "Jessica L.",
      description:
        "EbookWrites Publishers helped me achieve my dream of becoming a published author. They were with me every step of the way, providing valuable feedback and support. I highly recommend their self publishing services to anyone who wants to turn their manuscript into a bestseller.",
    },
    {
      title: "Peter M.",
      description:
        "I was blown away by the level of professionalism and expertise at EbookWrites Publishers. Their team of writers, editors, and designers worked seamlessly to create a beautiful book that exceeded my expectations. I can't thank them enough for their hard work and dedication.",
    },
    {
      title: "Sarah R.",
      description:
        "EbookWrites Publishers provided me with a stress-free publishing experience. They handled everything from book design to marketing, allowing me to focus on what I do best - writing. I'm grateful for their expertise and highly recommend them to anyone who wants to publish a book.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32 py-16 lg:py-24  bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/Home/testimonials/testimonialsbg.jpeg')" }}
    >
         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/30 backdrop-blur-[1px]"></div>
        
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 text-center mb-12 lg:mb-5 relative z-50"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-white text-(--main-color) px-4 py-2 rounded-full text-sm font-medium mx-auto mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Star className="w-4 h-4 fill-current" />
          Hire an Expert Ebook Writer
        </motion.div>

        <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold">
          <span className="bg-white bg-clip-text text-transparent ">
            What Our Client Says
          </span>
        </h1>
      </motion.div>
      

      {/* Swiper Section */}
      <motion.div variants={itemVariants} className="relative z-50">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1536: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
          }}
          loop={true}
          className="modern-swiper"
          speed={800}
        >
          {dummyData.map((data, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={slideVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/60 overflow-hidden transition-all duration-300"
              >
                {/* Client Name */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                    {data.title}
                  </h3>

                  {/* Client Says */}
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-6">
                    {data.description}
                  </p>

                  <div className="border border-gray-300">
                    <div className="border-b border-gray-300  flex justify-between items-center p-2">
                      <p>Communication</p>
                      <div className="flex gap-2 items-center">
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                      </div>
                    </div>

                    <div className="border-b  border-gray-300 flex justify-between items-center p-2">
                      <p>Quality Of Work</p>
                      <div className="flex gap-2 items-center">
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                      </div>{" "}
                    </div>

                    <div className="border-b  border-gray-300 flex justify-between items-center p-2">
                      <p>Delivery</p>
                      <div className="flex gap-2 items-center">
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-2">
                      <p>Support</p>
                      <div className="flex gap-2 items-center">
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                        <Star className="w-4 h-4 fill-(--main-color) stroke-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          className="swiper-button-prev !-left-3 sm:!-left-6 lg:!-left-8 !w-12 !h-12 !bg-white/80 backdrop-blur-sm !rounded-xl !shadow-xl !border !border-slate-200/50 after:!text-sm hover:!bg-white hover:!shadow-2xl hover:scale-110 transition-all duration-200"
          style={{ "--swiper-navigation-color": "#fb4436" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>

        <motion.div
          className="swiper-button-next !-right-3 sm:!-right-6 lg:!-right-8 !w-12 !h-12 !bg-white/80 backdrop-blur-sm !rounded-xl !shadow-xl !border !border-slate-200/50 after:!text-sm hover:!bg-white hover:!shadow-2xl hover:scale-110 transition-all duration-200"
          style={{ "--swiper-navigation-color": "#fb4436" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-4 mt-8"></div>
      </motion.div>

      {/* Custom CSS for Swiper */}
      <style jsx>{`
        .modern-swiper {
          padding: 20px 10px 60px;
        }

        @media (min-width: 640px) {
          .modern-swiper {
            padding: 30px 50px 60px;
          }
        }

        @media (min-width: 1024px) {
          .modern-swiper {
            padding: 40px 60px 70px;
          }
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #fb4436;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #fb4436;
          width: 24px;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.div>
  );
}

export default Testimonials;
