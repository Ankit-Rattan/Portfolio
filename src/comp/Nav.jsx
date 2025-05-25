import React from 'react'

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent">
      <p className="text-white font-mono text-xl animate-pulse">Ankit Rattan</p>
      
      <a
        href="https://drive.google.com/file/d/1JW4DZzmOiKKrf_Kp19bdnsGDoUqzDhwC/view?usp=sharing"
        download
        className="bg-slate-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all"
      >
        Resume
      </a>
    </div>
  )
}

export default Nav
