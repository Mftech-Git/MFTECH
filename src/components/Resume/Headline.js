import React from "react";

const HeadlineSection = () => {
  const headlineEntries = [
    // ... Your Headline
    {
      headline: "With a dynamic blend of technical expertise and leadership, Levi Oniszko stands out as an IT Professional specializing in Systems & Network Administration. His proficiency spans server management, cloud integration, and network configuration, backed by substantial experience in enhancing IT infrastructure and operations across diverse organizational settings. Levi's forward-thinking approach to IT solutions, alongside his mentorship and strategic planning skills, showcases his ability to navigate and optimize complex IT environments, ensuring robust, scalable, and secure systems that drive organizational success.",
        
     
    },  
];

  // CSS for the grid container
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr", // This sets the proportion of the columns
    alignItems: "center",
    marginBottom: "8px", // Spacing between each education entry
    fontSize: "18px", // This sets the font size to 18px
    fontWeight: "bold", // This makes the font bold
  };

  // Inline styles for each type of content
  const headlineStyle = { textAlign: "justify" };


  return (
    <div style={{ margin: "20px 0" }}> {/* Match the margin of SkillsSection */}
      {headlineEntries.map((entry, index) => (
        <React.Fragment key={index}>
        <div style={headlineStyle}>{entry.headline}</div>
          {/* Whitespace */}
          <div style={{ margin: "16px 0" }}></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeadlineSection;
