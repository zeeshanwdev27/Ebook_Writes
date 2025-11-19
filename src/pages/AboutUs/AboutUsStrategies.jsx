import React from "react";
import { BookOpenCheck, PenTool, FileSearch, LayoutTemplate, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

function AboutUsStrategies() {
    
  const cardsData = [
    {
      icon: <BookOpenCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Crafting a Captivating Plot Through Research",
      description: "Our writers delve deep into your idea and research extensively to create a compelling plot that meets your requirements.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <PenTool className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Breathing Life into Your Idea with Original Content",
      description: "Once you approve the plot outline, our skilled writers will work toward creating a unique and original first draft.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FileSearch className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Perfecting Your Manuscript with Critical Review",
      description: "Our team works in tandem to edit, revise and proofread your manuscript to ensure its flaws are addressed on time.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Elevating Your Book with Expert Formatting and Design",
      description: "We add the finishing touches to your manuscript by formatting it extensively and designing it to make it visually appealing.",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Publishing, Branding, Marketing, and Promotion",
      description: "We help you publish your book in your desired format and market it to your target audience to maximize its potential.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {cardsData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl border border-gray-200 p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 transition-all duration-300 min-h-[300px] sm:min-h-[320px] lg:min-h-[340px]"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-linear-to-br ${data.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`}
              />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg sm:rounded-xl bg-linear-to-r ${data.color} text-white shadow-lg group-hover:scale-105 transition-transform duration-300 w-fit`}
              >
                {data.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
                  {data.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-1">
                  {data.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent bg-gradient-to-r ${data.color} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              >
                <div className="rounded-xl sm:rounded-2xl bg-white w-full h-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsStrategies;