// Trong VolumeSetting.js
import React, { useState, useEffect, useCallback, useRef ,createContext} from 'react';
import './SpeechReg.css';
import song from '../assets/mp3/song.mp3';
import Article from './Article';
import VolumeSettingAudio from '../assets/mp3/SettingVolume.mp3';

export const VolumeContext = createContext(40);
const VolumeSetting = () => {

  const [showComponentVolume, setShowComponent] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem('volume');
    return savedVolume !== null ? parseInt(savedVolume, 10) : 50;
  });

  const handleLeftClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    clearTimeout(timer);
    setTimer(setTimeout(() => setClickCount(0), 500));
  };
  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
    localStorage.setItem('volume', newVolume.toString());
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
    
    
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
  }, [handleKeyPress]);

  useEffect(() => {
    if (clickCount === 3) {
      setShowComponent(true);
      handleAudioOpen();
      setClickCount(0);
    }
  }, [clickCount]);
  const handleAudioOpen = () => { 
    const audio = new Audio(VolumeSettingAudio);
    audio.play();
  }
  useEffect(() => {
    if (isEnterPressed && showComponentVolume) {
      handleSaveClick();
      setIsEnterPressed(false);
    }
  }, [isEnterPressed, showComponentVolume]);

  const handleSaveClick = () => {
    setShowComponent(false);
    window.location.reload();
  };

  const audioRef = useRef(null);

  useEffect(() => {
    if (showComponentVolume && audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [showComponentVolume, volume]);
  // {console.log(volume)}
  return (
    
      <VolumeContext.Provider value={volume}>
        {showComponentVolume && (
          <div className="card">
            <button onClick={handleSaveClick}>Save</button>
            <input type="range" min={0} max={100} value={volume} onChange={handleVolumeChange} />
            <p>Volume: {volume}</p>
            <audio autoPlay ref={audioRef}>
              <source src={song} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </VolumeContext.Provider>
    
  );
  
};
export const getVolumeFromLocalStorage = () => {
  const savedVolume = localStorage.getItem('volume');
  return savedVolume !== null ? parseInt(savedVolume, 10) : 50; // Default volume if not found in local storage
};
export default VolumeSetting;

