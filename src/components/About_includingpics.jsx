import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import { useRef } from "react"; // Hook to access DOM elements
import { ABOUT_CONTENT } from "../constants";
import about from "../assets/about1.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { clipPath: "inset(0 50% 0 50%)" },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const scrollRef = useRef(null);

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      if (direction === "left") {
        scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="px-6 py-10" id="about">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight">About Me</h1>
      <div className="h-1 w-64 mb-4 bg-white"></div>

      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={about} alt="Malin Ekanayake" width={300} height={300} className="rounded-3xl" />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p className="text-l md:text-2l lg:text-4l mb-4" variants={textVariants}>
            {ABOUT_CONTENT.line1}
          </motion.p>
          <motion.p className="text-l md:text-2l lg:text-4l" variants={textVariants}>
            {ABOUT_CONTENT.line2}
          </motion.p>
        </motion.div>
      </div>

      <h1 className="text-4xl md:text-6xl font-medium tracking-tight">Sports</h1>
      {/* Scrollable Photo Section */}
      <div className="relative w-full overflow-hidden mt-8">
        <FaArrowLeft
          className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-white"
          onClick={() => scroll("left")}
        />
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide" ref={scrollRef}>
          {[photo1, photo2, photo3, photo4].map((photo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={photo} alt={`Photo ${index + 1}`} className="rounded-3xl" />
            </motion.div>
          ))}
        </div>
        <FaArrowRight
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-white"
          onClick={() => scroll("right")}
        />
      </div>
    </section>
  );
};

export default About;
