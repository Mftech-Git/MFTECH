import React from "react";

const CertificationsSection = () => {
  const certificationEntries = [
    // ... Your education entries
    {
        certName: "CompTIA A+",
        place:"",
        endDate: "September 2023", 
        
      },  
      {
        certName: "Addigy Certified Expert",
        place:"",
        endDate: "November 2023", 
        
      },  
      {
        certName: "Addigy Academy Basics",
        place:"",
        endDate: "November 2023", 
        
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
    <h2 style={{ textAlign: "center", marginBottom: "16px" }}>CERTIFICATIONS</h2>
      {certificationEntries.map((entry, index) => (
        <React.Fragment key={index}>
          {/* Grid container for the three columns */}
          <div style={gridContainerStyle}>
            <div style={institutionStyle}>{entry.certName}</div>
            <div style={locationStyle}>{entry.place}</div>
            <div style={dateStyle}>{entry.endDate}</div>
          </div>
          {/* Whitespace */}
          <div style={{ margin: "16px 0" }}></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CertificationsSection;
