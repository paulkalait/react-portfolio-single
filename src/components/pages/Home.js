import React from "react";
import PHOTO from "../../assets/profile.jpeg";

const Home = () => {
  return (
    <div
      className="sm: w-full h-screen
    bg-slate-200"
    >
      <div className="max-w-[1000px] mx-auto flex flex-row justify-center h-full">
        <div className="mt-52">
          <img src={PHOTO} alt="profile-photo" className=" ml-3 sm: w-56 w-56 md:w-48 h-48 profile drop-shadow" />
          <div className="mt-5">
            <h1 className="font-extrabold text-3xl">Hi Im Paul</h1>
            <div className="font-bold text-xl">
            <p>Im a Web Developer</p>
            <p> Welcome to my Portfolio!</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
