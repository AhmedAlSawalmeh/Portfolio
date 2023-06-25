import React from 'react'
import { Timeline, } from 'flowbite-react'
import "./SlideBar.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const svgVariants = {
   hidden: { rotate: -180 },
   visible: {
      rotate: 0,
      transition: { duration: 1 }
   },
}

const pathVariants = {
   hidden: {
      opacity: 0,
      pathLength: 0,
   },
   visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
         duration: 2,
         ease: "easeInOut",
      }
   }
};


const SideBar = () => {
   return (
      <div>
         <motion.div className="flex items-center justify-center mt-10 "
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
         >

            <ol className="items-center sm:flex ju">
               <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center cursor-pointer" >
                     <Link to="/" className=" z-10 flex items-center cursor-pointer justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0" >
                        <motion.svg className="icon" fill="#51256f" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/motion.svg" variants={svgVariants}
                           initial="hidden"
                           animate="visible"><motion.path variants={pathVariants} d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z" /></motion.svg>
                     </Link>
                     <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                     <h3 className="text-lg font-semibold text-white dark:text-white">Home</h3>

                  </div>
               </li>


               <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center cursor-pointer">
                     <Link to="/about" className="z-10 flex items-center cursor-pointer justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <motion.svg variants={svgVariants}
                           initial="hidden"
                           animate="visible" width="20px" height="20px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/motion.svg"><motion.path d="M789.333333 853.333333H234.666667l-128 128V256c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z" fill="#51256f" /><motion.path variants={pathVariants} d="M469.333333 426.666667h85.333334v234.666666h-85.333334z" fill="#FFFFFF" /><motion.path variants={pathVariants} d="M512 320m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFFFFF" /></motion.svg>
                     </Link>
                     <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                     <h3 className="text-lg font-semibold text-white dark:text-white">About</h3>

                  </div>
               </li>
               <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center cursor-pointer">
                     <Link to="/skills" className="z-10 flex items-center cursor-pointer justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <motion.svg variants={svgVariants}
                           initial="hidden"
                           animate="visible" fill="#51256f" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/motion.svg"
                           viewBox="0 0 232.688 232.688">
                           <g id="XMLID_169_">
                              <g id="XMLID_197_">
                                 <motion.path variants={pathVariants} id="XMLID_221_" d="M97.688,61.344h120c8.284,0,15-6.716,15-15s-6.716-15-15-15h-120c-8.284,0-15,6.716-15,15
			S89.403,61.344,97.688,61.344z"/>
                              </g>
                              <g id="XMLID_222_">
                                 <motion.path variants={pathVariants} id="XMLID_223_" d="M217.688,101.344h-120c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15
			S225.972,101.344,217.688,101.344z"/>
                              </g>
                              <g id="XMLID_224_">
                                 <motion.path variants={pathVariants} id="XMLID_225_" d="M217.688,171.344h-120c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15
			C232.688,178.06,225.972,171.344,217.688,171.344z"/>
                              </g>
                              <g id="XMLID_226_">
                                 <motion.path variants={pathVariants} id="XMLID_227_" d="M48.785,104.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
			c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
			c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
			c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
			c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5
			c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688
			C53.958,106.797,51.61,104.818,48.785,104.408z"/>
                              </g>
                              <g id="XMLID_228_">
                                 <motion.path variants={pathVariants} id="XMLID_229_" d="M48.785,34.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
			c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
			c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
			c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
			c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142,0,7.499-3.358,7.499-7.5c0-0.629-0.077-1.241-0.223-1.825
			l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688C53.958,36.797,51.61,34.818,48.785,34.408z"/>
                              </g>
                              <g id="XMLID_230_">
                                 <motion.path variants={pathVariants} id="XMLID_231_" d="M48.785,174.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
			c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
			c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
			c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
			c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5
			c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688
			C53.958,176.797,51.61,174.818,48.785,174.408z"/>
                              </g>
                           </g>
                        </motion.svg>
                     </Link>
                     <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                     <h3 className="text-lg font-semibold text-whitedark:text-white">Skills</h3>

                  </div>
               </li>
               <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center cursor-pointer">
                     <Link to="/projects" className="z-10 flex items-center cursor-pointer justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <motion.svg variants={svgVariants}
                           initial="hidden"
                           animate="visible" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/motion.svg" mirror-in-rtl="true">
                           <motion.path variants={pathVariants} fill="#51256f" d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z" />
                           <motion.path variants={pathVariants} fill="#51256f" d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z" />
                           <motion.path variants={pathVariants} fill="#494c4e" d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z" />
                        </motion.svg>
                     </Link>
                     <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                     <h3 className="text-lg font-semibold text-whitedark:text-white">Projects</h3>

                  </div>
               </li>
               <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center cursor-pointer">
                     <Link to="/contact" className="z-10 flex items-center cursor-pointer justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <motion.svg variants={svgVariants}
                           initial="hidden"
                           animate="visible" fill="#51256f" height="20px" width="20px" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/motion.svg" x="0px"
                           y="0px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" >
                           <g id="Contact-Us-Filled">
                              <motion.path variants={pathVariants} d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z" />
                           </g>
                        </motion.svg>
                     </Link >

                  </div>
                  <div className="mt-3 sm:pr-8">
                     <h3 className="text-lg font-semibold text-white dark:text-white">Contact</h3>

                  </div>
               </li>
            </ol>

         </motion.div>
      </div>
   )
}

export default SideBar