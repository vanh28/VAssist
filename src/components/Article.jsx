import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {getVolumeFromLocalStorage} from './Volume';
import { useContext, useEffect } from 'react';
import "./Article.css"


import { useState } from 'react';
  
function Article({ article}) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(getVolumeFromLocalStorage());
  console.log(volume);

  useEffect(() => {
    setVolume(getVolumeFromLocalStorage());
  }, []);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    setVolumeAgain();
    // Play the audio here
  };
  const setVolumeAgain = () => {
    setVolume(getVolumeFromLocalStorage())
  }

  const handleAudio = () => { 
    let utterance = new SpeechSynthesisUtterance(article.title);
    utterance.lang = 'vi-VN';
    utterance.volume = volume/100;
    speechSynthesis.speak(utterance);
  }

  return (
    
    <div className="news__card">
      
      <CardMedia
        sx={{ height: 200 }}
        image={article.urlToImage}
        title="green iguana"
      />
      <p></p>
      <h2 style={{ fontSize: "1.6rem", fontFamily: "'Source Sans Pro', sans-serif", display: 'block', marginTop: '20px', marginBottom: '20px', fontWeight: 'bold' }}>{article.title} </h2>
      <p></p>
      <p>{article.description}</p>
      <IconButton aria-label="play/pause" onClick={handlePlayAudio} onFocus={handleAudio}>
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
      {isPlaying && (
        <audio src={article.audioUrl} autoPlay controls>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}


export default Article;
