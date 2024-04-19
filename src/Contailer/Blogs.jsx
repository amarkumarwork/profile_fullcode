import React from "react";

function Blogs() {
  return (
    <div>
      <div>
        <div className=" text-center px-10 mt-24">
          <h1 className="text-5xl py-10 text-gradient font-bold">
            Recent Blogs
          </h1>
          <p className=" text-lg font-semibold w-[50%]  m-auto ">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </div>
      <div className=" flex gap-10 justify-center py-16">
        {/* 1 */}

        <div className="group image h-[350px] rounded-xl w-96 justify-center items-center">
          <button className="text-white bg-blue-800 px-3 py-1 m-5 rounded-2xl">
            TUTORIAL
          </button>
          <div className="bg-white group-hover:bg-violet-600 group-hover:text-white ease-in-out duration-300 delay-100 w-[350px] rounded-lg justify-center items-center px-5 py-5 m-auto mt-40 cursor-pointer ">
            <div className="flex font-semibold items-center gap-2">
              <img src="/src/Assects/images/clock.png" className="w-5" alt="" />
              <p>Date</p>
              <div className="flex font-semibold items-center py-1 gap-2">
                <img
                  src="/src/Assects/images/comments.png"
                  alt=""
                  className="w-5"
                />
                <p>comment</p>
              </div>
            </div>
            <div className="text-xl font-bold">
              <p>TOP 10 Ui Ux Designers</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="group image1 h-[350px] rounded-xl w-96 justify-center items-center">
          <button className="text-white bg-blue-800 px-3 py-1 m-5 rounded-2xl">
            TUTORIAL
          </button>
          <div className="bg-white group-hover:bg-violet-600 group-hover:text-white ease-in-out duration-300 delay-100 w-[350px] rounded-lg justify-center items-center px-5 py-5 m-auto mt-40 cursor-pointer ">
            <div className="flex font-semibold items-center gap-2">
              <img src="/src/Assects/images/clock.png" className="w-5" alt="" />
              <p>Date</p>
              <div className="flex font-semibold items-center py-1 gap-2">
                <img
                  src="/src/Assects/images/comments.png"
                  alt=""
                  className="w-5"
                />
                <p>comment</p>
              </div>
            </div>
            <div className="text-xl font-bold">
              <p>TOP 10 Ui Ux Designers</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className=" group image2 h-[350px] rounded-xl w-96 justify-center items-center">
          <button className="text-white bg-blue-800 px-3 py-1 m-5 rounded-2xl">
            TUTORIAL
          </button>
          <div className="bg-white group-hover:bg-violet-600 group-hover:text-white ease-in-out duration-300 delay-100 w-[350px] rounded-lg justify-center items-center px-5 py-5 m-auto mt-40 cursor-pointer ">
            <div className="flex font-semibold items-center gap-2">
              <img src="/src/Assects/images/clock.png" className="w-5" alt="" />
              <p>Date</p>
              <div className="flex font-semibold items-center py-1 gap-2">
                <img
                  src="/src/Assects/images/comments.png"
                  alt=""
                  className="w-5"
                />
                <p>comment</p>
              </div>
            </div>
            <div className="text-xl font-bold">
              <p>TOP 10 Ui Ux Designers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
