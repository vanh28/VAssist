
import { MUINavBar } from '../components/MUINavBar'

import '../App.css'
import React, { useState } from 'react';
import SpeechReg from '../components/SpeechReg';
import VolumeSetting from '../components/Volume';



function Homepage() {
  return (
    <div className='App'>
      <MUINavBar />
      <SpeechReg />
      <VolumeSetting />
      Homepage
    </div>
  )
}

export default Homepage
