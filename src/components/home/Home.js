import React, { useEffect } from 'react'
import { color, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import "./Home.css"
import { Link } from 'react-router-dom';
const AhmedPhoto = require("../../Images/Ahmed Photo_2.jpg")
const SLogo = require("../../Images/S_Logo.png")
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5, duration: 1.5, staggerChildren: 0.4,
      when: "beforeChildren",
    }
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
      yoyo: 5
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
const Home = () => {
  useEffect(() => {
    const introElement = document.querySelector('.intro');
    introElement.classList.add('go');

  }, []);
  return (
    <>
      <motion.div
        className='flex-col flex items-center justify-center   mt-10'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        
        <svg className="intro " viewBox="0 0 200 100">
          <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">Hello, This is Ahmed Al Sawalmeh</text>
          <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">full stack developer</text>
          <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">My Porfotlio</text>
          <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Hello, This is Ahmed Al Sawalmeh</text>
          <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">full stack developer </text>
          <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">Welcome.</text>


          <defs>
            <clipPath id="text1">
              <text textAnchor="start" x="10" y="30" className="text">Hello, This is Ahmed Al Sawalmeh</text>
            </clipPath>
            <clipPath id="text2">
              <text textAnchor="start" x="10" y="50" className="text">full stack developer </text>
            </clipPath>
            <clipPath id="text3">
              <text textAnchor="start" x="10" y="70" className="text">Welcome.</text>
            </clipPath>

          </defs>
          <foreignObject className='test' x="5" y="75" width="180" height="90">
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

          <image href={SLogo} x="120" y="25" width="100" height="80" />
        </svg>




        

      </motion.div >
    </>
  )
}

export default Home




