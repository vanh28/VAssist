import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./Article.css";
import { useState, useRef } from "react";
import song from "../assets/mp3/song.mp3";
import { getVolumeFromLocalStorage } from "./Volume";
import BookAudio from "../assets/mp3/Book.mp3";

function Book({ book }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(book.audioUrl);
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
    let audio = new Audio(book.audioTitle);
    audio.play();
  };

  const handlePauseAudio = () => {
    if (audio) {
      audio.pause();
    }
  };

  return (
    <div>
      <CardActions>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <IconButton
          tabIndex={"1"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
          aria-label="play/pause"
          onClick={handlePlayAudio}
          onFocus={handleAudio}
        >
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
      </CardActions>
      <CardContent className="border-spacing-0">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "#133c8b", fontWeight: "bold" }}
        >
          {book.title}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="div"
          align="right"
          className="italic"
        >
          Ngày đăng: {book.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
      </CardContent>
    </div>
  );
}

export default Book;
