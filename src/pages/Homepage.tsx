
import { MUINavBar } from '../components/MUINavBar'

import '../App.css'
import React, { useState } from 'react';
import SpeechReg from '../components/SpeechReg';



function Homepage() {
  return (
    <div className='App'>
      <MUINavBar />
      <SpeechReg />
      Homepage
    </div>
  )
}

export default Homepage
