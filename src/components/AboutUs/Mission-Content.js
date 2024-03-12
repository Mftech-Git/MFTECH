import React from "react";
import starIcon from "../../images/star-icon.png";
import { Link } from "gatsby"; // Assuming you're using Gatsby's Link component
import './MissionContent.css'; // Ensure you have a corresponding CSS file for custom styles

const MissionContent = () => {
return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <section className="mission-area ptb-100 bg-fafafb">
    <div className="container">
      <div className="mission-statement">
        <h2>Empowering Through Technology</h2>
        <p>
          At the core of my professional journey is a dedication to leveraging technology for empowerment,
          innovation, and progress. My mission is to make technology accessible and understandable,
          fostering an environment of continuous learning and collaboration.
        </p>
        <p>
          I aim to contribute to a future where technology acts as a bridge, unlocking potential and
          facilitating innovation. In pursuit of this mission, I engage in projects that challenge the
          status quo and offer transformative solutions.
        </p>
        <div className="mission-links">
          <Link to="/Resume">View my resume</Link>&nbsp;for a detailed look at my professional background and skills.
          <Link to="/about-us"> Learn more about me</Link>&nbsp;or to really get to know me check out my&nbsp;
          <Link to="/blog"> Blog.</Link>
        </div>
      </div>
    </div>
  </section>
</>
);
};

export default MissionContent;
