
import "../pages/News.css"
import Article from "./Article";
import React, { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

const Newspaper = () => {
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
    const articlesCol = collection(db, 'articles');
    const articleSnapshot = await getDocs(articlesCol);
    const articles = articleSnapshot.docs.map(doc => doc.data());

    const url = 'https://api.fpt.ai/hmi/tts/v5';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'api-key': 'CDBESoE2v7BxVOSwoqnI7vUviD8C266U',
      'speed': '',
      'voice': 'linhsan',
    });

    // const articlePromises = articles.map(article => {
    //   return fetch(url, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify({ text: article.content }) // send the article content to the API
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     // replace the article's audioUrl with the API response
    //     article.audioUrl = data.async; // replace 'async' with the actual property from the API response
    //     return article;
    //   });
    // });
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


// import { db } from "../../firebase";
// const articl = [
//   {
//     title: "Manchester United is the best football team in the world",
//     description: "Niềm tự hào của các cổ động viên thành Man - Manchester United. MU dành cú ăn ba lịch sử trong 11 năm. Sau chien thang truoc  mu Co dong vien da thuc su that vong voi su tro lai nay",
//     author: "John Doe",
//     source: "The News Times",
//     urlToImage: "data:image/jpeg;base64,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",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     audioUrl: "https://cf-media.sndcdn.com/s5zL0hzbYgvH.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vczV6TDBoemJZZ3ZILjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzAwODI1MDYxfX19XX0_&Signature=XRlkTGxvgPQt4AZS2dxnS-42fqL7dCW7vXeqD2Qf1rvl8wnh5-MTT3X1v6ytEGl~x7ad7RBskGnYRWstbRlUcPCFBhfDMG8RGk76XGyu4osloEqgqHBdY3WYNhpV-ycZrtbEQICoYZC7It1AVKpzrC61vsqQzOuz85o8UxC8wb05ya66d~SvPibfdbNGX9NRauoFoPltByvOln4qsG~x9B5uGOc4fJJfxq7cnShnu82RLof81ZYDSbLYemn0IWVLNs3JUsQIOXJLWT4f-GXcst5V9NgJMInLmRe3JECsQZ8yyX7gv-Cnsi74DSpvngic9Siuo-Q7EBgg~LHkCTSTDQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
//   },
//   {
//     title: "Article 2",
//     description: "Description of article 2",
//     author: "Jane Smith",
//     source: "The Daily Gazette",
//     url: "https://example.com/article2",
//     urlToImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanima",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     audioUrl: "https://cf-media.sndcdn.com/4Nu1PZH95FRL.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vNE51MVBaSDk1RlJMLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzAwODI1NDA4fX19XX0_&Signature=FgZeDHINVEw3aSf~biEvaLAUmKMvSvYjuY0VmDI5AHpk~NM0SaGeA34JjJg8m5PZKSlTFmgIVVlqkO4pV4HoiPlNSXBGCLj~w9Dz9zdDeeA7i4g9V2IXcaqu6a4nqBXkGAGoMzFZAHm~exd8vwt-RyECwMyDMEtjTkcRzc65JcSKkkCnz2iGRWHaD28DfQx8hn0dhcqBjihaWbb9Mts5ro6wJfUQ00AYNDFypjXJ~o8q80MrjHU2kMUpl6prSP3OArlTHMBbIdY1k5fYkRVLImIeK0~illNkzgR2QZI2gRbWRWC~5D~c02k5204lA9qvtRFnUcsWy7lPxsfhz3fXXA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
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
//   {
//     title: "Article 2",
//     description: "Description of article 2",
//     author: "Jane Smith",
//     source: "The Daily Gazette",
//     url: "https://example.com/article2",
//     urlToImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanima",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   // Add more articles here...
// ];