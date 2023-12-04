import { MUINavBar } from "../components/MUINavBar";

import "../App.css";
import React, { useState } from "react";
import SpeechReg from "../components/SpeechReg";
import { useEffect } from "react";
import VolumeSetting from "../components/Volume";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import HomePage from "../assets/mp3/HomePage.mp3";
function Homepage() {
  const handleAudio = () => {
    const audio = new Audio(HomePage);
    audio.play();
  };

  useEffect(() => {
    handleAudio();
  }, []);
  return (
    <div className="App">
      <MUINavBar />
      <SpeechReg />
      <VolumeSetting />
      <Container>
        <Grid container spacing={3} className="py-5">
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://media.dolenglish.vn/PUBLIC/MEDIA/78023dfb-3555-443f-88a1-f723a00c469c.jpg"
                title="news"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tin Tức
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Audio tin tức giúp người dùng được nghe thông tin thời sự một
                  cách dễ dàng và cập nhật mới nhất
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Tìm hiểu thêm</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://i.ytimg.com/vi/_qzqYmNULRE/maxresdefault.jpg"
                title="news"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Âm nhạc
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Audio âm nhạc được chọn lọc đa dạng thể loại giúp người dùng
                  có thể thư giãn và giải trí
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Tìm hiểu thêm</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://cdn.tuoitrethudo.com.vn/stores/news_dataimages/tuoitrethudocomvn/052020/09/18/video-radio-huong-dan-tap-luyen-the-thao-cho-nguoi-khiem-thi-30-.3359.jpg"
                title="news"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thể dục
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Radio và video chuỗi bài tập thể dục, thể thao dành cho người
                  khiếm thị hỗ trợ hội viên Hội Người mù nâng cao sức khỏe trong
                  mùa dịch Covid-19.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Tìm hiểu thêm</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://cdn.tgdd.vn/hoi-dap/845011/mxh-thao-phuong-800x385.jpg"
                title="news"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mạng xã hội
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Kết nối cộng đồng người khiếm thị, chia sẻ và bắt chuyện cùng
                  nhau <br />
                  <br /> <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Tìm hiểu thêm</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Homepage;
