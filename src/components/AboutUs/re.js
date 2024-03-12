import React from "react"
import "../styles/resume.css" // Make sure to create this CSS file

const ResumePage = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Levicki Oniszko</h1>
        <p>Phone: 520-301-4229 | Email: loszko@mainframetech.us | LinkedIn | Expanded Resume: www.Mainframetech.us</p>
      </header>

      <div className="resume-content">
        <section className="skills">
          <h2>Skills</h2>
          <p>Server Management, Networking, Backup Security, etc...</p>
          {/* List your skills here */}
        </section>

        <section className="experience">
          <h2>Employment</h2>
          <div>
            <h3>Network Infrastructure Support Engineer</h3>
            <p>Oct 2023 - Present</p>
            {/* Add job descriptions */}
          </div>
          {/* Repeat for other experiences */}
        </section>

        <section className="education">
          <h2>Education</h2>
          {/* List your education here */}
        </section>

        <section className="certifications">
          <h2>Certifications</h2>
          {/* List your certifications */}
        </section>

        <section className="soft-skills">
          <h2>Additional Experience & Soft Skills</h2>
          {/* List your soft skills and other experiences */}
        </section>
      </div>
    </div>
  )
}

export default ResumePage
