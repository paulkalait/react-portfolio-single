import React from 'react'
import {
    FaGithub,
    FaLink,
   
  } from "react-icons/fa";
  import playDate from '../../assets/playDate.png'
  import wearshare from "../../assets/wearshare.png"
import rentafit from "../../assets/rentafit.jpg"
import finnApp from '../../assets/finn-app.png'

const Work = () => {
  return (
    <div name="work" className="w-full bg-[#c7f9cc]  md:text-black">
    <div  data-aos="fade-up" className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className='pb-8'>
        <p className="text-4xl font-bold inline border-b-4 text-black border-[#80ed99]">Work</p>
        <p className="py-8">Check out some of my recent projects</p>
      </div>

{/* Grid Container right bellow */}
      <div 
      className="grid sm:grid-cols-2 gap-6 mb-10">
        <div style={{backgroundImage: `url(${playDate})`}} className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div ">
        {/* Hover Effects */}
          <div className="opacity-0 group hover:opacity-100 py-9 px-9">
            <span className='text-2xl font-bold text-white tracking-wider work-title'>
            </span>
            <div className="pt-8 text-center">
              <a href="https://playdate-mern-app.herokuapp.com/start">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-black font-bold text-lg work-buttons"><FaLink className='hover:text-[#80ed99]'/></button>
              </a>
              <a href="https://github.com/paulkalait/playDate">
                <button className="text-center rounded-lg px-4 py-3 mx-5 bg-white text-black font-bold text-lg"><FaGithub className='hover:text-[#80ed99]' /></button>
              </a>
            </div>
          </div>
        </div> 
        
        <div style={{backgroundImage: `url(${wearshare})`}} className=" shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
        {/* Hover Effects */}
          <div className="opacity-0 group hover:opacity-100 py-9 px-9">
            <span className='text-2xl font-bold text-white tracking-wider work-title'>
            </span>
            <div className="pt-8 text-center">
              <a href="https://wear-share.herokuapp.com/">
                <button className="text-center rounded-lg px-4 py-3 border-2 bg-white text-black font-bold text-lg"><FaLink className='hover:text-[#80ed99]'/></button>
              </a>
              <a href=" https://github.com/barkleylikecharles/evalueat">
                <button className="text-center rounded-lg px-4 py-3 mx-5 border-2 bg-white text-black font-bold text-lg"><FaGithub className='hover:text-[#80ed99]'/></button>
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${rentafit})`}} className=" shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
        {/* Hover Effects */}
          <div className="opacity-0 group hover:opacity-100 py-9 px-9">
            <span className='text-2xl font-bold text-white tracking-wider work-title'>
            </span>
            <div className="pt-8 text-center">
              <a href=" https://afternoon-forest-49656.herokuapp.com/">
                <button className="text-center rounded-lg px-4 py-3 border-2 bg-white text-black font-bold text-lg"><FaLink className='hover:text-[#80ed99]' /></button>
              </a>
              <a href="https://github.com/chris-15/Rent-A-Fit-Project3 ">
                <button className="text-center rounded-lg px-4 py-3 mx-5 border-2 bg-white text-black font-bold text-lg"><FaGithub  className='hover:text-[#80ed99]'/></button>
              </a>
            </div>
          </div>
        </div>
        
        <div style={{backgroundImage: `url(${finnApp})`}} className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
        {/* Hover Effects */}
          <div className="opacity-0 group hover:opacity-100 py-9 px-9">
            <span className='text-2xl font-bold text-white tracking-wider work-title'>
            </span>
            <div className="pt-8 text-center">
              <a href=" https://paulkalait.github.io/finn-app/">
                <button className="text-center rounded-lg px-4 py-3 border-2 bg-white text-black font-bold text-lg"><FaLink className='hover:text-[#80ed99]'/></button>
              </a>
              <a href="https://github.com/paulkalait/finn-app">
                <button className="text-center rounded-lg px-4 py-3 mx-5 border-2 bg-white text-black font-bold text-lg"><FaGithub className='hover:text-[#80ed99]'/></button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Work