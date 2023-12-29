import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// import LinkedIn from "./linkedin.png"


const Connect = () => {
    const typedRef = useRef(null);

    useEffect(() => {
       const typed = new Typed(typedRef.current, {
         strings: ['Connect with me...', 'Eager to get new exposure'],
         typeSpeed: 50,
         backSpeed: 20,
         loop: true,
       });
   
       return () => {
         typed.destroy();
       };
    }, []);    
    return (
        <div className="mt-16">
          <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-neon text-2xl font-extralight mb-4 font-mono m-3 text-center">
              <span ref={typedRef}></span>
            </h1>
            <div className='flex flex-wrap justify-around items-center'>
              <a href='https://www.linkedin.com/in/ankit-rattan-3a34b724a/' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110  hover:text-orange-400 '>LinkedIn✅</a>
              <a href='https://devpost.com/rattanankit2004?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>Devpost💻</a>
              <a href='https://medium.com/@rattan0209' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>Medium📝</a>
              <a href='https://www.quora.com/profile/Ankit-Rattan-5' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>Quora💬</a>
              <a href='https://twitter.com/AnkitRattan02' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>Twitter📶</a>
            </div>
    
          </div>
        </div>
     );
}

export default Connect
