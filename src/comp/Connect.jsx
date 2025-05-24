import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-rattan-3a34b724a/' },
  { label: 'LeetCode', href: 'https://leetcode.com/rattanankit2004/', subtitle: '650+ Ques' },
  { label: 'GitHub', href: 'https://github.com/Ankit-Rattan' },
  { label: 'Devpost', href: 'https://devpost.com/rattanankit2004?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' },
  { label: 'Medium', href: 'https://medium.com/@rattan0209' },
  { label: 'Quora', href: 'https://www.quora.com/profile/Ankit-Rattan-5' },
  { label: 'Twitter', href: 'https://twitter.com/AnkitRattan02' },
];

const Connect = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Connect with me...',
        'Spending nights on GitHub 🌙',
        'Eager to get new exposure 🌐',
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#1e1e2f] to-[#111121] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold font-mono text-red-200 mb-10"
        >
          <span ref={typedRef} className="block " />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
        >
          {links.map(({ label, href, subtitle }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px #facc15',
              }}
              className="text-2xl text-amber-200 font-mono bg-white/10 rounded-xl px-4 py-3 hover:text-yellow-400 transition-all duration-300 shadow-lg backdrop-blur-sm w-full max-w-xs"
            >
              <div className="flex flex-col items-center">
                {label}
                {subtitle && (
                  <span className="text-sm text-amber-100 mt-1">{subtitle}</span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        .glowing-text {
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15;
          }
          to {
            text-shadow: 0 0 20px #fcd34d, 0 0 40px #fcd34d, 0 0 60px #fcd34d;
          }
        }
      `}</style>
    </section>
  );
};

export default Connect;
