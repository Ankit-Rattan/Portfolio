import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const SecTwo = () => {
 const typedRef = useRef(null);

 useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Spending nights on LeetCode.', 'Spending nights on Codechef.', 'Spending nights on GitHub.', 'Spending nights on GfG.'],
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
          <a href='' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110  hover:text-orange-400 '>LeetCode<br/><p className='text-xl text-orange-200'>150+ Ques</p> </a>
          <a href='' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>Codechef <br/><p className='text-xl text-orange-200'>Max. 1457</p></a>
          <a href='' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>GitHub <br/>  .👨‍💻.</a>
          <a href='' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>GfG<br/><p className='text-xl text-orange-200'>#19</p></a>
        </div>

      </div>
    </div>
 );
};

export default SecTwo;