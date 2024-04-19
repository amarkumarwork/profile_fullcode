import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#2A1454] h- ">
        <div className=" w-fit m-auto px-5 py-5">
          <img src="/src/Assects/images/newlogo.png" alt="" />
        </div>
        <div>
            <ul className="flex text-white gap-10 text-lg  text-center justify-center">
                <li>Services</li>
                <li>Works</li>
                <li>Resume</li>
                <li>Skills</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="text-center flex flex-col px-4 py-4 text-lg text-blue-400 font-semibold">
            <h1>© 2024 All rights reserved by ThemeJunction</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
