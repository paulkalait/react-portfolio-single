import React from "react";
import PHOTO from "../../assets/profile.jpeg";

const Home = () => {
  return (
    <div
      className="w-full h-screen
    bg-slate-200"
    >
      <div className="max-w-[1000px] mx-auto flex flex-row justify-center h-full">
        <div className="m-52">
          <img src={PHOTO} alt="profile-photo" className="w-48 h-48 profile" />
          <div className="mt-5">
            <h1 className="font-extrabold text-2xl">Hi Im Paul</h1>
            <p>Im a Web Developer</p>
            <p> Welcome to my Portfolio!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
