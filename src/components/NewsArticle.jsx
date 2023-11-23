import React from "react";

// { data }
function NewsArticle() {
  return (
    <div className="news">
      <h1 className="news__title">Bien doi khi hau trong thoi ki so</h1>
      <p className="news__desc">Day la bai bao ve bien doi khi hau</p>
      <span className="news__author">Vanh</span> <br />
      <span className="news__published">Vanh</span>
      <span className="news__source">Vanh</span>
      <button className="news__btn">Read More</button>
    </div>
  );
}

export default NewsArticle;