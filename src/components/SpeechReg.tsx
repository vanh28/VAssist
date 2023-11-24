import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter,Route,Link,redirect} from 'react-router-dom';
import Redirect from 'react-router-dom';
import SpeechRecognition ,{ useSpeechRecognition } from 'react-speech-recognition';


  const SpeechReg = () => {
  const navigate = useNavigate();

  const commands = [
    {
      command: ["Go To *"],
      callback: (redirectPage: string) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['home', 'news','profile'];
  const urls = {
      home:"/home-page",
      news:"/news",
      profile:"/profile",
  };

  function removeDotAtEnd(sentence) {
    if (sentence.endsWith('.')) {
      return sentence.slice(0, -1);
    }
    return sentence;
  }

  let string = removeDotAtEnd(redirectUrl.toLowerCase());
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  if (pages.includes(string)) {
    navigate(urls[string]);
  }else{
    console.log("Not a valid page");
  }
  return (
    <div>
      <p id="transcript">Transcript: {transcript}</p>
      <button onClick={() => SpeechRecognition.startListening()}> Start</button>
   
    </div>
  );
  
};

export default SpeechReg;
