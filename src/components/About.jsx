import { motion } from "framer-motion"
import { clipPath } from "framer-motion/client"
import { ABOUT_CONTENT } from "../constants"
import about from "../assets/about1.jpg"

const About = () => {
    const textVariants = {
        hidden: { opacity: 0, y:50 },
        visible: { opacity: 1, y:0, transition: {duration: 0.8, ease: "easeOut"} }
    }
    
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    }
    
    const imageVariants = {
        hidden: { clipPath: "insert(0 50% 0 50%" },
        visible: {
            clipPath: "insert(0 0% 0 0%",
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            },
        }
    }  
  return (
    <section className="px-6 py-10" id="about">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight">About Me</h1>
        <div className="h-1 mb-1 bg-white"></div>
        <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
            <motion.div
                className="w-full md:w-1/2 p-8"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
            >
                <img src={about} alt="Malin Ekanayake" width={300} height={300} className="rounded-3xl"/>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 p-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.p
                className="text-l md:text-2l lg:text-4l mb-4"
                variants={textVariants}
                >
                    {ABOUT_CONTENT.line1}
                </motion.p>
                <motion.p
                className="text-l md:text-2l lg:text-4l"
                variants={textVariants}
                >
                    {ABOUT_CONTENT.line2}
                </motion.p>
            </motion.div>

        </div>
    </section>
  )
}

export default About
