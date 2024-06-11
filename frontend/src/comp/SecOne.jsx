import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SecOne = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className='mb-20 mt-8 md:mb-64 md:mt-24'>
        {visible && (
          <div className='flex flex-col items-center m-2 md:m-10'>
            <motion.h1
              className='text-emerald-100 font-bold text-5xl sm:text-6xl md:text-8xl font-mono'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              NAMASTE
            </motion.h1>
            <motion.h2
              className='text-emerald-100 font-bold text-2xl sm:text-3xl md:text-5xl font-mono my-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Hello
            </motion.h2>
            <motion.h2
              className='text-red-200 font-light text-lg sm:text-xl md:text-2xl font-mono animate-pulse'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              'Byte Explorer from India'
            </motion.h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecOne;
