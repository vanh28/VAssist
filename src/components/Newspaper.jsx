import "../pages/News.css";
import Article from "./Article";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const Newspaper = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesCol = collection(db, "articles");
      const articleSnapshot = await getDocs(articlesCol);
      const articleList = articleSnapshot.docs.map((doc) => doc.data());
      setArticles(articleList);
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
