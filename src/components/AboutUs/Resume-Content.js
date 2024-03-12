import React from "react";
import starIcon from "../../images/star-icon.png";
import EducationSection from "../Resume/EducationContent";
import SkillsSection from "../Resume/SkillsContent";
import EmploymentContent from "../Resume/EmploymentContent";
import CertificationsSection from "../Resume/CertificationsContent";
import AddSkillsSection from "../Resume/AddSkillsContent";
import HeadlineSection from "../Resume/Headline";

const ResumeContent = () => {
return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <section className="history-area">
    <div className="container">
      <div className="resume-container">
        {/* Contact Information */}
        <section className="contacts">
          <h1>Levi Oniszko</h1>
          <h2>IT Professional: Systems & Network Administrator</h2>
          <HeadlineSection />
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Employment Section */}
        <EmploymentContent />

        {/* Education Section */}
        <EducationSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Additional Experience & Soft Skills Section */}
        <AddSkillsSection />

      </div>
    </div>
  </section>
</>
);
}

export default ResumeContent;
