import { MUINavBar } from '../components/MUINavBar'

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Container from '@mui/material/Container';
import SpeechReg from '../components/SpeechReg';

function Music() {
  const handleAudio = () => { 
    if (!speechSynthesis.speaking) {
      let utterance = new SpeechSynthesisUtterance("This is a page for listening music.");
      utterance.lang = 'vi-VN';
      speechSynthesis.speak(utterance);
    }
  }

  useEffect(() => {
    handleAudio();
  }, []);
  return (
    <div className='Music'>
      <MUINavBar />
      <SpeechReg />
      Music
    </div>
  )
}

export default Music