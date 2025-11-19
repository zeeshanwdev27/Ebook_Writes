import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Quote, 
  X,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function MbOverlay({ isOpen, setIsOpen }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { 
      text: "CREATIVE", 
      submenu: [
        { text: "Articles & Blogs", path: "/articles-blogs" },
        { text: "Books", path: "/books" },
        { text: "Business Writing", path: "/business-writing" },
        { text: "Editing Service", path: "/editing" },
        { text: "Personal Writing", path: "/personal-writing" }
      ]
    },
    { 
      text: "WRITERS", 
      submenu: [
        { text: "Content Writers", path: "/content-writers" },
        { text: "Technical Writers", path: "/technical-writers" },
        { text: "Creative Writers", path: "/creative-writers" },
        { text: "SEO Writers", path: "/seo-writers" }
      ]
    },
    { 
      text: "DIGITAL SOLUTION", 
      submenu: [
        { text: "Web Design", path: "/web-design" },
        { text: "Digital Marketing", path: "/digital-marketing" },
        { text: "SEO Optimization", path: "/seo" },
        { text: "Social Media Management", path: "/social-media" }
      ]
    },
    { 
      text: "DESIGN", 
      submenu: [
        { text: "Graphic Design", path: "/graphic-design" },
        { text: "UI/UX Design", path: "/ui-ux-design" },
        { text: "Brand Identity", path: "/brand-identity" },
        { text: "Print Design", path: "/print-design" }
      ]
    },
    { 
      text: "MARKETING", 
      submenu: [
        { text: "Content Marketing", path: "/content-marketing" },
        { text: "Social Media Marketing", path: "/social-media-marketing" },
        { text: "Email Marketing", path: "/email-marketing" },
        { text: "Marketing Strategy", path: "/marketing-strategy" }
      ]
    },
    { 
      text: "SOCIAL MEDIA", 
      submenu: [
        { text: "Social Media Management", path: "/social-management" },
        { text: "Content Creation", path: "/social-content" },
        { text: "Community Management", path: "/community-management" },
        { text: "Analytics & Reporting", path: "/social-analytics" }
      ]
    },
    { 
      text: "SEO", 
      submenu: [
        { text: "On-Page SEO", path: "/on-page-seo" },
        { text: "Off-Page SEO", path: "/off-page-seo" },
        { text: "Technical SEO", path: "/technical-seo" },
        { text: "Local SEO", path: "/local-seo" }
      ]
    },
    { 
      text: "INDUSTRIES", 
      submenu: [
        { text: "Healthcare", path: "/healthcare" },
        { text: "Technology", path: "/technology" },
        { text: "E-commerce", path: "/ecommerce" },
        { text: "Education", path: "/education" },
        { text: "Finance", path: "/finance" }
      ]
    }
  ];

  // Animation variants
  const overlayVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  // Close overlay when clicking escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  const handleSubmenuToggle = (itemText) => {
    setActiveSubmenu(activeSubmenu === itemText ? null : itemText);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setActiveSubmenu(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[60] md:hidden"
          onClick={handleBackdropClick}
          initial="closed"
          animate="open"
          exit="closed"
          variants={backdropVariants}
        >
          {/* Menu Panel - Full screen without blur */}
          <motion.div 
            className="absolute top-0 left-0 right-0 bottom-0 bg-white flex flex-col w-full h-full overflow-hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-end p-3 border-b border-gray-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setActiveSubmenu(null);
                }}
                className="mt-1 p-3 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-indigo-50 hover:to-purple-50/30 border border-gray-200/60 hover:border-indigo-200 transition-all duration-300 active:scale-95 mr-4"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Main Menu Items - Scrollable area */}
            <div className="flex-1 overflow-y-auto w-full">
              <div className="p-4 space-y-1 w-full">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 w-full">
                    {/* Main Menu Item */}
                    <button
                      onClick={() => handleSubmenuToggle(item.text)}
                      className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
                    >
                      <span className="text-gray-800 group-hover:text-indigo-700 font-semibold text-base whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.text}
                      </span>
                      <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-transform duration-300 flex-shrink-0 ${
                        activeSubmenu === item.text ? 'rotate-90' : ''
                      }`} />
                    </button>

                    {/* Submenu */}
                    {activeSubmenu === item.text && (
                      <div className="pl-4 pr-4 pb-3 space-y-2 w-full">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveSubmenu(null);
                            }}
                            className="block p-3 rounded-lg bg-gray-50 hover:bg-indigo-100 border border-gray-100 hover:border-indigo-200 transition-all duration-300 group w-full"
                          >
                            <span className="text-gray-700 group-hover:text-indigo-700 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                              {subItem.text}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MbOverlay;