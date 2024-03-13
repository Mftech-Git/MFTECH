import React from "react"
import { Link } from "gatsby"
import start1 from "../../images/project-start1.png"
import shape9 from "../../images/shape/vector-shape9.png"
import shape10 from "../../images/shape/vector-shape10.png"

const StartProject = () => {
  return (
    <>
      <div className="project-start-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="project-start-image">
                <img src={start1} alt="about" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>Start Your Project With Us</h2>
                <p>
                  Whether you want help profesionnally be you Internal and In-House, a Managed Service Provider, or Residential Mom & Pop. I'm more than happy
                  to get you what you need. I provide consultation services and also do all my own work. No stone is ever left unturned and I promise you will
                  have peace of mind knowing "It's Done Right The First Time!" and before deadline!
                </p>

                <Link to="/contact" className="default-btn">
                  <i className="flaticon-web"></i>
                  Get Started
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape9">
          <img src={shape9} alt="about" />
        </div>
        <div className="vector-shape10">
          <img src={shape10} alt="about" />
        </div>
      </div>
    </>
  )
}

export default StartProject
