import React from 'react';
import { motion } from 'framer-motion';
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJava, SiMysql, SiDart, SiFlutter, SiPython, SiLinux, SiScala } from 'react-icons/si';

const Languages = () => {
  return (
    <div id="skills" className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h2 className="text-white text-3xl font-semibold mb-8">Skills</h2>
        <div className="flex justify-center gap-8">
          {[SiC, SiCplusplus, SiHtml5, SiCss3, SiJava, SiScala, SiMysql, SiDart, SiFlutter, SiPython, SiLinux].map((Icon, index) => (
            <motion.div
              key={index}
              className="text-white text-5xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
