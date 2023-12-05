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
import { getVolumeFromLocalStorage } from "./Volume";

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Grid } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import "./Article.css";
import { useState, useEffect, useRef } from "react";
// import song from "../assets/mp3/song.mp3";
// import { getVolumeFromLocalStorage } from "./Volume";

  
function Article({ article }) {
  const [isPlaying, setIsPlaying] = useState(false);
    
  const [volume, setVolume] = useState(getVolumeFromLocalStorage());
  console.log(volume);

  useEffect(() => {
    setVolume(getVolumeFromLocalStorage());
  }, []);

  const setVolumeAgain = () => {
    setVolume(getVolumeFromLocalStorage());
  };
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    if (!audioRef.current) 
      audioRef.current = new Audio(article.audioUrl);

    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      setVolumeAgain();
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    
  };

  const handleAudio = () => {
    let audio = new Audio(article.audioTitle); // replace 'audioUrl' with the actual property
    audio.play();
  };

  
  return (
    <div className="news__card">
      <CardMedia
        sx={{ height: 235.58 }}
        image={article.urlToImage}
        title="green iguana"
      />
      <CardContent className="border-spacing-0">
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="div"
          align="right"
          className="italic"
        >
          Ngày đăng: {article.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
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


export default Article;