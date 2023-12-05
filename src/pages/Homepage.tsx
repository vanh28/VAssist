
import { MUINavBar } from '../components/MUINavBar'

import '../App.css'
import React, { useState } from 'react';
import SpeechReg from '../components/SpeechReg';
import { useEffect } from 'react';

function Homepage() {
  const handleAudio = () => { 
    if (!speechSynthesis.speaking) {
      let utterance = new SpeechSynthesisUtterance("This is Homepage.");
      utterance.lang = 'vi-VN';
      speechSynthesis.speak(utterance);
    }
  }

  useEffect(() => {
    handleAudio();
  }, []);
  return (
    <div className='App'>
      <MUINavBar />
      <SpeechReg />
      Homepage
    </div>
  )
}

export default Homepage
