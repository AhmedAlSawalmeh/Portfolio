import React, { useEffect } from 'react'
import { color, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import "./Skills.css"
import { Link } from 'react-router-dom';
const HTML5 = require("../../Images/HTML5.png")
const CSS3 = require("../../Images/CSS3.png")
const JavaScript = require("../../Images/JS.png")
const REACT = require("../../Images/REACT.png")
const Redux = require("../../Images/redux.png")
const NodeJS = require("../../Images/nodejs.png")
const MongoDB = require("../../Images/mongoDB.png")
const FireBase = require("../../Images/firebase.png")
const GIT = require("../../Images/git.png")
const Tailwind = require("../../Images/tailwind.png")
const PostgreSQ = require("../../Images/postgreSQL.png")

const frontEnd = [
    {
        name: "HTML5", img: HTML5
    },
    {
        name: "CSS3", img: CSS3
    },
    {
        name: "JavaScript", img: JavaScript
    },
    {
        name: "REACT", img: REACT
    },
    { name: "Redux", img: Redux },
    { name: "Tailwind ", img: Tailwind }
]
const backEnd = [
    {
        name: "NodeJS", img: NodeJS
    },
    {
        name: "MongoDB", img: MongoDB
    },
    { name: "PostgreSQL", img: PostgreSQ },
    { name: "FireBase", img: FireBase },
    {
        name: "GIT", img: GIT
    },
]
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

const Skills = () => {
    useEffect(() => {
        const introElement = document.querySelector('.intro');
        introElement.classList.add('go');

    }, []);
    




    return (
        <motion.div
            className='flex-col flex items-center justify-center   mt-10'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <svg className="intro flex justify-start items-start " viewBox="0 0 200 100">

                <foreignObject x="5" y="3" width="200" height="100">
                    <h3 className='headerStack'>Front End:</h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className='flex justify-around items-center'>

                        {frontEnd.map((elem) => {
                            return <div className='flex-col justify-start items-center text-center' key={elem.name}>
                                <motion.img variants={imageVariants}
                                    whileHover="hover" className='logoImg' src={elem.img} />
                                <motion.p>{elem.name}</motion.p>
                            </div>
                        })}
                    </motion.div>
                    <h3 className='headerStack'>Back End:</h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className='flex justify-around items-center'>
                        {backEnd.map((elem) => {
                            return <div className='flex-col justify-start items-center text-center' key={elem.name}>
                                <motion.img variants={imageVariants}
                                    whileHover="hover" className='logoImg' src={elem.img} />
                                <motion.p>{elem.name}</motion.p>
                            </div>
                        })}
                    </motion.div>
                </foreignObject>


            </svg>
        </motion.div>
    )
}

export default Skills