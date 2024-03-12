import React from "react"
import SharePointSB from "./SharePointSB-Content"
import sharepointpic from "../../images/projects/sharepoint1.png"
import sharepointpic2 from "../../images/projects/sharepoint2.png"


const SharePointContent = () => {


    return (
        <>
          <section className="case-studies-details-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                <div className="case-studies-details-image">
                  <img src={sharepointpic} alt="about" />
                </div>
                <div className="case-studies-details-desc">
                  <span className="sub-title">Data Science</span>
                  <h3>
                    Overview of Sharepoint Migration: While still using an On-Prem File Share.
                  </h3>
                  <p>
                    Migration from traditional mapped-drives setup with GPO setup to SharePoint environment
                    while still maintaining functionality and use of Mapped Drives with "Bidrirectional Synchronization."
                    Done for a non-profit with over 100+ staff members and decades old environment.
                  </p>
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="image">
                        <img src={sharepointpic2} alt="about" />
                      </div>
                    </div>
    
                    <div className="col-lg-6 col-md-6">
                      <div className="content">
                        <h3>Important Facts</h3>
                        <ul>
                        <li>Enhanced Cloud Access</li>
                            <li>Redundancy</li>
                            <li>Staff Education</li>
                            <li>Power Automate</li>
                            <li>SMB with Azure Files</li>
                            <li>Bidirectional Synchronization</li>
                            <li>Leadership Involvement</li>
                        </ul>
                      </div>
    
                    </div>
                  </div>
                  <p>
                        <strong>
                            Background
                        </strong>
                    </p>
    
                    <p>
                        Tasked by the CEO and executive leadership, I embarked on a project to transition the company's file management system to SharePoint. Recognizing a general lack of understanding of SharePoint's capabilities within the leadership team, I initiated a series of educational presentations, ranging from PowerPoint slides to demo videos, to elucidate the concept and functionality of SharePoint.
                    </p>
    
                    <p>
                        <strong>
                            Initiation and Leadership Engagement
                        </strong>
                    </p>
                    <p>
                      Upon my appointment as IT Director, I was entrusted by the CEO and executive leadership to lead the migration to SharePoint, facing the initial challenge of a significant knowledge gap within the leadership team regarding SharePoint's functionality. Through comprehensive interviews and discussions, I uncovered a range of misconceptions and uncertainties.
                    </p>
    
                    <p>
                        <strong>
                            Challenge
                        </strong>
                    </p>
                    <p>
                        The leadership team was receptive to the idea of moving files to the cloud yet reluctant to relinquish their familiar mapped drives. This presented a unique challenge: to facilitate the transition without disrupting established workflows.
                    </p>
    
                    <p>
                      <strong>
                        Solution
                    </strong>
                    </p>
                    <p>
                      I crafted a solution within Microsoft's ecosystem, avoiding third-party tools to minimize costs and complexity. Utilizing Azure Files, I established an SMB file share, locally cached onto a newly built Server 2022 replica server. This setup enabled bidirectional synchronization with SharePoint via Power Automate, ensuring changes in the cloud were reflected on-premises almost instantaneously.
                    </p>
    
                    <p>
                        <strong>
                            Educational Outreach and Consensus Building
                        </strong>
                    </p>
                    <p>
                        To bridge this knowledge gap, I developed and disseminated a series of educational materials, from PowerPoint presentations to demo videos, in leadership meetings. These efforts were aimed at elucidating SharePoint's potential for cloud-based file management and collaborative workspaces. My presentations fostered a unified understanding and consensus among the leadership, despite initial hesitations about transitioning away from traditional Mac drive setups.
                    </p>
    
                    <p>
                        <strong>
                            Technical Solution and Implementation
                        </strong>
                    </p>
                    <p>
                        Addressing concerns about abandoning familiar systems, I engineered a solution that aligned with the company's cloud migration objectives while preserving access to Mac drives, strictly within Microsoft's ecosystem. By utilizing Azure Files to establish an SMB file share and locally caching it on a Server 2022 replica server, I ensured robust backup and redundancy. This infrastructure facilitated bidirectional synchronization with SharePoint through Power Automate, ensuring real-time updates between cloud and on-premises environments.
                    </p>
    
                    <p>
                        <strong>
                            Execution
                        </strong>
                    </p>
                    <p>
                        Post-implementation, the focus shifted to staff education. I developed training modules and conducted sessions starting with the leadership team, eventually extending to each department, ensuring a smooth transition for all staff members.
                    </p>
    
                    <p>
                        <strong> 
                            Comprehensive Staff Training and Adoption
                        </strong>
                    </p>
                    <p>
                      With the technical foundation in place, the project extended to encompass widespread staff training to guarantee a smooth transition. I spearheaded the creation of training modules and organized sessions that began with leadership and systematically covered each department, ensuring comprehensive adoption and proficiency across the organization.
                    </p>
    
                    <p>
                        <strong>
                            Conclusion and Impact
                        </strong>
                    </p>
                    <p>
                        This project underscores my ability to navigate complex IT challenges, lead organizational change, and drive technological adoption with strategic foresight, technical expertise, and effective communication. It exemplifies a holistic approach to IT leadership, from conceptual clarity and consensus building to technical implementation and organizational education, ensuring the successful migration to SharePoint and enhanced operational efficiency.
                    </p>
                </div>
              </div>
    
                <div className="col-lg-4 col-md-12">
                  <SharePointSB /> {/* SharePointSB component, if it needs a prop, pass it here */}
                </div>
              </div>
            </div>
          </section>
        </>
    )
}

export default SharePointContent


