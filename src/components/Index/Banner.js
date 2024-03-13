import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import bannerImg from "../../images/banner-img1.png"

const Banner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="it-services-banner overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Welcome to Mainframe Tech
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <h5>
                  I'm Levi Oniszko, an IT Professional specializing in Systems, Networking, 
                  and Security. Explore my portfolio and see my expertise in action.
                  </h5>
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="/Resources/contact" className="default-btn">
                    <i className="flaticon-right"></i>
                    Let's Connect <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={bannerImg} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
