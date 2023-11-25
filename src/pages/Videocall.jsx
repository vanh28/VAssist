import { MUINavBar } from '../components/MUINavBar'

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {NewsContextProvider } from "../NewsContext";
import Newspaper from "../components/Newspaper";
import Container from '@mui/material/Container';


function Videocall() {
  return (
    <div className='Videocall'>
      <MUINavBar />
      VideoCall
    </div>
  )
}

export default Videocall