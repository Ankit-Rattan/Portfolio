import React, { useState, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

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
      <div className='mb-[10rem] mt-[3rem]'>
        {visible && (
          <div className='justify-center text-center m-10'>
            <motion.h1
              className='text-emerald-100 font-bold text-[8rem] font-mono'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              NAMASTE
            </motion.h1>
            <motion.h2
              className='text-emerald-100 font-bold text-[4rem] font-mono m-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Hello
            </motion.h2>
            <motion.h2
              className='text-red-200 font-light text-[1.5rem] font-mono animate-pulse'
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