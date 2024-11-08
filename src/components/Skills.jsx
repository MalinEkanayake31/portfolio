import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, FaLinux } from "react-icons/fa";
import { SiC, SiCplusplus, SiMysql, SiDart, SiFlutter, SiScala } from "react-icons/si";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight">Technologies</h1>
      <div className="h-1 w-64 mb-10 bg-white"></div>
      
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {/* Icons with specific colors */}
        <FaReact size={60} color="#61DAFB" />      {/* React - Cyan */}
        <SiC size={60} color="#A8B9CC" />          {/* C - Light blue */}
        <SiCplusplus size={60} color="#00599C" />  {/* C++ - Dark blue */}
        <FaHtml5 size={60} color="#E34F26" />      {/* HTML5 - Orange */}
        <FaCss3Alt size={60} color="#1572B6" />    {/* CSS3 - Blue */}
        <FaJava size={60} color="#007396" />       {/* Java - Dark Cyan */}
        <SiScala size={60} color="#DC322F" />      {/* Scala - Red */}
        <SiMysql size={60} color="#4479A1" />      {/* MySQL - Blue */}
        <SiDart size={60} color="#0175C2" />       {/* Dart - Blue */}
        <SiFlutter size={60} color="#02569B" />    {/* Flutter - Blue */}
        <FaPython size={60} color="#306998" />     {/* Python - Blue */}
        <FaLinux size={60} color="#FCC624" />      {/* Linux - Yellow */}
      </div>
    </motion.div>
  );
};

export default Skills;
