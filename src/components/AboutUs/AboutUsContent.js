import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import icon4 from "../../images/icons/icon4.png"
import icon5 from "../../images/icons/icon5.png"
import icon6 from "../../images/icons/icon6.png"
import icon7 from "../../images/icons/icon7.png"
import shape1 from "../../images/shape/circle-shape1.png"
import RetroTv from './RetroTv';

const AboutUsContent = () => {
const startingYears = {
IT: 2018, // Adjust to the year when 6 years of experience was reached
ProjectManagement: 2019, // Adjust accordingly
CustomerService: 2014, // Adjust accordingly
Leadership: 2021, // Adjust accordingly
};

// Calculate the current years of experience
const currentYear = new Date().getFullYear();
const experience = {
IT: currentYear - startingYears.IT,
ProjectManagement: currentYear - startingYears.ProjectManagement,
CustomerService: currentYear - startingYears.CustomerService,
Leadership: currentYear - startingYears.Leadership,
};

return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <section className="about-area ptb-100">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <RetroTv />
          </div>

        </div>


        <div className="col-lg-6 col-md-12">
          <div className="about-content">
            <div className="content">
              <span className="sub-title">
                <div style={{ display: 'flex', alignItems: 'center' }}>


                </div>

              </span>
              <h3>Levi Oniszko
              </h3>
              <h3>Systems Administrator & Engineer
              </h3>

              <ul className="features-list">
                <li>
                  <img src={icon4} alt="banner" />
                  <h3>{experience.IT}+ Years</h3>
                  <strong> IT Experience</strong>
                </li>
                <li>
                  <img src={icon5} alt="banner" />
                  <h3>{experience.ProjectManagement}+ Years</h3>
                  <strong>Project Management</strong>
                </li>
                <li>
                  <img src={icon6} alt="banner" />
                  <h3>{experience.CustomerService}+ Years</h3>
                  <strong>Customer Service</strong>
                </li>
                <li>
                  <img src={icon7} alt="banner" />
                  <h3>{experience.Leadership}+ Years</h3>
                  <strong>Leadership Experience</strong>
                </li>
              </ul>
              <p>
                I've navigated a path through the IT world, marked by a
                fervent commitment to growth and an insatiable curiosity
                for technology. From mastering server management and cloud
                infrastructure to leading projects that transform operational
                efficiency, my journey is one of continuous learning and
                adaptation. Beyond technical skills, I prioritize the human
                element by ensuring that technology serves to enhance our work
                and lives. Looking forward, I'm excited to tackle new challenges
                and opportunities, always with the end goal of pushing the
                boundaries of what's possible in IT.
              </p>

              <Link to="/about-us" className="default-btn">
              <i className="flaticon-right"></i>More About Us<span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="circle-shape1">
      <img src={shape1} alt="banner" />
    </div>

    <div className="container">
      <div className="about-inner-area">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="about-text">
              <h3>Systems Administration</h3>
              <p>
                At the core of effective systems management lies the fusion
                of real innovation with seamless integration.
              </p>

              <ul className="features-list">
                <li>
                  <i className="flaticon-tick"></i>On-Prem
                </li>
                <li>
                  <i className="flaticon-tick"></i>Cloud
                </li>
                <li>
                  <i className="flaticon-tick"></i> Hybrid
                </li>
                <li>
                  <i className="flaticon-tick"></i> Security Policies
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="about-text">
              <h3>Network Administration</h3>
              <p>
                The foundation of sophisticated networking is built on
                pioneering solutions and infrastructure design.
              </p>

              <ul className="features-list">
                <li>
                  <i className="flaticon-tick"></i> Switches & Firewalls
                </li>
                <li>
                  <i className="flaticon-tick"></i> Routing
                </li>
                <li>
                  <i className="flaticon-tick"></i> Wireless
                </li>
                <li>
                  <i className="flaticon-tick"></i> Servers
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="about-text">
              <h3>Adept Individual</h3>
              <p>
                Professional growth and expertise are the driving forces
                behind my approach to technology.
              </p>

              <ul className="features-list">
                <li>
                  <i className="flaticon-tick"></i> Team Player
                </li>
                <li>
                  <i className="flaticon-tick"></i> Solution Driven
                </li>
                <li>
                  <i className="flaticon-tick"></i> Critical Thinker
                </li>
                <li>
                  <i className="flaticon-tick"></i> Lifelong Student
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="circle-shape1">
      <img src={shape1} alt="banner" />
    </div>
  </section>
</>
)
}

export default AboutUsContent
