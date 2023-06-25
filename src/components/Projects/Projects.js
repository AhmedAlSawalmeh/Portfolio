import React, { useEffect } from 'react'
import { motion } from 'framer-motion';

import "./Projects.css"
const socialMatePhoto = require("../../Images/Social Mate.png")
const yourSystemPhoto = require("../../Images/Your System.png")

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
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const projectsCards = [
  { name: "Social Mate", describtion: "Designed and implemented a website aimed at reconnecting individuals with their former schoolmates by utilizing React.js for the front- end, PostgreSQL and MongoDB for the database, and Node.js for the back-end development.", img: socialMatePhoto, link: "https://github.com/Glass-Geeks/MERAKI_Academy_Project_5",demo:"https://www.youtube.com/watch?v=QYwCz1SyBNY&list=PLXYGtZKaS4MWjElPL5Z-yVh2QAWUxv0dZ&index=3" },
  {
    name: "Your System", describtion: `Developed a comprehensive system for managing
  employee data as a company manager, utilizing
  Node.js, Express.js, and MongoDB with
  Mongoose for the back-end, and React.js for the
  front-end.` , img: yourSystemPhoto, link: "https://github.com/C7-AhmedAlSawalmeh/MERAKI_Academy_Project_4",demo:"#"
  }
]
const Projects = () => {
  useEffect(() => {
    const introElement = document.querySelector('.intro');
    introElement.classList.add('go');

  }, [])
  return (
    <motion.div variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <>
        <motion.div
          className='flex-col flex items-center justify-center   mt-10'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >

          <svg className="intro " viewBox="0 0 200 100">

            <foreignObject width="180" height="100">
              <div className='flex justify-between'>
                {projectsCards.map((card) => {
                  return (
                    <div key={card.name} className=" w-20 h-20  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 test2 ml-3 mt-2">
                      <a href={card.link}>
                        <img className="rounded-t-lg" src={card.img} alt="" />
                      </a>
                      <div className="">
                        <a href="#">
                          <h5 className=" ml-1 mt-1   font-bold tracking-tight text-white dark:text-white test"> {card.name}</h5>
                        </a>
                        <p className="ml-1 font-sans font-normal text-gray-300 dark:text-gray-400 test3">
                          {card.describtion}
                        </p>
                        <a href={card.demo}>
                          <motion.p className='ml-1 mt-1 font-normal text-gray-300 dark:text-gray-400 test3 cursor-pointer'
                          whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                          transition={{ type: 'spring', stiffness: 300 }}>
                          See Demo &nbsp;  〉
                        </motion.p>
                        </a>
                      </div>
                    </div>
                  )
                })}

              </div>
            </foreignObject>


          </svg>


          




        </motion.div >
      </>
    </motion.div>
  )
}

export default Projects