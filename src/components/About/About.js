import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import "./About.css"
import { Link } from 'react-router-dom';
const AhmedPhoto = require("../../Images/Ahmed Photo_2.jpg")
const About = () => {
  useEffect(() => {
    const introElement = document.querySelector('.introAbout');
    introElement.classList.add('go');

  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', delay: 0.5 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };
  const imageVariants = {
    hover: {
      scale: 1.1,

      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }
  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }
  return (
    <>
      <motion.div
        className='flex-col flex items-center justify-center   mt-10'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        <svg className="introAbout" viewBox="0 0 200 100">

          <motion.foreignObject x="12" y="18" width="130" height="80">
            <motion.ul
              initial={{ '--rotate': '0deg' }}
              animate={{ '--rotate': '360deg' }}
              transition={{ duration: 2, repeat: 0 }}
            >
              <li style={{ transform: 'rotate(var(--rotate))' }} >I am a passionate individual who is deeply interested in exploring new technologies and discovering opportunities to learn and grow.</li>

              <li style={{ transform: 'rotate(var(--rotate))' }} >Currently, I am striving to become proficient in full-stack development and am fully committed to achieving my career aspirations in this field</li>
              <li style={{ transform: 'rotate(var(--rotate))' }} >With my dedication and focus, I am determined to gain a thorough understanding of coding and leverage this knowledge to build a successful career.</li>


            </motion.ul>
            
            </motion.foreignObject>
            <foreignObject className='test' x="8" y="70" width="180" height="90">
              <motion.div className='buttonContainer' variants={childVariants}>
                <Link to="/contact">
                  <motion.p className='ml-1 mt-1 font-normal text-gray-300 dark:text-gray-400 test3 cursor-pointer text-xs'
                    whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                    transition={{ type: 'spring', stiffness: 300 }}>
                    Contact &nbsp;  〉
                  </motion.p>
                </Link>
              </motion.div>

            </foreignObject>
        </svg>
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          src={AhmedPhoto}

          width="180"
          height="200"
          style={{ borderRadius: "50%" }}
          className='AhmedPhoto'
        />

      


      </motion.div >

    </>
  );
}

export default About