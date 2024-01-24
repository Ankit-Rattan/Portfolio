
import React, { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

const Project = () => {
    const [isVisible, setIsVisible] = useState(false)

    const { scrollY } = useViewportScroll()
    const y = useTransform(scrollY, [0, 500], [0, 1])

    useEffect(() => {
        y.onChange(latest => setIsVisible(latest >= 1))
    }, [y])

    return (
        <>
            <div className=" m-5 i justify-center">
                <motion.div
                    className="opacity-0 transition duration-1000   p-8 shadow-sm shadow-slate-100"
                    style={{ opacity: isVisible ? 1 : 0 }}
                >
                    <h1 className="text-center text-amber-100 mt-5 text-4xl font-semibold font-mono">Projects</h1>
                <div className='flex flex-wrap justify-around'>



                    <div className="mt-8 w-[30rem]">
                        <h1 className="text-2xl font-semibold text-red-300">CBC</h1>
                        <p className="mt-2 text-lime-200">First Hackathon : CrackDevs Hackathon</p>
                        <p className="mt-2 text-lime-200">Contributor : Ankit Rattan, Himanshu Gupta</p>
                        <p className="mt-2 text-cyan-200">CBC: Create By Creators is a platform that provides you with a combination of two cutting-edge scopes together.</p>
                        <p className="mt-2 text-white">Tech Stack : ReactJS, Socketio, MongoDB, Express, TailwindCSS </p>
                        <a href="https://github.com/Ankit-Rattan/EQ-Hacks-Submission" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>

                    </div>
                    <div className="mt-8 w-[30rem]">
                        <h1 className="text-2xl font-semibold text-red-300">ThoughtBox</h1>
                        <p className="mt-2 text-lime-200">MERN+Socket Project</p>
                        <p className="mt-2 text-cyan-200">It is an open chat app for sharing your knowledge and thoughts with others, where you can also comment and any other person on their thoughts.</p>
                        <p className="mt-2 text-white">Tech Stack : Vite+Rect Tailwind CSS MongoAtlas Express Node  Socket</p>
                        <a href="https://github.com/Ankit-Rattan/Chat_App-beta" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>
                    </div>

                    <div className="mt-8 w-[30rem]">
                        <h1 className="text-2xl font-semibold text-red-300">InfoLevel</h1>
                        <p className="mt-2 text-lime-200">React App</p>
                        <p className="mt-2 text-cyan-200">InfoLevel is general web-app for storing contact details like name and email, collecting real-time data.</p>
                        <p className="mt-2 text-white">Tech Stack : Vite+React Tailwind CSS Firebase</p>
                        <a href="https://github.com/Ankit-Rattan/InfoLevel_React" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>
                    </div>
                    <div className="mt-8 w-[30rem]">
                        <h1 className="text-2xl font-semibold text-red-300">Drum Kit</h1>
                        <p className="mt-2 text-lime-200">JS Learning Project </p>
                        <p className="mt-2 text-cyan-200">A general drum kit can be operated using keyboard</p>
                        <p className="mt-2 text-white">Tech Stack : Javascript </p>
                        <br/>
                        <a href="https://github.com/Ankit-Rattan/InfoLevel_React" className="mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github Repository</a>
                    </div>
                </div>
                </motion.div>
            </div>
        </>
    )
}

export default Project;


