import { MUINavBar } from '../components/MUINavBar'

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from '@mui/material/Container';



function Videocall() {
  const handleAudio = () => { 
    if (!speechSynthesis.speaking) {
      let utterance = new SpeechSynthesisUtterance("This is a page for calling.");
      utterance.lang = 'vi-VN';
      speechSynthesis.speak(utterance);
    }
  }

  useEffect(() => {
    handleAudio();
  }, []);
  return (
    <div className='Videocall'>
      <MUINavBar />
      <SpeechReg />
      VideoCall
    </div>
  )
}

export default Videocall