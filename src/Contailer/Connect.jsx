import React from "react";

const Connect = () => {
  return (
    <div>
      <div className="bg-[#F6F3FC]  ">
        <div className="flex flex-row gap-36  w-fit m-auto">
          <div className=" bg-white rounded-2xl m-24 w-[40%]  ">
            <div className="px-10 py-8 flex flex-col gap-3 ">
              <h1 className="text-5xl font-bold">Let’s work together!</h1>
              <p className="text-lg  ">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
            </div>
            <div className="px-10 py-2 flex flex-col gap-5 w-full ">
              <div className="flex gap-5 w-full  ">
                <input
                  type="text"
                  name=""
                  placeholder="First name"
                  id=""
                  className="w-96 py-3 border-2 rounded-lg"
                />
                <input
                  type="text"
                  name=""
                  placeholder="First name"
                  id=""
                  className="w-96 py-3 border-2"
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  name=""
                  placeholder="First name"
                  id=""
                  className="w-96 py-3 border-2"
                />
                <input
                  type="text"
                  name=""
                  placeholder="First name"
                  id=""
                  className="w-96 py-3 border-2"
                />
              </div>
              <select name="" id="" className=" border-2 py-3">
                <option value="">2</option>
                <option value="">3</option>
              </select>
              <input
                type="text"
                name=""
                id=""
                placeholder="hjn"
                className="py-3 border-2"
                rows="4"
                cols="50"
              />
              <input
                type="submit"
                name=""
                id=""
                className="bg-blue-500 w-fit px-10 py-5 rounded-lg text-white"
              />
            </div>
            
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex gap-5 items-center w-[100%]">
              <img
                src="/src/Assects/images/phone-call.png"
                alt="image"
                className="w-12"
              />
              <div className="text-2xl font-semibold">
                <p>Phone</p>
                <p>+91-8908013842</p>
              </div>
            </div>
            <div className="flex gap-5 items-center  w-[100%]">
              <img
                src="/src/Assects/images/mail.png"
                alt="image"
                className="w-12"
              />
              <div className="font-semibold">
                <p>Email</p>
                <p className="text-2xl">amarkumarprajapati@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5 items-center w-[100%]">
              <img
                src="/src/Assects/images/placeholder.png"
                alt="image"
                className="w-12"
              />
              <div className="text-2xl font-semibold">
                <p>Address</p>
                <p>+01 123 654 8096</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Connect;
