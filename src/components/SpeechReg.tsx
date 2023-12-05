import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Link, redirect } from "react-router-dom";
import Redirect from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import AudioNavigate from "../assets/mp3/NavigateByVoice.mp3";
import "./SpeechReg.css"; // Import the CSS
import { Modal } from "@mui/material";

const SpeechReg = () => {

  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  const commands = [
    {
      command: ["đi đến *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['trang chủ', 'tin tức', 'thông tin','xã hội','sách nói', 'thể dục', 'học tập', 'radio'];
  const urls = {
    "trang chủ": "/home-page",
    "tin tức": "/news",
    "thông tin": "/protected",
    "xã hội": "/Videocall",
    "sách nói": "/Books",
    "thể dục" : "/Sports",
    "học tập" : "/Education",
    "radio" : "/Radio",
  };

  function removeDotAtEnd(sentence) {
    if (sentence.endsWith('.')) {
      return sentence.slice(0, -1);
    }
    return sentence;
  }

  const handleRightClick = () => {
    
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const rightClickHandler = () => {
      handleRightClick();
    };

    window.addEventListener('contextmenu', rightClickHandler);

    return () => {
      window.removeEventListener('contextmenu', rightClickHandler);
    };
  }, [clickCount]);

  useEffect(() => {
    if (clickCount === 2) {
      disableRightClick();
    }
    if (clickCount === 3) {
      setShowComponent(true);
      handleAudioOpen();
      setClickCount(0);
      disableRightClick();
    }
  }, [clickCount]);

  const handleAudioOpen = () => {
    const audio = new Audio(AudioNavigate);
    audio.play();
  };
  const disableRightClick = () => {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };
  let string = "";

  if (showComponent) {
    
    string = removeDotAtEnd(redirectUrl.toLowerCase());
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return;
    }
    if (pages.includes(string)) {
      setShouldRedirect(true);

    } else {
      
    }
  }
  const handleSaveClick = () => {
    setShowComponent(false); // Ẩn component khi nút "Save" được nhấn
  };

  return (
    <>
      {showComponent && (
        <div className="card">
          <p id="transcript">Transcript: {transcript}</p>
          <p><button onClick={() => SpeechRecognition.startListening()}> Start</button> </p>
          <button  onClick={handleSaveClick}> Close</button>
        </div>
      )}
      {shouldRedirect && navigate(urls[string])}
    </>
  );
};

export default SpeechReg;