import React, { useState, useEffect } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

const Project = () => {

    return (
        <>
            <div className="m-5 i justify-center">
                   
                    <h1 className="text-center text-amber-100 mt-5 text-4xl font-semibold font-mono">Projects</h1>
                    <div className='flex flex-wrap justify-around'>
                        <div className="mt-8 w-[30rem]">
                            <h1 className="text-2xl font-semibold text-red-300">CBC</h1>
                            <p className="mt-2 text-lime-200">MERN + Socketio Project</p>
                            <p className="mt-2 text-lime-200">Ankit Rattan</p>
                            <p className="mt-2 text-cyan-200">CBC: Create By Creators is a platform that provides you with a combination of two cutting-edge scopes together.</p>
                            <p className="mt-2 text-white">Tech Stack: ReactJS, Socketio, MongoDB, Express, TailwindCSS </p>
                            <a href="https://github.com/Ankit-Rattan/EQ-Hacks-Submission" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>
                        </div>
                        <div className="mt-8 w-[30rem]">
                            <h1 className="text-2xl font-semibold text-red-300">ThoughtBox</h1>
                            <p className="mt-2 text-lime-200">MERN+Socket Project</p>
                            <p className="mt-2 text-cyan-200">It is an open chat app for sharing your knowledge and thoughts with others, where you can also comment and any other person on their thoughts.</p>
                            <p className="mt-2 text-white">Tech Stack: Vite+Rect, Tailwind CSS, MongoAtlas, Express, Node, Socket</p>
                            <a href="https://github.com/Ankit-Rattan/Chat_App-beta" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>
                        </div>
                        <div className="mt-8 w-[30rem]">
                            <h1 className="text-2xl font-semibold text-red-300">InfoLevel</h1>
                            <p className="mt-2 text-lime-200">React App</p>
                            <p className="mt-2 text-cyan-200">InfoLevel is general web-app for storing contact details like name and email, collecting real-time data.</p>
                            <p className="mt-2 text-white">Tech Stack: Vite+React, Tailwind CSS, Firebase</p>
                            <a href="https://github.com/Ankit-Rattan/InfoLevel_React" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>
                        </div>
                        <div className="mt-8 w-[30rem]">
                            <h1 className="text-2xl font-semibold text-red-300">Upvision - Tech Club of NIT Delhi</h1>
                            <p className="mt-2 text-lime-200">Official Technical Club Website</p>
                            <p className="mt-2 text-cyan-200">Upvision is the official Tech Club Website live at NIT Delhi official website.</p>
                            <p className="mt-2 text-white">Tech Stack: ReactJS .  Tailwind</p>
                            <a href="https://upvisionnitdelhi.netlify.app/" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Project
