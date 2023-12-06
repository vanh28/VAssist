import "../pages/News.css";
import Article from "./Article";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const Newspaper = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
    const articlesCol = collection(db, 'articles');
    const articleSnapshot = await getDocs(articlesCol);
    const articles = articleSnapshot.docs.map(doc => doc.data());
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
      article.audioUrl = data2.async;
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
          <Article key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Newspaper;
