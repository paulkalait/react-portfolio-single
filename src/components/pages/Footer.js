import React from 'react'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='sm: shadow-lg w-full h-16 justify-center bg-slate-300 fixed bottom-0 '>
    <div className='flex justify-center flex-row items-center'>
    <div className="my-3 mx-4  mt-20 ">
    <a
      href="https://www.linkedin.com/in/paul-kalaitzidis-393555196"
      className="linkedin"
    >
      <FaLinkedin />
    </a>
  </div>
  <div className="my-3 mx-4 mt-20">
    <a href="https://github.com/paulkalait" className="github">
      <FaGithub />
    </a>
  </div>
  <div className="my-3 mx-4  mt-20">
    <a href="mailto:kalaitzidispaul@gmail.com" className="google">
      <FaGoogle />
    </a>
  </div>
  <div className="my-3 mx-4 mt-20">
    <a className="resume">
      <BsFillPersonLinesFill />
    </a>
  </div>

    </div></div>
  )
}

export default Footer