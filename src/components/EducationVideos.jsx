import "../pages/News.css";
import Article from "./Article";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import EducationVideo from "./EducationVideo";
import edu from "../assets/edu.mp3";
import edu1 from "../assets/edu1.mp3";
import book8 from "../assets/book/book8.mp3";

  
  const EducationVideos = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      const getArticles = async () => {
        const articles = [
          {
            title: "Luyện Nghe 1",
            description: "Hello các bạn! Mình cảm thấy nhiều bạn gặp khó khăn khi nghe tiếng anh, mình muốn tạo ra những video không chỉ giúp các bạn phát âm chuẩn mà còn có thể giúp các bạn luyện nghe tốt hơn, mình sẽ tăng dần trình độ bài tập nghe cho các bạn qua mỗi video",
            author: "Kenny N",
            audioUrl: edu,
            urlToImage: "https://i.ytimg.com/vi/akXGSw7H49Y/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqG_s65UrLxN4_uG3H6OGSFum5ww",
          },
          {
            title: "Luyện Nghe 2",
            description: "Hello các bạn! Mình cảm thấy nhiều bạn gặp khó khăn khi nghe tiếng anh, mình muốn tạo ra những video không chỉ giúp các bạn phát âm chuẩn mà còn có thể giúp các bạn luyện nghe tốt hơn, mình sẽ tăng dần trình độ bài tập nghe cho các bạn qua mỗi video",
            author: "Kenny N",
            audioUrl: edu1,
            urlToImage: "https://i.ytimg.com/vi/xr84aZ2zhOs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoC38Hdjz0tdYjA8GPMT9VDD2Piw",
          },
          {
            title: "Những chữ bị nhầm",
            description: "Hello các bạn! Mình cảm thấy nhiều bạn gặp khó khăn khi nghe tiếng anh, mình muốn tạo ra những video không chỉ giúp các bạn phát âm chuẩn mà còn có thể giúp các bạn luyện nghe tốt hơn, mình sẽ tăng dần trình độ bài tập nghe cho các bạn qua mỗi video",
            author: "Kenny N",
            audioUrl: "",
            urlToImage: "https://i.ytimg.com/vi/rs0VkCY_r90/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGYHjr-9sod2ruvRrAyXxIiLXeYw",
          },
          {
            title: "Phát âm tiếng anh",
            description: "Hello các bạn! Mình cảm thấy nhiều bạn gặp khó khăn khi nghe tiếng anh, mình muốn tạo ra những video không chỉ giúp các bạn phát âm chuẩn mà còn có thể giúp các bạn luyện nghe tốt hơn, mình sẽ tăng dần trình độ bài tập nghe cho các bạn qua mỗi video",
            author: "Kenny N",
            audioUrl: "",
            urlToImage: "https://i.ytimg.com/vi/fCOJsJgVlw0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJnAOo1-YOq4drWTxK4RyDQXxJfw",
          },
        ];
      // setArticles(articles);
      const url = 'https://api.fpt.ai/hmi/tts/v5';
      const headers = new Headers({
        'Content-Type': 'application/json',
        'api-key': 'u6PXADUPP0luylzHNLJaVYYN1kT7ltP7',
        'speed': '',
        'voice': 'banmai',
      });
  
      
      const articlePromises = articles.map(async article => {
        const response1 = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ text: article.title }) 
        });
        const response2 = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ text: article.content }) // send the article content to the API
        });
      
        const data1 = await response1.json();
        const data2 = await response2.json();
        // replace the article's audioUrl with the API response
        article.audioTitle = data1.async; // replace 'async' with the actual property from the API response
        return article;
      });
      const updatedArticles = await Promise.all(articlePromises);
      setArticles(updatedArticles);
    };
      getArticles();
    }, []);
    return (
      <div>
        <div className="all__news">
          {articles.map((article, index) => (
            <EducationVideo key={index} video={article} />
          ))}
        </div>
      </div>
    );
};

export default EducationVideos;
