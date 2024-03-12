import React from "react";

const EducationSection = () => {
  const educationEntries = [
    // ... Your education entries
    {
        institution: <strong>WGU</strong>,
        location: <strong>Tucson, AZ</strong>, 
        graduationDate: <strong>April 2024 – May 2026</strong>,
        degree: "Bachelor's In IT",
      },  
      {
        institution: <strong>Pima Community College</strong>,
        location: <strong>Tucson, AZ</strong>, 
        graduationDate: <strong>May 2019 – May 2021</strong>,
        degree: "Focus on systems administration and networking while working on Associates",
      },  
      {
        institution: <strong>Sahuaro High School</strong>,
        location: <strong>Tucson, AZ</strong>, 
        graduationDate: <strong>August 2009 – May 2012</strong>,
        degree: "My High School Diploma for primary education",
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

  return (
    <div style={{ margin: "20px 0" }}> {/* Match the margin of SkillsSection */}
    <h2 style={{ textAlign: "center", marginBottom: "16px" }}>EDUCATION</h2>
      {educationEntries.map((entry, index) => (
        <React.Fragment key={index}>
          {/* Grid container for the three columns */}
          <div style={gridContainerStyle}>
            <div style={institutionStyle}>{entry.institution}</div>
            <div style={locationStyle}>{entry.location}</div>
            <div style={dateStyle}>{entry.graduationDate}</div>
          </div>
          {/* Degree description*/}
          <div style={{ textAlign: "left", marginBottom: "8px" }}>
           {entry.degree}
         </div>
          {/* Whitespace */}
          <div style={{ margin: "16px 0" }}></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EducationSection;
