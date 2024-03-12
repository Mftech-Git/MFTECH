import React from "react";

const AddSkillsSection = () => {
const AddSkillsEntries = [
// ... Your education entries
{
heading: "ROLES",
company: "Mainframe Tech",
title:"Founder and Systems Engineer",
endDate: "September 2022 - Present",
feats:"Mainframe Tech Mentorship Lead: Providing a training-focused MSP simulation where I guide trainees through the nuances of hybrid systems, integrating Microsoft 365 and Azure, on-prem and cloud environments, and networking to name a few.. My comprehensive home lab serves as the learning ground, including Windows Server 2016-2022, domain management, server roles, clustering, and security best practices.",
bullets:<u1>
  <li>Provided hands-on training in networking fundamentals, enhancing trainees' understanding of complex network infrastructures.</li>
  <li>Utilized a comprehensive home lab for practical learning, including Windows Server 2016-2022.</li>
  <li>Taught domain management, server roles, clustering, and security best practices, ensuring trainees are well-versed in key IT operations.</li>
  <li>Emphasized real-world application of concepts through the use of current and emerging technologies.</li>
  <li>Developed and implemented a curriculum that covers the full spectrum of IT infrastructure, from basic setup to advanced system security protocols.</li>
</u1>
},
{
heading: "SOFT SKILLS",
bullets: <ul>

  <li>Mainframe Tech Mentorship Lead: Providing a training-focused MSP simulation, guiding trainees through hybrid systems, Microsoft 365, Azure, and networking.</li>
  <li>Effective Communication: Capable of clearly articulating technical concepts to non-technical stakeholders.</li>
  <li>Leadership & Influence: Demonstrated ability to lead project teams and influence project direction while fostering a collaborative work environment.</li>
  <li>Critical Thinking & Problem Solving: Proficient in identifying, diagnosing, and implementing solutions for complex IT issues.</li>
  <li>Adaptability & Resilience: Comfortable with fast-paced and changing work environments, quickly adapting to new challenges.</li>
  <li>Emotional Intelligence: Skilled in building relationships, empathizing with others, and managing interpersonal conflicts.</li>
  <li>Strategic Planning: Experienced in developing and implementing IT strategies that align with organizational goals.</li>
  <li>Conflict Resolution: Able to mediate disputes and resolve technical and personnel conflicts efficiently.</li>
  <li>Creativity & Innovation: Consistently seeking new ways to improve IT systems and processes through innovative solutions.</li>
</ul>

},

];

// CSS for the grid container
const gridContainerStyle = {
display: "grid",
gridTemplateColumns: "1fr 2fr 1fr", // This sets the proportion of the columns
alignItems: "center",
marginBottom: "8px", // Spacing between each education entry
fontSize: "23px", // This sets the font size to 18px
fontWeight: "bold", // This makes the font bold
};

// Inline styles for each type of content
const institutionStyle = { textAlign: "left" };
const locationStyle = { textAlign: "center" };
const dateStyle = { textAlign: "right" };
const headingStyle = { textAlign: "center" };
const leftStyle = { textAlign: "center" };
const rightStyle = { textAlign: "center" };

return (
<div style={{ margin: "20px 0" }}> {/* Match the margin of SkillsSection */}
  <h2 style={{ textAlign: "center", marginBottom: "16px" }}>ADDITIONAL SKILLS & ROLES</h2>
  {AddSkillsEntries.map((entry, index) => (
  <React.Fragment key={index}>
    {/* Heading description */}
    <div style={gridContainerStyle}>
      <div style={leftStyle}>{entry.left}</div>
      <div style={headingStyle}>{entry.heading}</div>
      <div style={rightStyle}>{entry.right}</div>
    </div>
    {/* Grid container for the three columns */}
    <div style={gridContainerStyle}>
      <div style={institutionStyle}>{entry.company}</div>
      <div style={locationStyle}>{entry.title}</div>
      <div style={dateStyle}>{entry.endDate}</div>
    </div>
    {/* Feats description */}
    <div style={{ textAlign: "left", marginBottom: "8px" }}>
      {entry.feats}
    </div>
    {/* Bullet Points */}
    <div style={{ textAlign: "left", marginBottom: "8px" }}>
      {entry.bullets}
    </div>
    {/* Whitespace */}
    <div style={{ margin: "16px 0" }}></div>
  </React.Fragment>
  ))}
</div>
);
};

export default AddSkillsSection;
