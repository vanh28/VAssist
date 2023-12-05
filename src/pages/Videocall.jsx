import { MUINavBar } from "../components/MUINavBar";
import Button from '@mui/material/Button';
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
          <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 100px)', margin: '50px 0' }}>
          <Button tabIndex={1} style={{backgroundColor: '#1e3a8a'}} variant="contained" onClick={() => setJoined(true)}>
            Join Room
          </Button>
        </div>
        )}

        {joined && (
          <>
            <div style={{ paddingTop: 20 ,display: 'flex', justifyContent: 'center' }}>
            <Button tabIndex={1} style={{backgroundColor: '#1e3a8a'}} variant="contained" onClick={() => setJoined(false)}>
              To Lobby
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
