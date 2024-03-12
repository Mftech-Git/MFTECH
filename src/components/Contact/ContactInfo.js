import React from "react"
import starIcon from "../../images/star-icon.png";

const ContactInfo = () => {
return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <div className="contact-info-area pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <a href="https://www.google.com/maps/@32.211791,-110.8157176,3a,75y,173.37h,90t/data=!3m6!1e1!3m4!1szfUmNiUvFMZw3xpoDQNq9Q!2e0!7i16384!8i8192?entry=ttu" target="_blank" rel="noopener noreferrer">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-map"></i>
              </div>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <h3>Our Address</h3>
              <p><a href="https://www.google.com/maps/@32.211791,-110.8157176,3a,75y,173.37h,90t/data=!3m6!1e1!3m4!1szfUmNiUvFMZw3xpoDQNq9Q!2e0!7i16384!8i8192?entry=ttu" target="_blank" rel="noopener noreferrer">8270 E Kenyon Dr Tucson, AZ 85710</a></p>
            </div>
          </a>
        </div>

        <div className="col-lg-4 col-md-6">
          <a href="tel:+15209064889" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Ensure the link does not apply default styles */}
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <div className="icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <h3>Contact</h3>
              <p>Mobile: (+1) 520.906.4889</p> {/* Removed the nested <a> tag to avoid redundancy */}
            </div>
          </a>
        </div>


        <div className="col-lg-4 col-md-6">
          <div className="contact-info-box">
            <div className="back-icon">
              <i className="bx bx-time-five"></i>
            </div>
            <div className="icon">
              <i className="bx bx-time-five"></i>
            </div>
            <h3>Hours of Operation</h3>
            <p>Monday - Sunday: 24/7</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
)
}

export default ContactInfo
