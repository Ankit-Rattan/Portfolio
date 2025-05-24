import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const experiences = [
  {
    org: 'CabEasy',
    role: 'Web Developer Intern',
    type: 'Internship • Remote',
    period: 'Jun 2024 – Feb 2025 • 9 mos',
    location: 'Delhi, India',
    description:
      'Developed and maintained front-end features using React.js and TailwindCSS and Firebasse. Integrated RESTful APIs and improved user experience.',
  }, 
  {
    org: 'Social (Formerly Script Foundation)',
    role: 'Contributor',
    type: 'Part-time • Remote',
    period: 'Jun 2023 – Aug 2023 • 3 mos',
    description:
      'Contributed to open-source repositories and collaborated with developers to build accessible tools and documentation.',
  },
  {
    org: 'Microsoft',
    role: 'Microsoft Learn Student Ambassador (Alpha → Beta)',
    type: 'Full-time • Remote',
    period: 'Sep 2023 – Jan 2025 • 1 yr 5 mos',
    description:
      'Contributed as an Alpha and then promoted to Beta MLSA, working on community engagement, technical workshops, and student outreach.',
  },
];

const Exp = () => {
  return (
    <section className="bg-[#0e0e1a] py-20 px-5">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl font-bold font-mono text-amber-300 mb-16"
      >
        Experience 💼
      </motion.h1>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-amber-400/10 transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-red-300">{exp.role}</h2>
            <p className="text-lime-300 text-lg mt-1">{exp.org}</p>

            <div className="flex items-center text-white/70 text-sm mt-3 gap-3 flex-wrap">
              <span className="flex items-center gap-1">
                <Briefcase size={16} /> {exp.type}
              </span>
              {exp.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {exp.location}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock size={16} /> {exp.period}
              </span>
            </div>

            <p className="text-cyan-200 mt-4 text-sm leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Exp;
