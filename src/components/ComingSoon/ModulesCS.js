import React  from "react";
import SoonTimer from "./ModTimer";




const ComingSoonContent = () => {
  return (
    <section className="case-studies-details-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12"></div>
        
          <div className="comingSoonContainer">
            <h1>Training Modules</h1>
            <h3>Our  team is working on something amazing.</h3>
              <h3>Stay tuned for the reveal.</h3>
            <SoonTimer />
            <p>
                Come back later to sign up for interactive courses, completely free. These will include courses on:
            </p>
            <ul>
                <li>On-Premises Setup with Windows Server 2016, 2019, and 2022</li>
                <li>Microsoft 365 Tenant Management with Azure Identity Services</li>
                <li>Managing Custom Azure Services and Resource Management</li>
                <li>Hybrid and Cloud Setups, including Migrations and Connectivity</li>
                <li>Serverless Setups in Azure</li>
            </ul>
          </div>
        </div>
      </div>
  </section>
  );
};

export default ComingSoonContent
