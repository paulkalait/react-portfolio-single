import React from "react";

const NavTabs = ({ currentPage, handlePageChange }) => {
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);

  return (
    <div className=" w-full h-20 flex justify-end  items-center px-4 drop-shadow-md bg-white bg-sh navBar text-lg">
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
  );
};

export default NavTabs;
