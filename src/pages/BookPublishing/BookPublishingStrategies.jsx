import React from "react";
import { Sparkles, Eye , Layers} from "lucide-react";
import { motion } from "framer-motion";

function BookPublishingStrategies() {
    
  const cardsData = [
    {
      icon: <Layers  className="w-8 h-8" />,
      title: "Widespread Expertise",
      description:
        "Our publishing team know your industry and its standards. Whatever genre your book belongs too, we get your book published it meeting the high standards of your niche.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Sparkles  className="w-8 h-8" />,
      title: "Personalised Service",
      description:
        "Based on your unique requirements and genre, our team of publishing experts whip up a fool-proof strategy. We patiently listen to your instructions, map out a plan, and meet the set KPIs within the estimated time promised.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Client Communication",
      description:
        "For us, no two clients and projects are alike. We offer a bespoke service and subsequently, we keep a particular emphasis on effective client communication to walk you through every step of the process. We stay true to our word and offer 100% client satisfaction.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50 text-white">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">


<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-5 leading-tight">
  Our {" "}
  <span className="bg-(--main-color) bg-clip-text text-transparent">
    Effortless Approach
  </span>
</h1>

        
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
        {cardsData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300"
          >
            {/* Background Gradient Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
            />

            {/* Icon */}
            <div
              className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${data.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit`}
            >
              {data.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {data.title}
              </h3>

              <p className="text-gray-600 leading-relaxed flex-1">
                {data.description}
              </p>
            </div>

            {/* Hover Border Effect */}
            <div
              className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${data.color} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
            >
              <div className="rounded-3xl bg-white w-full h-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BookPublishingStrategies;