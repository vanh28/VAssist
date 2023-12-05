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
import "./Article.css"
import { useState, useRef } from 'react';
  
function EducationVideo({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(video.audioUrl);
    }

    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleAudio = () => {
    let audio = new Audio(video.audioTitle); // replace 'audioUrl' with the actual property
    audio.play();
  }

  const handlePauseAudio = () => {
    // Assuming `audio` is the audio object you want to control
    if (audio) {
      audio.pause();
    }
  };
  

  
  return (
    <div className="news__card">
      <CardMedia
        sx={{ height: 235.58 }}
        image={video.urlToImage}
        title="green iguana"
      />
      <CardContent className="border-spacing-0">
        <Typography gutterBottom variant="h5" component="div">
          {video.title}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="div"
          align="right"
          className="italic"
        >
          {video.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          tabIndex={"1"}
          aria-label="play/pause"
          onClick={handlePlayAudio}
          onFocus={handleAudio}
        >
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
      </CardActions>
    </div>
  );
}

export default EducationVideo;