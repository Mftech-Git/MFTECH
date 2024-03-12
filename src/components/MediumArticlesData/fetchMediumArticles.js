// src/components/FetchMediumArticles.js
import React, { useState, useEffect } from 'react';
import './FetchMediumArticles.css'; // Ensure this file is located correctly

const FetchMediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false); // State to control the visibility of the animation

  useEffect(() => {
    // Fetch articles from the RSS feed
    const noCacheUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40loniszko&api_key=1ilynhmzj5jzh3nppwbf88wuz4yo8cp21055vws2&_nocache=${new Date().getTime()}`;
    fetch(noCacheUrl)
      .then(response => response.json())
      .then(data => {
        setArticles(data.items);
      })
      .catch(error => console.error('Error fetching articles:', error));

    // Set a timeout to hide the animation after 3 seconds
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 350);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Function to extract the first image URL from the content
  function extractImage(content) {
    const div = document.createElement('div');
    div.innerHTML = content;
    const image = div.querySelector('img');
    return image ? image.src : null; // If no image is found, returns null
  }

  // Helper function to format the publication date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


  return (
    <>
      {showAnimation && (
        <div className="loading-screen">
          Mainframe Tech
        </div>
      )}
      <div>
        <h1>Welcome to My Blog</h1>
        <p>Explore entries of satire, sincere experiences, and more that showcase my professional journey and insights.</p>
        <div className="articles-container">
          {articles.map(article => (
            <a href={article.link} key={article.guid} target="_blank" rel="noopener noreferrer" className="article-card-link">
            <div className="article-card" key={article.guid}>
              <img src={article.thumbnail || extractImage(article.content)} alt={article.title} />
              <div className="article-info">
                <h2>{article.title}</h2>
                <p className="article-date">{formatDate(article.pubDate)}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchMediumArticles;
