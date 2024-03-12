import React from "react";
import speaker1 from "../../images/speaker/speaker1.jpg";
import speaker2 from "../../images/speaker/speaker2.jpg";
import speaker3 from "../../images/speaker/speaker3.jpg";
import speaker4 from "../../images/speaker/speaker4.jpg";
import speaker5 from "../../images/speaker/speaker5.jpg";
import speaker6 from "../../images/speaker/speaker6.jpg";

const speakers = [
  { name: "Merv Adrian", role: "Data Management", image: speaker1, socials: { facebook: "https://www.facebook.com/", twitter: "https://twitter.com/", instagram: "https://www.instagram.com/", linkedIn: "https://www.linkedin.com/" } },
  { name: "Kirk Borne", role: "Data Scientist", image: speaker2, socials: { facebook: "https://www.facebook.com/", twitter: "https://twitter.com/", instagram: "https://www.instagram.com/", linkedIn: "https://www.linkedin.com/" } },
  { name: "Carla Gentry", role: "Analytical Solutions", image: speaker3, socials: { facebook: "https://www.facebook.com/", twitter: "https://twitter.com/", instagram: "https://www.instagram.com/", linkedIn: "https://www.linkedin.com/" } },
  { name: "Marie Curie", role: "Data Scientist", image: speaker4, socials: { facebook: "https://www.facebook.com/", twitter: "https://twitter.com/", instagram: "https://www.instagram.com/", linkedIn: "https://www.linkedin.com/" } },
  { name: "Alina Sophia", role: "Data Management", image: speaker5, socials: { facebook: "https://www.facebook.com/", twitter: "https://twitter.com/", instagram: "https://www.instagram.com/", linkedIn: "https://www.linkedin.com/" } },
  { name: "Liam Oliver", role: "Data Scientist", image: speaker6, socials: { facebook: "https://www.facebook.com/", twitter: "https://twitter.com/", instagram: "https://www.instagram.com/", linkedIn: "https://www.linkedin.com/" } },
];

const EventSpeakers = () => {
  return (
    <div className="scientist-area bg-fafafb pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Event Speakers</h2>
        </div>
        <div className="row">
          {speakers.map((speaker, index) => (
            <div className="col-lg-4 col-sm-6 col-md-6" key={index}>
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={speaker.image} alt={speaker.name} />
                </div>
                <div className="content">
                  <h3>{speaker.name}</h3>
                  <span>{speaker.role}</span>
                  <ul className="social">
                    {Object.entries(speaker.socials).map(([key, value]) => (
                      <li key={key}>
                        <a href={value} className="d-block" target="_blank" rel="noreferrer" aria-label={`Follow ${speaker.name} on ${key.charAt(0).toUpperCase() + key.slice(1)}`}>
                          <i className={`bx bxl-${key}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSpeakers;
