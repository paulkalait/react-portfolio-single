import React from 'react'
import {
    FaGithub,
    FaLink,
   
  } from "react-icons/fa";
  import evalueat from '../../assets/evalueatsc.png'
  import wearshare from "../../assets/wearshare.png"
import weatherdash from "../../assets/weatherdash.png"
import finnApp from '../../assets/finn-app.png'

const Work = () => {
  return (
    <div name="work" className="w-full h-screen bg-slate-200 md:text-black">
    <div  data-aos="fade-up" className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className='pb-8'>
        <p className="text-4xl font-bold inline border-b-4 text-black border-[#80ed99]">Work</p>
        <p className="py-8">Check out some of my recent projects</p>
      </div>

{/* Grid Container right bellow */}
      <div 
      className="grid sm:grid-cols-2 gap-6">
        <div style={{backgroundImage: `url(${evalueat})`}} className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div ">
        {/* Hover Effects */}
          <div className="opacity-0 group hover:opacity-100 py-9 px-9">
            <span className='text-2xl font-bold text-white tracking-wider work-title'>
            </span>
            <div className="pt-8 text-center">
              <a href="https://rocky-escarpment-91263.herokuapp.com/">
                <button className="text-center rounded-lg px-4 py-3 bg-black text-white font-bold text-lg work-buttons"><FaLink/></button>
              </a>
              <a href="https://github.com/paulkalait/evalueat-seperate">
                <button className="text-center rounded-lg px-4 py-3 mx-5 bg-black text-white font-bold text-lg"><FaGithub/></button>
              </a>
            </div>
          </div>
        </div> <div style={{backgroundImage: `url(${wearshare})`}} className=" shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
        {/* Hover Effects */}
          <div className="opacity-0 group hover:opacity-100 py-9 px-9">
            <span className='text-2xl font-bold text-white tracking-wider work-title'>
            </span>
            <div className="pt-8 text-center">
              <a href="https://wear-share.herokuapp.com/">
                <button className="text-center rounded-lg px-4 py-3 bg-black text-white font-bold text-lg"><FaLink/></button>
              </a>
              <a href=" https://github.com/barkleylikecharles/evalueat">
                <button className="text-center rounded-lg px-4 py-3 mx-5 bg-black text-white font-bold text-lg"><FaGithub/></button>
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${weatherdash})`}} className=" shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
        {/* Hover Effects */}
          <div className="opacity-0 group hover:opacity-100 py-9 px-9">
            <span className='text-2xl font-bold text-white tracking-wider work-title'>
            </span>
            <div className="pt-8 text-center">
              <a href="https://paulkalait.github.io/weather-dashboard/   ">
                <button className="text-center rounded-lg px-4 py-3 bg-black text-white font-bold text-lg"><FaLink /></button>
              </a>
              <a href=" https://github.com/paulkalait/weather-dashboard  ">
                <button className="text-center rounded-lg px-4 py-3 mx-5 bg-black text-white font-bold text-lg"><FaGithub/></button>
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
                <button className="text-center rounded-lg px-4 py-3 bg-black text-white font-bold text-lg"><FaLink/></button>
              </a>
              <a href="https://github.com/paulkalait/finn-app">
                <button className="text-center rounded-lg px-4 py-3 mx-5 bg-black text-white font-bold text-lg"><FaGithub/></button>
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