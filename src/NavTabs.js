import React, { useState} from "react";
import LOGO from '../src/assets/logo.png'
import { FaBars, FaTimes} from "react-icons/fa";

const NavTabs = ({ currentPage, handlePageChange }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = () => {
      let mobileMenuEl = document.getElementsByClassName('mobileNavMenu')
      if(!mobileNav){
       
        mobileMenuEl[0].style.display = 'block'
        //allows transition to show after block 
        setTimeout(() => {
            mobileMenuEl[0].style.right = "0"
        }, 100)
      }else{
          //makes it close
        mobileMenuEl[0].style.right = "-600px"
        
          setTimeout(() => {
            mobileMenuEl[0].style.display = "none"
        }, 200)
      }
    
    setMobileNav(!mobileNav)
};



  return (
    <div className="w-full h-20 flex justify-end nav items-center px-4 drop-shadow-md bg-white bg-sh navBar text-lg z-50">
    <div className=" absolute left-5 logo">
<a href="home"  onClick={() => handlePageChange("Home")}>
<img src={LOGO} style={{width:'65px'}}/></a>
</div>
    <div   className="hidden md:flex"> 

      <div className="mr-5 ">
        <button
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === 'Home' ? 'nav-link active' : 'nav-link'
          }
        >Home</button>
        
      </div>

      <div className="mr-5">
        <button onClick={() => handlePageChange("About")}
        className={
            currentPage === 'About' ? 'nav-link active' : 'nav-link'
          }
        >About</button>
        
      </div>

      <div className="mr-5">
        <button onClick={() => handlePageChange("Work")}
        className={
            currentPage === 'Work' ? 'nav-link active' : 'nav-link'
          }
        > Work</button>
       
      </div>

      <div className="mr-5">
        <button  onClick={() => handlePageChange("Skills")}
        className={
            currentPage === 'Skills' ? 'nav-link active' : 'nav-link'
          }
        >Skills</button>
      
      </div>

      <div className="mr-5">
        <button onClick={() => handlePageChange("Contact")}
        className={
            currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
          }
        >  Contact</button>
      </div>
     
      </div>
      <div onClick={handleClick}>
      {!mobileNav ? <FaBars className="text-black hover:text-2xlg duration-300 md:hidden"/> : <FaTimes  className="md:hidden"/>}
      </div>

      <div className="mobileNavMenu shadow-xlg ">
      <ul className="flex flex-col justify-center items-center  text-center">
      <li className="py-6 text-4xl">
        <a onClick={() => handlePageChange("Home")} to="home"
        className={
            currentPage === 'Home' ? 'nav-link active' : 'nav-link'
          } >
          Home
        </a>
      </li>
      <li className="py-6 text-4xl">
        
        <a onClick={() => handlePageChange("About")} to="home"
        className={
            currentPage === 'About' ? 'nav-link active' : 'nav-link'
          } >
          About
        </a>
      </li>
      <li className="py-6 text-4xl">
      
        <a onClick={() => handlePageChange("About")} to="home"
        className={
            currentPage === 'About' ? 'nav-link active' : 'nav-link'
          } >
          Work
        </a>
      </li>
      <li className="py-6 text-4xl">
        
        <a onClick={() => handlePageChange("Skills")} to="home"
        className={
            currentPage === 'Skills' ? 'nav-link active' : 'nav-link'
          } >
          Skills
        </a>
      </li>
      <li className="py-6 text-4xl">
        
        <a onClick={() => handlePageChange("Contact")} to="home"
        className={
            currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
          } >
          Contact
        </a>
      </li>
    </ul>
      </div>
      
     
    </div>
  );
};

export default NavTabs;
