import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Link, redirect } from "react-router-dom";
import Redirect from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import AudioNavigate from "../assets/mp3/NavigateByVoice.mp3";
import EnterToSpeech from "../assets/mp3/EnterToSpeech.mp3";
import EnterToClose from "../assets/mp3/EnterToClose.mp3";
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
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["trang chủ", "thư viện nói", "tin tức", "sách nói", "học tập", "gọi", "nghe nhạc"];
  const urls = {
    "trang chủ": "/home-page",
    "thư viện nói": "/news",
    "tin tức": "/news",
    "sách nói": "/Books",
    "thông tin": "/protected",
    "học tập": "/Education",
    "gọi": "/Videocall",
    "nghe nhạc": "/Radio",
  };

  function removeDotAtEnd(sentence) {
    if (sentence.endsWith(".")) {
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

    window.addEventListener("contextmenu", rightClickHandler);

    return () => {
      window.removeEventListener("contextmenu", rightClickHandler);
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
  const handleAudioClose = () => {
    const audio = new Audio(EnterToClose);
    audio.play();
  };
  const handleStartAudio = () => {
    const audio = new Audio(EnterToSpeech);
    audio.play();
  };
  const disableRightClick = () => {
    window.addEventListener("contextmenu", (e) => {
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
      <Modal
        open={showComponent}
        onClose={() => setShowComponent(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="card">
          <div className="text-center my-4">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
              VSpeak
            </div>
          </div>
          <p id="transcript">Nội dung: {transcript}</p>
          <p>
            <button
              onClick={() => SpeechRecognition.startListening()}
              onFocus={handleStartAudio}
            >
              {" "}
              Bắt đầu
            </button>{" "}
          </p>
          <button onClick={handleSaveClick} onFocus={handleAudioClose}>
            {" "}
            Đóng
          </button>
        </div>
      </Modal>
      {shouldRedirect && navigate(urls[string])}
    </>
  );
};

export default SpeechReg;
