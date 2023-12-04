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
import { useState } from "react";

function Article({ article }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Play the audio here
  };

  const handleAudio = () => {
    let audio = new Audio(article.audioTitle); // replace 'audioUrl' with the actual property
    audio.play();
  };

  return (
    <div className="news__card">
      <CardMedia
        sx={{ height: 200 }}
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
          Ngày đăng: 19/4/2021
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="play/pause"
          onClick={handlePlayAudio}
          onFocus={handleAudio}
        >
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        {isPlaying && (
          <audio src={article.audioUrl} autoPlay controls>
            Your browser does not support the audio element.
          </audio>
        )}
      </CardActions>
    </div>
  );
}

export default Article;
