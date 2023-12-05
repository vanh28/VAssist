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
import { VolumeContext } from '../components/Volume';
import NewsAudio from "../assets/mp3/News.mp3";
function News() {
  const handleAudio = () => { 
    const audio = new Audio(NewsAudio);
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
      <Newspaper />
    </div>
    </Container>
    </>

  )
}

export default News
