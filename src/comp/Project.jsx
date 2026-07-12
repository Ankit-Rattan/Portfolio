import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  // {
  //   title: 'SUKOON',
  //   subtitle: 'Addressing the growing mental health crisis in India',
  //   description:
  //     'A mental wellness platform designed to make mental health support accessible, private, and personalized. Team ApexCoders @HackCBS 7.0 + IIIT Delhi Top-50.',
  //   stack:
  //     'Tech Stack: React.js, Next.js, shadcn/ui, Firebase, Auth0, Gemini API',
  //   link: 'https://github.com/Ankit-Rattan/sukoon-next',
  //   cta: 'Github Repository',
  // },
  // {
  //   title: 'CBC',
  //   subtitle: 'MERN + Socket.io Project',
  //   description:
  //     'CBC: Create By Creators is a platform that combines two cutting-edge scopes: creator economy + real-time interaction.',
  //   stack: 'Tech Stack: ReactJS, Socket.io, MongoDB, Express, TailwindCSS',
  //   link: 'https://devpost.com/software/cbc-p2gweu',
  //   cta: 'Devpost Hackathon Submission',
  // },
  // {
  //   title: 'ThoughtBox',
  //   subtitle: 'MERN + Socket Chat App',
  //   description:
  //     'An open chat app for sharing knowledge & thoughts. Users can post, comment, and connect in real-time.',
  //   stack:
  //     'Tech Stack: Vite+React, Tailwind CSS, MongoAtlas, Express, Node, Socket.io',
  //   link: 'https://github.com/Ankit-Rattan/ThoughtBox---OpenChat',
  //   cta: 'Github Repository',
  // },
  // {
  //   title: 'Upvision - Tech Club of NIT Delhi',
  //   subtitle: 'Official Technical Club Website',
  //   description:
  //     'Upvision is the official website of NIT Delhi’s Tech Club. Hosted on the NIT Delhi domain.',
  //   stack: 'Tech Stack: ReactJS, TailwindCSS',
  //   link: 'https://upvisionnitdelhi.netlify.app/',
  //   cta: 'Website Link',
  // },
  
  {
    title: 'Akriti.ai',
    subtitle: 'AI-Powered Real-Time Code Generation Platform',
    description:
      'Developed an AI-powered real-time code generation and editing platform with contextual memory. Integrated Monaco Editor and tldraw for live code preview and interactive UI collaboration. Enabled context-aware AI refinement for continuous code iteration. Ranked Top 10 at MLH HackCBS 8.0 and won 2nd Best AI Integration.',
    stack:
      'Tech Stack: React.js, Next.js, Monaco Editor, tldraw, Gemini API, Tailwind CSS',
    link: 'https://github.com/Ankit-Rattan/Akriti.ai', 
    cta: 'Github Repository',
  },
  {
    title: 'SUKOON',
    subtitle: 'AI-Powered Mental Wellness Platform',
    description:
      'Built a mental wellness platform featuring real-time chat, AI-based mental health assessments, and secure authentication. Integrated Firebase and Auth0 for scalable backend services and implemented an AI-driven evaluation system using facial data inputs. Ranked Top 50 at the IIIT Delhi National Hackathon.',
    stack:
      'Tech Stack: React.js, Next.js, Firebase, Auth0, Gemini API, Tailwind CSS',
    link: 'https://github.com/Ankit-Rattan/sukoon-next',
    cta: 'Github Repository',
  },
  {
    title: 'Upvision - Tech Club of NIT Delhi',
    subtitle: 'Official Technical Club Website',
    description:
      'Developed and maintained the official website of NIT Delhi’s Technical Club, delivering a responsive and modern interface for events, community initiatives, and technical activities.',
    stack: 'Tech Stack: React.js, Tailwind CSS',
    link: 'https://upvisionnitdelhi.netlify.app/',
    cta: 'Website Link',
  },

];

const Project = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold font-mono text-amber-300 mb-16"
      >
        Projects 🚀
      </motion.h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-red-300 mb-2">{proj.title}</h2>
            <p className="text-lime-300 font-medium mb-1">{proj.subtitle}</p>
            <p className="text-cyan-200 text-sm mb-3">{proj.description}</p>
            <p className="text-white text-sm mb-4 italic">{proj.stack}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md font-semibold text-sm transition"
            >
              {proj.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
