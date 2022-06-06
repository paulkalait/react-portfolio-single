import React from 'react'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import CV from "../../assets/Paul's CV 2022.pdf"
import { motion } from 'framer-motion'



const Footer = () => {
  return (
    <div className='sm: w-full  justify-center bg-white'>
    <div className='flex justify-center flex-row items-center icons-footer'>
    <div className="my-3 mx-4  mt-5 ">
    <a
      href="https://www.linkedin.com/in/paul-kalaitzidis-393555196"
      className="linkedin"
    >
    <motion.button
    whileHover={{ scale: 1.2}}>
    <FaLinkedin />
    </motion.button>
    
    </a>
  </div>
  <div className="my-3 mx-4 mt-5">
    <a href="https://github.com/paulkalait" className="github">

    <motion.button
    whileHover={{ scale: 1.2}}>
    <FaGithub />
    </motion.button>
     
    </a>
  </div>
  <div className="my-3 mx-4  mt-5">
    <a href="mailto:kalaitzidispaul@gmail.com" className="google">
    <motion.button
    whileHover={{ scale: 1.2}}>
    <FaGoogle />
    </motion.button>
    </a>
  </div>
  <div className="my-3 mx-4 mt-5">
    <a href={CV} className="resume">
    <motion.button
    whileHover={{ scale: 1.2}}>
    <BsFillPersonLinesFill />
    </motion.button>
    </a>
  </div>

    </div></div>
  )
}

export default Footer