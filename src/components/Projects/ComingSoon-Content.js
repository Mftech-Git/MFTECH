import React from "react";
import ProjectsEventTimer from "../Events/ProjectsEventTimer";
import starIcon from "../../images/star-icon.png";



const ComingSoonContent = () => {
return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <section className="case-studies-details-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12"></div>

        <div className="comingSoonContainer">
          <h1>Exciting Projects on the Horizon!</h1>
          <h3>Our team is working on something amazing.</h3>
          <h3>Stay tuned for the reveal.</h3>
          <ProjectsEventTimer />
        </div>
      </div>
    </div>
  </section>
</>
);
};

export default ComingSoonContent
