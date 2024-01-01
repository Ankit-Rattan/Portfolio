
import React, { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Pic from './images/pic.jpg'

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
     const timer = setTimeout(() => {
       setVisible(true);
     }, 2000);
     return () => clearTimeout(timer);
  }, []);
  return (
    <div className='p-[.7rem]'>
    {visible &&
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}>


        <div className='flex justify-around flex-wrap items-center'>
          <div>

            <div className='border-white border-2 p-2'>

              <div className='text-white font-mono text-xl bg-blue-950 p-2 shadow-sm  shadow-slate-400'>
                -Name : Ankit Rattan
                <br />
                <br />
                -College: National Institute of Technology Delhi
                <br />
                <br />
                -Batch: 2026
                <br />
                <br />
                -Email Id: rattanankit2004@gmail.com
                <br />
                <br />
                -Love to Write and Create
                💻✍️
                <br />


              </div>
            </div>
          </div>
          <div className='items-center'>
            <img className='h-[30rem] rounded-r-full' src={Pic} />

          </div>
        </div>
      </motion.div>
    }
    </div>
  )
}

export default About
