import React from "react";

const NavTabs = ({ currentPage, handlePageChange}) => {
    // const [nav, setNav] = useState(false);
    // const handleClick = () => setNav(!nav);
    
  return (
  
    <div className="fixed w-full h-[12%] flex justify-end  items-center px-4 bg-black text-white navBar z-50 text-lg">

<div className="mr-5 ">
<a href="#home"
onClick={() => handlePageChange('Home')}>
</a>
Home
</div>

<div className="mr-5">
<a href="#about"
onClick={() => handlePageChange('About')}>
</a>
About
</div>

<div className="mr-5">
<a href="#work"
onClick={() => handlePageChange('Work')}>
</a>
Work
</div>

<div className="mr-5">
<a href="#skills"
onClick={() => handlePageChange('Skills')}>
</a>
Skills
</div>

<div className="mr-5">
<a href="#contact"
onClick={() => handlePageChange('Contact')}>
</a>
Contact
</div>



    </div>
  )
}

export default NavTabs