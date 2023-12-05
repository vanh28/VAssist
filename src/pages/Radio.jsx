import { MUINavBar } from '../components/MUINavBar'
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {NewsContextProvider } from "../NewsContext";
import RadioVideos from "../components/RadioVideos";
import Container from '@mui/material/Container';
import './News.css'
import SpeechReg from '../components/SpeechReg';
import { NavBarNews } from '../components/NavBarNews';
import RadioAudio from '../assets/mp3/Radio.mp3';
import VolumeSetting from '../components/Volume';

function Radio() {
  const handleAudio = () => { 
    const audio = new Audio(RadioAudio);
    audio.play();
  }

  useEffect(() => {
    handleAudio();
  }, []);
  return (
    <>
    <MUINavBar />
    <NavBarNews />
    <SpeechReg />
    <VolumeSetting />
    
    <Container maxWidth="full" maxHeight="full" style={{backgroundColor: "#f6f6f6"}}>
    <div className='News'>
      <RadioVideos />
    </div>
    </Container>
    </>

  )
}

export default Radio
