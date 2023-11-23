
import { MUINavBar } from '../components/MUINavBar'

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from '@mui/material/Container';
import './News.css'


function News() {
  return (
    <>
    <MUINavBar />
    <Container maxWidth="full" style={{ backgroundColor: 'white' }}>
    <div className='News'>
      
      <Newspaper />
    </div>
    </Container>
    </>

  )
}

export default News
