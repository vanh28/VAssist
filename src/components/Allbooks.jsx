import "../pages/News.css";
import Article from "./Article";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Book from "./Book";
const Allbooks = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    //   const getArticles = async () => {
    //   const articlesCol = collection(db, 'articles');
    //   const articleSnapshot = await getDocs(articlesCol);
    //   const articleList = articleSnapshot.docs.map(doc => doc.data());
    //   setArticles(articleList);

    //   // const url = 'https://api.fpt.ai/hmi/tts/v5';
    //   // const headers = new Headers({
    //   //   'Content-Type': 'application/json',
    //   //   'api-key': 'CDBESoE2v7BxVOSwoqnI7vUviD8C266U',
    //   //   'speed': '',
    //   //   'voice': 'linhsan',
    //   // });
    //   // const articlePromises = articles.map(article => {
    //   //   return fetch(url, {
    //   //     method: 'POST',
    //   //     headers: headers,
    //   //     body: JSON.stringify({ text: article.title }) // assuming the API wants the article title
    //   //   })
    //   //   .then(response => response.json())
    //   //   .then(data => {
    //   //     // replace the article's urlAudio with the API response
    //   //     article.urlAudio = data.url; // replace 'url' with the actual property from the API response
    //   //     return article;
    //   //   });
    //   // });
    //   // const updatedArticles = await Promise.all(articlePromises);
    //   // setArticles(updatedArticles);
    // };
    const getArticles = async () => {
    const articlesCol = collection(db, 'books');
    const articleSnapshot = await getDocs(articlesCol);
    const articles = articleSnapshot.docs.map(doc => doc.data());
    setArticles(articles);
    // const url = 'https://api.fpt.ai/hmi/tts/v5';
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'api-key': 'CDBESoE2v7BxVOSwoqnI7vUviD8C266U',
    //   'speed': '',
    //   'voice': 'linhsan',
    // });

    // // const articlePromises = articles.map(article => {
    // //   return fetch(url, {
    // //     method: 'POST',
    // //     headers: headers,
    // //     body: JSON.stringify({ text: article.content }) // send the article content to the API
    // //   })
    // //   .then(response => response.json())
    // //   .then(data => {
    // //     // replace the article's audioUrl with the API response
    // //     article.audioUrl = data.async; // replace 'async' with the actual property from the API response
    // //     return article;
    // //   });
    // // });
    // const articlePromises = articles.map(async article => {
    //   const response1 = await fetch(url, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify({ text: article.title }) 
    //   });
    //   const response2 = await fetch(url, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify({ text: article.content }) // send the article content to the API
    //   });
    
    //   const data1 = await response1.json();
    //   const data2 = await response2.json();
    //   // replace the article's audioUrl with the API response
    //   article.audioTitle = data1.async; // replace 'async' with the actual property from the API response
    //   article.audioUrl = data2.async;
    //   return article;
    // });
    // const updatedArticles = await Promise.all(articlePromises);
    // setArticles(updatedArticles);
  };
    getArticles();
  }, []);

  return (
    <div>
      <div className="all__news">
        {articles.map((article, index) => (
          <Book key={index} book={article} />
        ))}
      </div>
    </div>
  );
};

export default Allbooks;

// import { db } from "../../firebase";
// const articl = [
//   {
//     title: "Article 2",
//     description: "Description of article 2",
//     author: "Jane Smith",
//     source: "The Daily Gazette",
//     url: "https://example.com/article2",
//     urlToImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanima",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     title: "Article 2",
//     description: "Description of article 2",
//     author: "Jane Smith",
//     source: "The Daily Gazette",
//     url: "https://example.com/article2",
//     urlToImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanima",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
// ];