import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './SpeechReg.css';

const VolumeSetting = () => {
  const [showComponentVolume, setShowComponent] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const handleLeftClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    clearTimeout(timer); // Reset timer khi có sự kiện click mới
    setTimer(setTimeout(() => setClickCount(0), 1000)); // Reset sau 2 giây nếu không có sự kiện click mới
  };

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        setIsEnterPressed(true);
      }
    },
    []
  );

  useEffect(() => {
    const leftClickHandler = () => {
      handleLeftClick();
    };

    window.addEventListener('click', leftClickHandler);
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('click', leftClickHandler);
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [clickCount, timer, handleKeyPress]);

  useEffect(() => {
    if (clickCount === 3) {
      setShowComponent(true);
      setClickCount(0);
    }
  }, [clickCount]);

  useEffect(() => {
    if (isEnterPressed && showComponentVolume) {
      handleSaveClick();
      setIsEnterPressed(false);
    }
  }, [isEnterPressed, showComponentVolume]);

  const handleSaveClick = () => {
    setShowComponent(false); // Ẩn component khi nút "Save" được nhấn
  };

  return (
    <>
      {showComponentVolume && (
        <div className="card">
          <p>Volume</p>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
    </>
  );
};

export default VolumeSetting;
