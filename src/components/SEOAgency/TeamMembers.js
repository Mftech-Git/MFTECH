import React from "react";
import starIcon from "../../images/star-icon.png";
import team5 from "../../images/team/team5.jpg";
import team6 from "../../images/team/team6.jpg";
import team7 from "../../images/team/team7.jpg";

const TeamMembers = () => {
  return (
    <section className="scientist-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="team" />
            Team Members
          </span>
          <h2>Our Awesome Team</h2>
          <p>
            Our team consists of dedicated professionals committed to providing the best services and solutions to our clients.
          </p>
        </div>

        <div className="row">
          {[team5, team6, team7].map((teamMember, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={teamMember} alt={`team-member-${index + 1}`} />
                  <ul className="social">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social, sIndex) => (
                      <li key={sIndex}>
                        <a
                          href={`https://${social}.com/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${social}`}
                        >
                          <i className={`bx bxl-${social}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="content">
                  <h3>{`Member ${index + 1}`}</h3>
                  <span>{`Role ${index + 1}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
