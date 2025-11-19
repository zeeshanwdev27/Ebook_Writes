import React from 'react'
import { motion } from 'framer-motion'

function HomeBottomSection() {
    const imageLinks = [
        { url: "/Home/BottomHeroSection/amazon.png" },
        { url: "/Home/BottomHeroSection/googleplay.png" },
        { url: "/Home/BottomHeroSection/hachette.png" },
        { url: "/Home/BottomHeroSection/harper.png" },
        { url: "/Home/BottomHeroSection/ibooks.png" },
        { url: "/Home/BottomHeroSection/kobo.png" },
        { url: "/Home/BottomHeroSection/penguin.png" },
        { url: "/Home/BottomHeroSection/scribd.png" },
        { url: "/Home/BottomHeroSection/simon.png" },
    ]

    const duplicatedImages = [...imageLinks, ...imageLinks, ...imageLinks,]

    return (
        <div className='h-[10vh] flex justify-center items-center py-5 bg-(--main-color) overflow-hidden mx-auto px-8 md:px-16 lg:px-65 w-full'>
    <div className='w-full overflow-hidden'>
        <motion.div
            className='flex justify-center items-center'
            animate={{
                x: ['0%', '-100%']
            }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: duplicatedImages.length * 0.5,
                    ease: "linear",
                },
            }}
        >
            {duplicatedImages.map((item, index) => (
                <motion.div 
                    className='flex-shrink-0 mx-8 md:mx-12' 
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img 
                        src={item.url} 
                        alt={`partner-logo-${index}`} 
                        className='h-8 md:h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                    />
                </motion.div>
            ))}
        </motion.div>
    </div>
</div>
    )
}

export default HomeBottomSection