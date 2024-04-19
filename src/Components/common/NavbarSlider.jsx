import React from "react";

const NavbarSlider = () => {
  return (
    <div>
      <div>
        <div className="justify-between items-center flex bg-[#F6F3FC]">
          <div className=" flex justify-center items-center flex-row gap-5 m-4 mx-28">
            <img src="/src/Assects/images/1.png" className="w-16" alt="" />
            <h1>Amarkumarprajapati@gmail.com</h1>
          </div>
          <div className=" flex flex-row gap-5 justify-center items-center mx-24">
            <li className="text-lg">Services</li>
            <li className="text-lg">Works</li>
            <li className="text-lg">Resume</li>
            <li className="text-lg">Skills</li>
            <li className="text-lg">Testimonials</li>
            <li className="text-lg">Contact</li>
            <button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 px-10 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSlider;
