import React from "react"
import FormsSB from "./FormsSB-Content"
import details1 from "../../images/projects/Forms1.png"
import project2 from "../../images/projects/Forms2.png"


const FormsContent = () => {


return (
<>
  <section className="case-studies-details-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="case-studies-details-image">
            <img src={details1} alt="about" />
          </div>
          <div className="case-studies-details-desc">
            <span className="sub-title">Automation M365</span>
            <h3>
              Transforming Documentation: Digital Signatures Unleashed"
            </h3>
            <p>
              Through the Adobe Sign project, we revolutionized our document management process, transitioning from inefficient paper-based methods to a streamlined, automated digital workflow. This not only accelerated the signing process but also enhanced document security and tracking, marking a significant step towards our digital transformation goals.
            </p>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="image">
                  <img src={project2} alt="about" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h3>Higlights</h3>
                  <ul>
                  <li>Adobe Sign</li>
                  <li>Power Automate</li>
                  <li>PDF</li>
                  <li>Microsoft 365</li>
                  <li>Notifications</li>
                  </ul>
                </div>

              </div>
            </div>
            <p>
              <strong>
                Project Overview
              </strong>
            </p>
            <p>
              The project aimed to automate and digitize form signing processes using Adobe Sign, targeting an efficient transition from paper-based to digital workflows. This initiative focused primarily on internal departments and was designed to address the challenge of obtaining timely signatures on critical documents, improving process efficiency and reducing paper waste.
            </p>
            <p>
              <strong>
                Objectives
              </strong>
            </p>
            <p>
              Our goals were to eliminate delays in form processing, reduce paper usage, and enhance document tracking and management. By automating form signing with Adobe Sign, we aimed to create seamless, efficient workflows that ensure timely signatures and notifications, catering to both our staff and clientele's needs.
            </p>
            <p>
              <strong>
                Technical Solution and Implementation
              </strong>
            </p>
            <p>
              Adobe Sign was chosen for its robust workflow design capabilities and integration with existing PDF forms. We leveraged Power Automate for seamless integration into our Microsoft 365 environment, enabling customized workflow triggers and actions. This setup allowed for precise control over form distribution, signer access, and follow-up notifications to ensure compliance and timely completion.
            </p>
            <p>
              <strong>
                Development Process
              </strong>
            </p>
            <p>
              The development involved designing PDF forms with designated fillable fields and integrating these with Adobe Sign to specify signer roles and sequences. Power Automate was used to create triggers based on form status, automating notifications and rerouting as necessary, ensuring no form was overlooked or delayed in the signing process.
            </p>
            <p>
              <strong>
                Features and Functionality
              </strong>
            </p>
            <p>
              Key features included automated workflow routing, real-time notifications for pending signatures, and a comprehensive audit trail for each document processed. The integration provided a seamless, user-friendly experience for signing documents electronically, directly reducing the organization's reliance on paper, improving operational efficiency, and enhancing document security.
            </p>
            <p>
              <strong>
              Results and Conclusion
              </strong>
            </p>
            <p>
              Implementing Adobe Sign significantly streamlined our document management process, evidenced by reduced paper waste, faster document turnaround times, and improved tracking of document statuses. This project demonstrated the tangible benefits of digital transformation in administrative processes, setting a precedent for further digital initiatives within the organization.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <FormsSB />
        </div>
      </div>
    </div>
  </section>
</>
)
}

export default FormsContent
