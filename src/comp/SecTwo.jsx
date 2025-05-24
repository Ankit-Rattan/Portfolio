import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const SecTwo = () => {
 const typedRef = useRef(null);

 useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Spending nights on LeetCode.', 'Spending nights on GitHub.'," and Caffine" ],
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
<<<<<<< HEAD:src/comp/SecTwo.jsx
          <a href='https://leetcode.com/rattanankit2004/' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110  hover:text-orange-400 '>LeetCode<br/><p className='text-xl text-orange-200'>650+ Ques</p> </a>
=======
          <a href='https://leetcode.com/rattanankit2004/' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110  hover:text-orange-400 '>LeetCode<br/><p className='text-xl text-orange-200'>350+ Ques</p> </a>
>>>>>>> 72f751d47c2e2f008691a7ef64e15d4761298896:frontend/src/comp/SecTwo.jsx
        </div>
        <div className='m-2'>
          <a href='https://github.com/Ankit-Rattan' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>GitHub <br/>  .👨‍💻.</a>
        </div>
<<<<<<< HEAD:src/comp/SecTwo.jsx

=======
        <div className='m-2'>
          <a href='https://auth.geeksforgeeks.org/user/rattananul1v' className='text-orange-300 text-2xl font-mono mx-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-orange-400'>GfG<br/><p className='text-xl text-orange-200'>⚙️</p></a>
        </div>
>>>>>>> 72f751d47c2e2f008691a7ef64e15d4761298896:frontend/src/comp/SecTwo.jsx
        </div>

      </div>
    </div>
 );
};

export default SecTwo;
