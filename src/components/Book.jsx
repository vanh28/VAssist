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
import song from '../assets/song.mp3';
// function Article({ article }) {
//   return (
//     <Grid item xs={12} sm={12} md={12}>
//       <Card>
//         <CardMedia
//           sx={{ height: 140 }}
//           image={article.urlToImage}
//           title="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Merriweather', fontWeight: '1000' }}>
//             {article.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {article.description}
//           </Typography>
//         </CardContent>
//         <CardActions sx={{ textAlign: 'center' }}>
//           <Button size="medium">Audio Play</Button>
//         </CardActions>
//       </Card>
//     </Grid>
//   );
// }

import { useState, useRef } from 'react';
  
function Book({ book }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(song);
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
    let audio = new Audio(book.audioTitle); // replace 'audioUrl' with the actual property
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
        image={book.urlToImage}
        title="green iguana"
      />
      <p></p>
      <h2 style={{ fontSize: "1.6rem", fontFamily: "'Source Sans Pro', sans-serif", display: 'block', marginTop: '20px', marginBottom: '20px', fontWeight: 'bold' }}>{book.title} </h2>
      <p></p>
      <p>{book.description}</p>
      <IconButton aria-label="play/pause" onClick={handlePlayAudio} onFocus={handleAudio}>
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
    </div>
  );
}

{/* <a href="/article/<%- article.id %>" class="news__card">
                    <img src="<%- article.thumbnail_url %>" alt="<%- article.title.rendered %>">
                    <h2><%- article.title.rendered %></h2>
                    <p><%- article.excerpt.rendered %></p>
                </a> */}
export default Book;