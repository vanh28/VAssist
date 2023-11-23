import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';

function Article({ article }) {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={article.urlToImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Merriweather', fontWeight: '1000' }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: 'center' }}>
          <Button size="medium">Audio Play</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Article;