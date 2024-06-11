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
    <div className="mt-3">
      <div className="container mx-auto px-4 py-5 ">
        <h1 className="text-white text-2xl font-extralight mb-4 font-mono m-3 text-center">
          <span ref={typedRef}></span>
        </h1>
        <div className='flex flex-wrap justify-around items-center'>
        <div className='m-2'>
          <a href='https://leetcode.com/rattanankit2004/' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110  hover:text-orange-400 '>LeetCode<br/><p className='text-xl text-orange-200'>300+ Ques</p> </a>
        </div>
        <div className='m-2'>
          <a href='https://www.codechef.com/users/ankitrattan' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>Codechef <br/><p className='text-xl text-orange-200'>Max. 1457</p></a>
        </div>
        <div className='m-2'>
          <a href='https://github.com/Ankit-Rattan' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>GitHub <br/>  .👨‍💻.</a>
        </div>
        <div className='m-2'>
          <a href='https://auth.geeksforgeeks.org/user/rattananul1v' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>GfG<br/><p className='text-xl text-orange-200'>#19</p></a>
        </div>
        </div>

      </div>
    </div>
 );
};

export default SecTwo;
