import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MUINavBar } from "../components/MUINavBar";
import SpeechReg from "../components/SpeechReg";
import VolumeSetting from "../components/Volume";
import LoginSuccess from "../assets/mp3/LoginSuccess.mp3";
import EnterToLogout from "../assets/mp3/EnterToLogout.mp3";
function Protected() {
  const handleAudio = () => { 
    const audio = new Audio(LoginSuccess);
    audio.play();
  }

  useEffect(() => {
    handleAudio();
  }, []);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  function navigateToHomepage(e) {
    e.preventDefault()
    navigate("/home-page")
  }

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    }

    const { account } = JSON.parse(localStorage.getItem("faceAuth"));
    setAccount(account);
  }, []);

  if (!account) {
    return null;
  }
  const handleAudioLogout = () => { 
    const audio = new Audio(EnterToLogout);
    audio.play();
  }
  return (
    <div>
    <MUINavBar />
    <SpeechReg />
    <VolumeSetting />
    <div className="bg-white pt-40 md:pt-60">
      
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-12">
          Bạn đã đăng nhập thành công!
        </h2>
        <div className="text-center mb-24">
          <img
            className="mx-auto mb-8 object-cover h-48 w-48 rounded-full"
            src={
              account?.type === "CUSTOM"
                ? account.picture
                : `/temp-accounts/${account.picture}`
            }
            alt={account.fullName}
          />
          <h1
            className="block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-black"
            style={{
              lineHeight: "1.5",
            }}
          >
            {account?.fullName}
          </h1>
          <button className="flex gap-2 mt-12 w-fit mx-auto cursor-pointer z-10 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-900" onClick={navigateToHomepage}><span className="text-white">Homepage</span></button>
          <div
            onClick={() => {
              localStorage.removeItem("faceAuth");
              //navigate("/");
            }}
            className="flex gap-2 mt-12 w-fit mx-auto cursor-pointer z-10 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-900"
          >
            <button className="text-white" onFocus={handleAudioLogout}>Log  Out</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Protected;
