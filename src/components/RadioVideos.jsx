import "./Book.css";
import Article from "./Article";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import RadioVideo from "./RadioVideo";
import book8 from "../assets/book/book8.mp3";
import song from "../assets/mp3/song.mp3";
import ChieuHomAy from "../assets/mp3/ChieuHomAy.mp3";
import ConMuaNgangQua from "../assets/mp3/ConMuaNgangQua.mp3";
import LacTroi from "../assets/mp3/LacTroi.mp3";
import Thang4 from "../assets/mp3/Thang4LaLoiNoiDoiCuaEm.mp3";

const RadioVideos = () => {
  const articles = [
    {
      name: " Tháng 4 Là Lời Nói Dối Của Em",
      auther: "Hà Anh Tuấn",
      date: "05/12/2023",
      audioUrl: Thang4,
    },
    {
      name: "Chiều Hôm Ấy",
      auther: "JayKii",
      date: "05/12/2023",
      audioUrl: ChieuHomAy,
    },
    {
      name: "Cơn Mưa Ngang Qua",
      auther: " Sơn Tùng M-TP",
      date: "05/12/2023",
      audioUrl: ConMuaNgangQua,
    },
    {
      name: " Lạc Trôi ",
      auther: " Sơn Tùng M-TP",
      date: "05/12/2023",
      audioUrl: LacTroi,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-around space-4">
        {articles.map((article, index) => (
          <RadioVideo key={index} video={article} />
        ))}
      </div>
    </div>
  );
};

export default RadioVideos;
