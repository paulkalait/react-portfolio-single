import React, { useEffect} from 'react'
import HTML from "../../assets/htmlbadge.png";
import CSS from "../../assets/csslogo.png";
import JS from "../../assets/jslogo2.svg";
import MONGO from '../../assets/mongodb1.png'
import NODE from "../../assets/node.js.png";
import REACT from "../../assets/react.png";
import Aos from "aos";

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000})
        }, [])
  return (
    <div className="bg-[#c7f9cc] w-full h-screen " name="skills">
    {/* Container */}
    <div data-aos="fade-up" className="max-w-[1000px] mx-auto my-auto p-4 flex flex-col justify-center w-full h-full text-black ">
      <div >
        <p className="text-4xl font-bold inline border-b-4 border-[#80ed99]">
          Skills
        </p>
        <p className="py-8 text-2xl text-black">Technologies I have worked with...</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 ">
        <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 bg-slate-100">
          <img className="w-20 mx-auto" src={HTML} alt="html icon" />
          <p className="my-3 text-black">HTML</p>
        </div>
        <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 bg-slate-100">
          <img className="w-20 mx-auto" src={JS} alt="html icon" />
          <p className="my-3 text-black">JS</p>
        </div>
        <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 bg-slate-100">
          <img className="w-20 mx-auto" src={CSS} alt="html icon" />
          <p className="my-3 text-black">CSS</p>
        </div>
        <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 bg-slate-100">
          <img className="w-20 mx-auto" src={REACT} alt="html icon" />
          <p className="my-3 text-black">REACT</p>
        </div>
        <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 bg-slate-100">
          <img className="w-20 mx-auto" src={MONGO} alt="html icon" />
          <p className="my-3 text-black">MongoDB</p>
        </div>
        <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 bg-slate-100">
          <img className="w-20 mx-auto" src={NODE} alt="html icon" />
          <p className="my-3 text-black">Node.JS</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills