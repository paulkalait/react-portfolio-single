import React from "react";
import PHOTO from "../../assets/headshot.JPG";
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
  return (
    <div
      className="sm: w-full h-screen
      bg-[#c7f9cc] "
    >
      <div className="max-w-[2000px] mx-auto flex flex-row justify-center h-full">
        <div className="my-auto">
          <img src={PHOTO} alt="profile-photo" className="ml-3 sm: w-56 w-56 md:w-56 h-56 profile drop-shadow" />
          <div className="mt-5">
            <h1 className="font-extrabold text-4xl">Hi Im Paul</h1>
            <div className="font-bold text-xl">
            </div>
          </div>
          <div className="ml-7">
          <TypeWriterEffect
          textStyle={{
            fontFamily: 'MuseoModerno',
            color: '#3F3D56',
            fontWeight: 500,
            fontSize: '1.1em',
          }}
          startDelay={2000}
          cursorColor="#3F3D56"
          multiText={[
            "I'm a Web Developer",
            "I'm a dog lover",
            "I'm a soccer fanatic",
            
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
        />
        </div>
        </div>


        
      </div>
    
    </div>
  );
};

export default Home;
