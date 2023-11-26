import { MUINavBar } from '../components/MUINavBar'
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from '@mui/material/Container';
import './News.css'
import SpeechReg from '../components/SpeechReg';
import VolumeSetting from '../components/Volume';


function News() {
  return (
    <>
    <MUINavBar />
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
