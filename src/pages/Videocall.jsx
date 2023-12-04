import { MUINavBar } from "../components/MUINavBar";

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from "@mui/material/Container";
import SpeechReg from "../components/SpeechReg";
import { VideoRoom } from "../components/VideoRomm";
import Call from "../assets/mp3/Call.mp3";
function Videocall() {
  const handleAudio = () => {
    const audio = new Audio(Call);
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
      <div className='call'>
        {!joined && (
          <button onClick={() => setJoined(true)}>
            Join Room
          </button>
        )}

        {joined && (
          <>
            <button onClick={() => setJoined(false)}>
              To Lobby
            </button>
            <VideoRoom />
          </>
        )}
      </div>
    </div>
  );
}

export default Videocall;
