import { MUINavBar } from '../components/MUINavBar'
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from '@mui/material/Container';
import './News.css'
import SpeechReg from '../components/SpeechReg';
import { NavBarNews } from '../components/NavBarNews';
import VolumeSetting from '../components/Volume';
import Allbooks from '../components/Allbooks';
import BookAudio from '../assets/mp3/BookSpeak.mp3';

function Books() {
  const handleAudio = () => { 
    const audio = new Audio(BookAudio);
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
      <Allbooks />
    </div>
    </Container>
    </>

  )
}

export default Books