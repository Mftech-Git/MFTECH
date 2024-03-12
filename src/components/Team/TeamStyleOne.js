import React from "react";
import { Link } from "gatsby";
import scientist1 from "../../images/scientist/scientist1.png";
import scientist2 from "../../images/scientist/scientist2.png";
import scientist3 from "../../images/scientist/scientist3.png";
import scientist4 from "../../images/scientist/scientist4.png";
import scientist5 from "../../images/scientist/scientist5.png";
import scientist6 from "../../images/scientist/scientist6.png";
import scientist7 from "../../images/scientist/scientist7.png";
import scientist8 from "../../images/scientist/scientist8.png";

const TeamStyleOne = () => {
  return (
    <div className="scientist-area bg-color pt-100 pb-70">
      <div className="container">
        <div className="row">
          {[scientist1, scientist2, scientist3, scientist4, scientist5, scientist6, scientist7, scientist8].map((scientist, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist} alt={`team-member-${index + 1}`} />
                </div>
                <div className="content">
                  <h3>{`Team Member ${index + 1}`}</h3>
                  <span>Role</span>
                  <ul className="social">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social, idx) => (
                      <li key={idx}>
                        <Link to={`https://${social}.com/`} className="d-block" target="_blank" rel="noopener noreferrer" aria-label={social}>
                          <i className={`bx bxl-${social}`}></i>
                        </Link>
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

export default TeamStyleOne;
