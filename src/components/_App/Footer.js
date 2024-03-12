import React from "react"
import { Link } from "gatsby"
import footerimg from "../../images/footerimg.png"
import footerMap from "../../images/footer-map.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <Link to="/" className="footerimg">
                <img src={footerimg} alt="footerimg" />
              </Link>
              <p>
              <h1><strong>Mainframe Tech</strong></h1>
              <p><h4><strong>To Mend & Defend</strong></h4></p>
              <p><h5><strong>Your Digital Guardians</strong></h5>
              </p>
              Mainframe Tech is a simulated MSP for educational and professional 
              development purposes only. Such is done to improve my resume and 
              showcase my skillset. Join our journey on social media and connect
              with us!
              </p>

              <ul className="social-link">
                <li>
                  <a
                    href="https://www.facebook.com/levi.oniszko"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/MFTECH_US"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mftech.us/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/levi-oniszko/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
               {/* <li>
                  <Link to="/case-studies">Case Studies</Link>
               </li>*/}
                <li>
                  <Link to="/blog/Blog/">Our Blog</Link>
                </li>                
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>Resources</h3>

              <ul className="footer-links-list">
              <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/services">Documentation Hub</Link>
                </li>
                <li>
                  <Link to="/FAQ">Frequently Asked Questions</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                    5782 N Ether Matrix Blvd<br /> 
                    Cloud, Haven 10248<br /> 
                    United States
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+15209064889">+1 520.906.4889</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:mftech@mainframetech.us">mftech@mainframetech.us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>Mainframe Tech</strong> All rights
                reserved{" "}
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/privacy-policy">P<strong>Privacy Policy</strong></Link>
                </li>
                <li>
                  <Link to="/terms-of-service"><strong>Terms & Conditions</strong></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div>
    </footer>
  )
}

export default Footer

