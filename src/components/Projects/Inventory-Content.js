import React from "react"
import InventorySB from "./InventorySB-Content"
import details1 from "../../images/projects/Inventory1.png"
import project2 from "../../images/projects/Inventory2.png"


const InventoryContent = () => {


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
            <span className="sub-title">Asset Management</span>
            <h3>
              Inventory Precision: Integrating Snipe-IT for Asset Management
            </h3>
            <p>
              With the integration of Snipe-IT into our IT infrastructure, we have transformed how assets are managed, tracked, and reported. This powerful tool has enabled us to maintain a meticulous log of our inventory, automate the onboarding and offboarding processes, and provide critical data to support financial and operational decision-making.
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
                    <li>Snipe-IT</li>
                    <li>LDAP</li>
                    <li>MFA</li>
                    <li>IIS</li>
                    <li>SSL</li>

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
              The project involved transitioning from a spreadsheet-based tracking system to a robust, self-hosted Snipe-IT inventory solution. This system was implemented to enhance real-time asset tracking, auditing, and management within the IT environment at OPCS, significantly improving operational efficiency and accountability.
            </p>
            <p>
              <strong>
                Objectives
              </strong>
            </p>
            <p>
              The goal was to eradicate the inaccuracies and inefficiencies of the previous spreadsheet system. By implementing Snipe-IT, we aimed to provide accurate, real-time logging of assets, enforce an Acceptable Use Policy during checkout, and enhance the tracking capabilities for various departmental and financial needs.
            </p>
            <p>
              <strong>
                Technical Solution and Implementation
              </strong>
            </p>
            <p>
              Snipe-IT was deployed on a virtual machine, OPCS-MGMT-01, with LDAP and MFA integration to ensure secure and controlled access. The system was made accessible on-premises via IIS with URL rewrite and secured with an SSL certificate for remote access. Daily backups were instituted, both locally and off-premises, to safeguard the integrity of the inventory data.
            </p>
            <p>
              <strong>
                Development Process
              </strong>
            </p>
            <p>
              The deployment process began with the Snipe-IT installation on a virtual machine and proceeded with configuring user access controls, asset tagging, and establishing a robust backup routine. The system's web interface was then secured and made accessible through a subdomain, ensuring ease of access for all staff while maintaining security protocols.
            </p>
            <p>
              <strong>
                Features and Functionality
              </strong>
            </p>
            <p>
              Snipe-IT's functionality was fully leveraged to track all assets, including serial numbers, model numbers, and IMEI numbers. Low-cost items were accounted for by quantity and included in the check-out process. The system facilitated efficient onboarding and offboarding, allowed department leaders to monitor asset locations, and enabled finance to track spending and grant allocations accurately.
            </p>
            <p>
              <strong>
                Results and Conclusion
              </strong>
            </p>
            <p>
              The Snipe-IT project was launched in August 2022 and has significantly improved asset management for OPCS. It has streamlined the inventory process, leading to better resource allocation, improved response times from technicians, and enhanced accountability across departments.
            </p>


          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <InventorySB />
        </div>
      </div>
    </div>
  </section>
</>
)
}

export default InventoryContent
