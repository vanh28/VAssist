import { MUINavBar } from '../components/MUINavBar'
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {NewsContextProvider } from "../NewsContext";
import EducationVideos from "../components/EducationVideos";
import Container from '@mui/material/Container';
import './News.css'
import SpeechReg from '../components/SpeechReg';
import { NavBarNews } from '../components/NavBarNews';
import EducationAudio from '../assets/mp3/Education.mp3';

function Education() {
  const handleAudio = () => { 
    const audio = new Audio(EducationAudio);
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
    
    <Container maxWidth="full" maxHeight="full" style={{backgroundColor: "#f6f6f6"}}>
    <div className='News'>
      <EducationVideos />
    </div>
    </Container>
    </>

  )
}

export default Education
