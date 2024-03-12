// src/components/MediumArticles.js
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const MediumArticles = () => {
  const [mediumArticles, setMediumArticles] = useState([]);

  useEffect(() => {
    // Your fetch call here
    // ...
  }, []);

  // Return JSX to display the articles
  return (
    <div>
      {/* Map through mediumArticles to display each article with a Link */}
      {/* ... */}
    </div>
  );
};

export default MediumArticles;
