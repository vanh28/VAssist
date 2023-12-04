import { MUINavBar } from "../components/MUINavBar";

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from "@mui/material/Container";
import SpeechReg from "../components/SpeechReg";
import { VideoRoom } from "../components/VideoRomm";

function Videocall() {
  const handleAudio = () => {
    if (!speechSynthesis.speaking) {
      let utterance = new SpeechSynthesisUtterance(
        "This is a page for calling."
      );
      utterance.lang = "vi-VN";
      speechSynthesis.speak(utterance);
    }
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
