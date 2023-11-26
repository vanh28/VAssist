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

import { useState } from 'react';
  
function Article({ article }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Play the audio here
  };

  const handleAudio = () => { 
    let utterance = new SpeechSynthesisUtterance(article.title);
    utterance.lang = 'vi-VN';
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="news__card">
      <CardMedia
        sx={{ height: 235.58 }}
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

{/* <a href="/article/<%- article.id %>" class="news__card">
                    <img src="<%- article.thumbnail_url %>" alt="<%- article.title.rendered %>">
                    <h2><%- article.title.rendered %></h2>
                    <p><%- article.excerpt.rendered %></p>
                </a> */}
export default Article;