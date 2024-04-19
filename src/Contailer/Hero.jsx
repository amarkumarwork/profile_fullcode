import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Services from "./Services";
import profileimage from "/src/Assects/images/myimage.png";
import axiosInstance from "../Services/apiResponce";
import { baseurl } from "../Services/baseurl";
import { showToast } from "../utils/tostify";

const Hero = () => {
  const [getdata, setGetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState("");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const sendUserDataToBackend = async () => {
      try {
        const currentTime = new Date().toISOString();
        const totalTimeSpent = calculateTotalTimeSpent();
        const userData = {
          timeenter: currentTime,
          totaltimewait: totalTimeSpent,
        };

        const response = await axiosInstance.post(
          `${baseurl}/api/enteruser`,
          userData
        );

        console.log(response);
        if (response.status === 200) {
          console.log("User data sent successfully");
        } else {
          console.error("Failed to send user data");
        }
      } catch (error) {
        console.error("Error sending user data:", error);
      }
    };

    sendUserDataToBackend();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getalldata = await axiosInstance.get(`${baseurl}/api/getall`);
        setGetData(getalldata);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          console.error("Response Error:", error.response.data);
          showToast("Error fetching data: " + error.response.data, "error");
        } else if (error.request) {
          console.error("Request Error:", error.request);
          setServerStatus("Server is not responding. Please wait...");
        } else {
          console.error("Request Setup Error:", error.message);
          showToast("Error setting up request: " + error.message, "error");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("getdata = ", getdata);

  let download = () => {
    setDownloading(true);
  
    axiosInstance
      .post(`${baseurl}/api/downloadcv`)
      .then((response) => {
        if (response.status === 200) {
          showToast("Download started", "success");
        } else {
          showToast("Error starting download", "error");
        }
      })
      .catch((error) => {
        console.error("Error starting download:", error);
        showToast("Error starting download", "error");
      })
      .finally(() => {
        setDownloading(false);
      });
  };
  

  return (
    <div>
      <div></div>
      <div className="flex m-auto w-fit py-5">
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : serverStatus ? (
            <div>{serverStatus}</div>
          ) : (
            <div className=" lg:w-[830px] mt-10  flex flex-col gap-5">
              <h4 className="text-4xl font-bold text-blue-900 text-gradient">
                I am Amar
              </h4>
              <h1 className="text-7xl font-bold w-[780px] text-violet-800 text-gradient">
                Full Stack Developer + UX Designer
              </h1>
              <p className="w-[50%] text-lg text-gradient">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </p>
              <div className="flex flex-row gap-5 items-center">
                <button
                  onClick={download}
                  disabled={downloading} 
                  className="w-56 h-12 rounded-full border-2 border-blue-500 from-blue-500 to-blue-700 relative">
                  {!downloading ? (
                    <span>Download CV</span>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="loader ease-linear rounded-full border-4 border-t-4 border-violet-900 w-8 h-8" style={{ animation: 'spin 1s linear infinite' }}></div>


                    </div>
                  )}
                </button>
                ; ;
                <div className="flex flex-row gap-4">
                  <SocialIcon url="www.twitter.com" />
                  <SocialIcon url="www.web.com" />
                  <SocialIcon url="www.linkedin.com" />
                  <SocialIcon url="www.github.com" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-black mt-10 px-5 py-10 rounded-lg rotate-div ">
          <img src={profileimage} alt="image" />
        </div>
      </div>
      {/* section - 2 - experience */}
      <div>
        <div className="flex justify-center items-center flex-row gap-40 py-32 text-gradient">
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            {getdata && getdata.length > 0 && (
              <h1 className="text-7xl font-bold ">{getdata[0].Experience}</h1>
            )}
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            {getdata && getdata.length > 0 && (
              <h1 className="text-7xl font-bold ">{getdata[0].Project}</h1>
            )}
            <p className="w-24 text-lg mx-2 font-bold ">Project Completed</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            {getdata && getdata.length > 0 && (
              <h1 className="text-7xl font-bold ">{getdata[0].Clients}</h1>
            )}
            <p className="w-24 text-lg font-bold ">Happy Clients</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
