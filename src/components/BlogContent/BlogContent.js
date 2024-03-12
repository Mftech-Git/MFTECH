// src/components/fetchMediumArticles.js
import React, { useState, useEffect } from 'react';

const FetchMediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@loniszko')
      .then(response => response.json())
      .then(data => {
        setArticles(data.items);
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <ul>
      {articles.map(article => (
        <li key={article.guid}>
          <a href={article.link}>{article.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default FetchMediumArticles;
