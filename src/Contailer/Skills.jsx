import React from "react";

const Skills = () => {
  return (
    <div>
      <div>
        <div className="text-center py-5 bg-[#F6F3FC]">
          <h1 className="text-5xl py-10 text-blue-800 font-bold">My Skills</h1>
          <p className="text-sm font-semibold w-[35%] m-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </div>
      <div className="flex bg-[#F6F3FC]">
        <div className="flex w-fit m-auto flex-row gap-24 py-10 ">
          <div className=" w-fit m-auto bg-white hover:bg-violet-800 hover:text-white px-12 py-5 rounded-3xl">
            <div className="flex flex-col ">
              <img
                src="/src/Assects/images/figma.png"
                className="w-12 mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700 hover:text-white">Figma</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12 py-5 rounded-3xl ">
            <div className="flex flex-col ">
              <img
                src="/src/Assects/images/figma.png"
                className="w-12 mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Figma</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12 py-5  rounded-3xl">
            <div className="flex flex-col ">
              <img
                src="/src/Assects/images/figma.png"
                className="w-12 mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Figma</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12 py-5 rounded-3xl ">
            <div className="flex flex-col ">
              <img
                src="/src/Assects/images/figma.png"
                className="w-12 mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Figma</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12 py-5 rounded-3xl ">
            <div className="flex flex-col ">
              <img
                src="/src/Assects/images/figma.png"
                className="w-12 mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
