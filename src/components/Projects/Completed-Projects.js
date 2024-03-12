import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png";
import project1 from "../../images/projects/project1.jpg"
import project2 from "../../images/projects/project2.jpg"
import project3 from "../../images/projects/project3.jpg"
import project4 from "../../images/projects/project4.jpg"
import project5 from "../../images/projects/project5.jpg"
import project6 from "../../images/projects/project6.jpg"
import project7 from "../../images/projects/project7.jpg"
import project8 from "../../images/projects/project8.jpg"
import project9 from "../../images/projects/project9.jpg"

const CompletedProjectsContent = () => {
return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <section className="projects-area pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <h4>There's just so much I've done, and so much more to still add...</h4>
        <p>
          Working projects is where I excel beyond helpdesk, and it's my favorite.
          I've lead and taken part in many successful projects, solo and as a team.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project1} alt="Project" />

              <Link to="/Projects/SharePoint" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/SharePoint">SharePoint Migration</Link>
              </h3>
              <span>Cloud Project</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project2} alt="Project" />

              <Link to="/Projects/Inventory" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/Inventory">Inventory System</Link>
              </h3>
              <span>Asset Management</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project3} alt="Project" />

              <Link to="/Projects/VoIP" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/VoIP">VoIP Migration w/ GoTo</Link>
              </h3>
              <span>Infrastructure</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project4} alt="Project" />

              <Link to="/Projects/Ninja" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/Ninja">Ninja RMM Implementation</Link>
              </h3>
              <span>Automation & Service</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box ">
            <div className="image">
              <img src={project5} alt="Project" />

              <Link to="/Projects/SRFax" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/SRFax">SRFax Implementation</Link>
              </h3>
              <span>Telephony</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project6} alt="Project" />

              <Link to="/Projects/SmartDeploy" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/SmartDeploy">WDS w/ Smartdeploy</Link>
              </h3>
              <span>Server Roles</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project7} alt="Project" />

              <Link to="/Projects/Compliance" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/Compliance">Compliance Keystone</Link>
              </h3>
              <span>Compliance</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project8} alt="Project" />

              <Link to="/Projects/Forms" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/Forms">Electronic Forms Workflow</Link>
              </h3>
              <span>Automation M365</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-projects-box">
            <div className="image">
              <img src={project9} alt="Project" />

              <Link to="/Projects/Keystone" className="link-btn">
              <i className="bx bx-plus"></i>
              </Link>
            </div>

            <div className="content">
              <h3>
                <Link to="/Projects/Keystone">Keystone Infrastructure</Link>
              </h3>
              <span>Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
)
}

export default CompletedProjectsContent
