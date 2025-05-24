import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Pic from './images/pic.jpg';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-[.7rem]">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="shadow-2xl rounded-xl bg-gradient-to-br from-blue-950 to-slate-900 p-6 md:p-10"
        >
          <div className="flex justify-around flex-wrap items-center gap-8">
            <div className="border-white border-2 p-4 shadow-lg rounded-md bg-white/5 backdrop-blur-sm">
              <div className="text-white font-mono text-xl leading-relaxed">
                - Ankit Rattan
                <br /><br />
                - National Institute of Technology Delhi (2026)
                
                <br /><br />
                - rattanankit2004@gmail.com 
                <br /><br />
                - Love to Write and Create 💻✍️
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden sm:block shadow-2xl rounded-r-full overflow-hidden"
              >
                <img
                  src={Pic}
                  alt="Ankit Rattan"
                  className="max-h-[18rem] sm:max-h-[12rem] md:max-h-[18rem] lg:max-h-[18rem] w-auto object-cover"
                />
              </motion.div>

              {/* Current Position Block */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.7 }}
                className="bg-amber-100/10 text-amber-200 px-4 py-2 rounded-md shadow-md text-center text-sm font-mono backdrop-blur-sm border border-amber-400/20"
              >
                Software Engineer Intern`25 @ Microsoft<br />
                
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
