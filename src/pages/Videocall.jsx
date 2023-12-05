import { MUINavBar } from "../components/MUINavBar";
import Button from "@mui/material/Button";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from "@mui/material/Container";
import SpeechReg from "../components/SpeechReg";
import { VideoRoom } from "../components/VideoRomm";
import Call from "../assets/mp3/Call.mp3";
import EnterToJoin from "../assets/mp3/EnterToJoin.mp3";
import EnterToOut from "../assets/mp3/EnterToOut.mp3";
function Videocall() {
  const handleAudio = () => {
    const audio = new Audio(Call);
    audio.play();
  };
  const handleJoinAudio = () => {
    const audio = new Audio(EnterToJoin);
    audio.play();
  };
  const handleOutAudio = () => {
    const audio = new Audio(EnterToOut);
    audio.play();
  };
  useEffect(() => {
    handleAudio();
  }, []);
  const [joined, setJoined] = useState(false);
  return (
    <div className="Videocall">
      <MUINavBar />
      <SpeechReg />

      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center"
        style={{
          backgroundImage:
            "url('https://simcomsolutions.co.in/images/contents/sliders3/4.jpg')",
          opacity: 0.9,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "contain",
        }}
      >
        <div className="text-4xl font-bold opacity-100 pt-4">VConnect</div>
        <div className="text-xl mt-4">
          Kết nối cộng đồng, bắt đầu trò chuyện ngay
        </div>
      </div>

      <div className="call">
        {!joined && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 100px)",
              margin: "50px 0",
            }}
          >
            <Button
              tabIndex={1}
              style={{ backgroundColor: "#1e3a8a" }}
              variant="contained"
              onClick={() => setJoined(true)}
              onFocus = {handleJoinAudio}
            >
              Vào phòng
            </Button>
          </div>
        )}

        {joined && (
          <>
            <div
              style={{
                paddingTop: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                tabIndex={1}
                style={{ backgroundColor: "#1e3a8a" }}
                variant="contained"
                onClick={() => setJoined(false)}
                onFocus={handleOutAudio}
              >
                Rời phòng
              </Button>
            </div>
            <VideoRoom />
          </>
        )}
      </div>
    </div>
  );
}

export default Videocall;
