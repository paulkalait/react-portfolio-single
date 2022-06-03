import React from "react";

const NavTabs = ({ currentPage, handlePageChange }) => {
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[12%] flex justify-end  items-center px-4 drop-shadow-md bg-white bg-sh navBar text-lg">
      <div className="mr-5 ">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === 'Home' ? 'nav-link active' : 'nav-link'
          }
        >Home</a>
        
      </div>

      <div className="mr-5">
        <a href="#about" onClick={() => handlePageChange("About")}
        className={
            currentPage === 'About' ? 'nav-link active' : 'nav-link'
          }
        
        >About</a>
        
      </div>

      <div className="mr-5">
        <a href="#work" onClick={() => handlePageChange("Work")}
        className={
            currentPage === 'Work' ? 'nav-link active' : 'nav-link'
          }
        > Work</a>
       
      </div>

      <div className="mr-5">
        <a href="#skills" onClick={() => handlePageChange("Skills")}
        className={
            currentPage === 'Skills' ? 'nav-link active' : 'nav-link'
          }
        >Skills</a>
      
      </div>

      <div className="mr-5">
        <a href="#contact" onClick={() => handlePageChange("Contact")}
        className={
            currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
          }
        >  Contact</a>
   
      </div>
    </div>
  );
};

export default NavTabs;
