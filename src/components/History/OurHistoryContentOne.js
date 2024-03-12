import React from "react"
import starIcon from "../../images/star-icon.png"
import history1 from "../../images/history/history1.jpg"
import history2 from "../../images/history/history2.jpg"
import history3 from "../../images/history/history3.jpg"
import history4 from "../../images/history/history4.jpg"
import history5 from "../../images/history/history5.jpg"

const OurHistoryContentOne = () => {
return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <section className="history-area ptb-100 bg-fafafb">
    <div className="container">
      <ol className="timeline history-timeline">
        {/* Missing Initial Event Corrected */}
        <li className="timeline-block">
          <div className="timeline-date">
            <span>2021</span>
            April 27<sup>th</sup>
          </div>
          <div className="timeline-icon">
            <span className="dot-badge"></span>
          </div>
          <div className="timeline-content">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="content">
                  <h3>Launching the Homelab</h3>
                  <p>
                    The foundation of my IT exploration began with setting up a homelab, marking the start of a practical learning journey. This early investment in hands-on experience with technology was crucial in shaping my understanding and skills.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="image">
                  <img src={history1} alt="Launching the Homelab" />
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Foundation Event Reordered */}
        <li className="timeline-block">
          <div className="timeline-date">
            <span>2021</span>
            December 20<sup>th</sup>
          </div>
          <div className="timeline-icon">
            <span className="dot-badge"></span>
          </div>
          <div className="timeline-content">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="image">
                  <img src={history2} alt="The Foundation" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="content">
                  <h3>The Foundation</h3>
                  <p>
                    My journey in IT took a significant turn in December 2021 when I decided to expand my expertise. Investing in a new homelab setup, I equipped myself with a Supermicro server, multiple IBM rack-mount servers, and a complete UniFi network infrastructure. This hands-on experience was crucial, providing a solid foundation for the complex projects I would later undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Professional Growth Event */}
        <li className="timeline-block">
          <div className="timeline-date">
            <span>2022</span>
            April 27<sup>th</sup>
          </div>
          <div className="timeline-icon">
            <span className="dot-badge"></span>
          </div>
          <div className="timeline-content">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="content">
                  <h3>Professional Growth</h3>
                  <p>
                    In April 2022, I began working at Old Pueblo Community Services, quickly taking on significant responsibilities. From migrating essential services to SharePoint to overhauling our server setups, my role here has been marked by rapid growth and increasing responsibilities.
                    <br />
                    <a href="/CompletedProjects">Discover more</a> about the impactful projects during my time here.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="image">
                  <img src={history3} alt="Professional Growth" />
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Stepping Up Event */}
        <li className="timeline-block">
          <div className="timeline-date">
            <span>2022</span>
            June 27<sup>th</sup>
          </div>
          <div className="timeline-icon">
            <span className="dot-badge"></span>
          </div>
          <div className="timeline-content">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="image">
                  <img src={history4} alt="Stepping Up" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="content">
                  <h3>Stepping Up</h3>
                  <p>
                    When leadership gaps emerged in June 2022, I took the initiative to guide our IT department through uncertain times. This period honed my leadership skills, deepening my understanding of what it means to manage not just technology, but people and processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Building for the Future Event */}
        <li className="timeline-block">
          <div className="timeline-date">
            <span>2023</span>
            July 28<sup>th</sup>
          </div>
          <div className="timeline-icon">
            <span className="dot-badge"></span>
          </div>
          <div className="timeline-content">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="content">
                  <h3>New Horizons</h3>
                  <p>
                    On July 28th, 2023, I made the difficult decision to depart from Old Pueblo Community Services. My passion has always been deeply rooted in Systems Administration and Engineering, and I found that while leadership roles offered invaluable experience, my heart yearned for the hands-on technical challenges and innovation these fields offer. The pursuit for a role that truly resonates with my aspirations led me back to the Managed Service Provider (MSP) arena as a Network Support Engineer. Yet, my journey doesn't end here; I'm on the lookout for my "forever job" – a place where I can fully utilize my skills, continue to grow, and contribute to meaningful projects. The search for a role that feels like home continues, and I'm eager to see where this path leads.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="image">
                  <img src={history5} alt="Building for the Future" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</>
)
}

export default OurHistoryContentOne
