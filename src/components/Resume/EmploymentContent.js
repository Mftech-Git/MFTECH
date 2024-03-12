import React from "react";

const EmploymentContent = () => {
const employmentEntries = [
{
company: "Integrilogic",
title: "Network Infrastructure Support Engineer",
endDate: "Oct 2023 - Present",
feats: "MSP environment where I assist with account management, solving unresolved issues, handle escalations, projects, and various tasks across Windows, Macs, different flavors of Linux, and Unix. ",
bullets: <u1>
  <li>Enterprise Windows & Cloud Integration Expert: Proficient in configuring and managing Windows-based workstations, servers, Active Directory, and Group Policy. Specialized in Microsoft 365 and Azure across cloud, hybrid, on-premises, and serverless environments at an enterprise level.</li>
  <li>Network Configuration: Proficient in deploying and troubleshooting routers, firewalls, switches, with a focus on security and VLAN efficiency.</li>
  <li>System Performance Monitoring: Implemented robust monitoring solutions to ensure optimal performance and swift resolution of system issues.</li>
</u1>,
},

{
company: "OPCS",
title: "IT Manager",
endDate: "April 2022 – Aug 2023",
feats: "As the IT Director at Old Pueblo Community Services, I led pivotal transformations, guiding a team of five to significantly impact the technology strategy within an organization of over 100 staff members. My leadership was key in enhancing IT infrastructure and streamlining operations.",
bullets: <u1>
  <li>Deployment Efficiency: Revolutionized PC deployment by integrating Smart Deploy with WDS, slashing buildout time from 2 hours to 15 minutes through advanced PXE booting techniques.</li>
  <li>IT Department Overhaul: Founded and matured the IT department, leveraging NinjaOne to boost operational efficiency by 25% and slash ticket volume, setting a new benchmark in helpdesk performance.</li>
  <li>Problem Resolution: Spearheaded the resolution of systemic issues, cutting staff downtime by 20% and enhancing workflow continuity.</li>
  <li>Culture of Excellence: Catalyzed departmental growth by establishing a tiered administration and project coordination framework, fostering a culture of equity and opportunity.</li>
  <li>Project Execution: Navigated projects from ideation to execution with precision, ensuring alignment with strategic goals and punctual delivery.</li>
  <li>Infrastructure Mastery: Architected and deployed IDF and MDF structures, guaranteeing robust connectivity and superior performance within organizational operations.</li>
</u1>,
},
{
company: "La Frontera Center",
title: "IT Support Specialist",
endDate: "October 2021 – April 2022",
feats: "At La Frontera, I provided technology support and mentorship, completing projects and managing a diverse technology stack that included Azure, UniFi, and Cisco Meraki systems. My focus was on enhancing the organization's operational efficiency and providing staff with the means to complete their work.",
bullets: <u1>
  <li>Azure and Microsoft 365 Connoisseur: Administered Azure environments and integrated Microsoft 365 with Linux-based OSTicket, enhancing support operations.</li>
  <li>Scripting and System: Demonstrated expertise in Hyper-V, Ubuntu, CentOS, bolstering our IT infrastructure's robustness and adaptability.</li>
</u1>,
},
{
company: "Technology Solutions",
title: "IT Engineer",
endDate: "Feb 2019 – July 2021",
feats: "Starting as an intern and rapidly advancing to a full-time Level 1 Engineer, I served as a IT technician onsite at Casa de Los Ninos, Child and Family Resources, and many others across the Arizona state area. Also attained my CompTIA A+ certification while working here.",
bullets: <u1>
  <li>Network Mastery: Troubleshot and implemented networks using UniFi, Cisco Meraki, managed essential protocols on Linux. Contact & SLA Adherence: Provided immediate help desk support, meeting Service Level Agreements.</li>
  <li>Tech Versatility: Skilled across 60+ client environments.</li>
  <li>Broad Stack: ConnectWise, Microsoft 365, VMWare, Fortinet for server, troubleshooting, security tasks.</li>
</u1>,
},
{
company: "Egg Connection",
title: "Front of House Manager",
endDate: "May 2015 – Jan 2019",
feats: "I would provide attentive and personalized customer service. As manager, I was responsible for the scheduling of approximately 15 employees as well as maintaining workflow practices. I practiced problem resolution between coworkers and service recovery for customers. I lead the team to success in meeting the metrics and service delivery goals set forth by the restaurant owners. ",
bullets: <u1>
  <li>Delivered attentive and personalized customer service, ensuring high satisfaction levels.</li>
  <li>Managed scheduling for a team of approximately 15 employees, optimizing staff allocation.</li>
  <li>Maintained efficient workflow practices to ensure smooth restaurant operations.</li>
  <li>Resolved conflicts between coworkers and implemented service recovery strategies for customers.</li>
  <li>Led team to meet and exceed performance metrics and service delivery goals as set by restaurant owners.</li>
  <li>Enhanced team's ability to work under pressure while maintaining high standards of service.</li>
  <li>Fostered a collaborative environment, boosting team morale and productivity.</li>

</u1>,
},
// Add more entries as needed
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
   <h2 style={{ textAlign: "center", marginBottom: "16px" }}>EMPLOYMENT</h2>
     {employmentEntries.map((entry, index) => (
       <React.Fragment key={index}>
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

export default EmploymentContent;
