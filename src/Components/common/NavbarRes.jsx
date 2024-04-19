import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavbarRes = () => {
  const [activeSection, setActiveSection] = useState("Services");

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    console.log("Active Section:", sectionName);
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

 let navigate = useNavigate()

  return (
    <div>
      <div>
        <div className="justify-between items-center flex px-10 py-10 ">
          <div className=" flex justify-center items-center flex-row gap-5  mx-28 font-semibold">
            <img
              onClick={() => {
                navigate("/");
              }}
              src="/src/Assects/images/newlogo.png"
              className="w-16 cursor-pointer"
              alt=""
            />
            <h1>Amarkumarprajapati@gmail.com</h1>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center mx-16">
            <ul className="flex flex-row gap-10 font-semibold  cursor-pointer">
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none mx-16 ${
                  activeSection === "Home"
                    ? "border-b-2 border-blue-500  text-blue-900"
                    : ""
                }`}
                onClick={() => {
                  navigate("/");
                }}>
                Home
              </motion.li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 w-[150px] px-10 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarRes;
