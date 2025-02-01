"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; // Import icons



export default function Home() {
  
  // States for hover effects
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverColors, setHoverColors] = useState(["", "", ""]); // Array to store colors for each photo
  const [buttonHoverColor, setButtonHoverColor] = useState("black"); // State for "Learn More" button hover color
  const [navShadow, setNavShadow] = useState(false); // State to toggle shadow on navbar on scroll

  // State for random colors of 森森森
  const [heroColors, setHeroColors] = useState(["#4B2E83", "#FEBE10", "#69B3E7"]); // Initial colors

  // Function to shuffle existing colors without repetition
  const shuffleColors = () => {
    const colors = ["#4B2E83", "#FEBE10", "#69B3E7"]; // Columbia Blue, UW Purple, UW Gold
    const shuffledColors = colors.sort(() => Math.random() - 0.5); // Randomly shuffle
    setHeroColors(shuffledColors); // Update hero colors
  };

  // Effect to change colors every 5 seconds
  useEffect(() => {
    const interval = setInterval(shuffleColors, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle hover enter for photos
  const handleMouseEnter = (index) => {
    const colors = ["#69B3E7", "#4B2E83", "#FEBE10"]; // Columbia Blue, UW Purple, UW Gold
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const updatedColors = [...hoverColors];
    updatedColors[index] = randomColor; // Update the color for the hovered photo
    setHoverColors(updatedColors);
    setHoveredIndex(index); // Set hovered index
  };

  // Handle hover leave for photos
  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index
  };

  // Handle hover enter for "Learn More" button
  const handleButtonMouseEnter = () => {
    const colors = ["#69B3E7", "#4B2E83", "#FEBE10"]; // Columbia Blue, UW Purple, UW Gold
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonHoverColor(randomColor); // Update button hover color
  };

  // Detect scroll for navigation bar shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white z-10 transition-shadow duration-300 ${
          navShadow ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-black">杰森森森</div>
          <div className="flex space-x-6">
            {["Home", "About", "Photos", "Contact"].map((link, index) => (
              <Link
                key={index}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-800 font-medium hover:text-black transition duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Hello, I'm 杰
          <span
            style={{
              color: heroColors[0],
              transition: "color 2s ease-in-out", // Gradual color change
            }}
          >
            森
          </span>
          <span
            style={{
              color: heroColors[1],
              transition: "color 2s ease-in-out", // Gradual color change
            }}
          >
            森
          </span>
          <span
            style={{
              color: heroColors[2],
              transition: "color 2s ease-in-out", // Gradual color change
            }}
          >
            森
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mb-8"
        >
          <span
            style={{
              fontFamily: "'Open Sans', sans-serif", // Replace this with the UW font if uploaded
              color: "#808080", // UW Purple
              fontSize: "1.1em", // Smaller font size
            }}
          >
            University of Washington '23
          </span>{" "}
          |{" "}
          <span
            style={{
              fontFamily: "'Trajan Pro', serif", // Replace this with CU font if uploaded
              color: "#808080", // Columbia Blue
              fontSize: "1.1em", // Smaller font size
            }}
          >
            Columbia University MSDS
          </span>{" "}
          |{" "}
          <span
            style={{
              fontFamily: "Roboto Mono, monospace", // Represents a "data" and coding vibe
              color: "#808080",
              fontSize: "1.1em", // Smaller font size
            }}
          >
            Data Scientist
          </span>
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={handleButtonMouseEnter}
          style={{ backgroundColor: buttonHoverColor }}
          className="px-6 py-3 text-white font-semibold rounded-full hover:shadow-xl transition duration-300"
        >
          Learn More
        </motion.button>
      </section>




      {/* Photo Gallery Section */}
      <section id="photos" className="py-12 bg-white">
        {/* Text Fade-In */}
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 0 }} // Start faded and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          viewport={{ once: true }} // Trigger animation only once
          transition={{ duration: 1.8}} // Smooth animation over 1.5 seconds
        >
          My Photo, My Story
        </motion.h2>
        {/* Photos Fade-In */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {}, // Placeholder for the initial state
            show: {
              transition: {
                delayChildren: 1.8, // Delay photo animation until text animation is complete
                staggerChildren: 0.6, // Sequentially animate each photo after the previous one
              },
            },
          }}
        >
          {[
            { src: "seattle.jpg", caption: "Seattle" },
            { src: "disney.jpg", caption: "Disney, Orlando" },
            { src: "new york.jpg", caption: "New York" },
          ].map((photo, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 }, // Start fully hidden
                show: { opacity: 1, transition: { duration: 0.6 } }, // Gradually fade in over 2 seconds
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            className={`bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
              hoveredIndex === index
                ? "scale-105 z-10"
                : hoveredIndex !== null
                ? "scale-90 opacity-30"
                : ""
            }`}

            >
              <img
                src={`/photos/${photo.src}`}
                alt={photo.caption}
                className="w-full h-auto"
              />
              <div className="p-4 text-center">
                <p
                  className={`text-gray-600 transition-colors duration-300 ${
                    hoveredIndex === index ? "font-bold" : ""
                  }`}
                  style={{
                    color: hoveredIndex === index ? hoverColors[index] : "",
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>



      {/* Footer */}
      <footer id="contact" className="bg-gray-100 text-gray-600 text-center py-6">
        <p>© 2025 杰森森森. All rights reserved.</p>
        <div className="flex justify-center space-x-8 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-black transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-black transition duration-300" />
          </a>
        </div>
      </footer>
    </>
  );
}


