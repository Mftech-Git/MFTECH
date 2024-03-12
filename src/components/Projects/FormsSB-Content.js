import React from "react";

const FormsSB = () => {
  return (
    <>
      <div className="case-studies-sidebar-sticky">
        <div className="case-studies-details-info">
          <ul>
            <li>
              <div className="icon" aria-label="Client" role="img">
                <i className="bx bx-user-pin" aria-hidden="true"></i>
              </div>

              <span>Client:</span>
              <a href="https://helptucson.org/" target="_blank" rel="noreferrer">
                Old Pueblo Community Services
              </a>
              {/* If the second link is not needed, it's best to remove the empty <a> tag to clean up the code */}
            </li>
``
            <li>
              <div className="icon" aria-label="Location" role="img">
                <i className="bx bx-map" aria-hidden="true"></i>
              </div>
              <span>Location:</span>
              Tucson, AZ USA
            </li>

            <li>
              <div className="icon" aria-label="Technologies" role="img">
                <i className="bx bx-purchase-tag" aria-hidden="true"></i>
              </div>
              <span>Technologies:</span>
              Adobe Sign, Digital Workflow, Power Automate, PDF Integration, Automated Notifications
            </li>

            <li>
              <div className="icon" aria-label="Completed" role="img">
                <i className="bx bx-check" aria-hidden="true"></i>
              </div>
              <span>Completed:</span>
              December 12th, 2022
            </li>

            <li>
              <div className="icon" aria-label="Website" role="img">
                <i className="bx bx-globe" aria-hidden="true"></i>
              </div>
              <span>Website:</span>
              <a href="https://helptucson.org/" target="_blank" rel="noreferrer">
                helptucson.org
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FormsSB;