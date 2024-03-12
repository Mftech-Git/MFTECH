import React from "react";

const SkillsSection = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>TECHNICAL SKILLS</h2>
<section className="skills">
        <div className="skills-container">
          {/* Column 1 for Skills */}
          <div className="skills-column">
            <h5>SERVER MANAGEMENT</h5>
            <p><strong>Windows Server:</strong> Mastery of Windows Server 2012 R2–2022, with in-depth knowledge of Active Directory, Group Policy, NPS, RADIUS, and more, ensuring secure and efficient server environments.</p>
            <p><strong>Azure:</strong> Advanced expertise in Azure IaaS, Azure AD, Azure File Services, including VM creation, Azure Web Apps, and hosting custom solutions like a Unifi Cloud Controller.</p>
            <p><strong>Microsoft 365 & MDM:</strong> Comprehensive command over Microsoft 365 Admin Center, SharePoint, Exchange, Intune, Autopilot, and Endpoint Manager.</p>
            <p><strong>Virtualization:</strong> Skilled in Citrix VDI, Hyper-V, VMware vSphere for virtual environment management and scalability.</p>
            <p><strong>Deployment:</strong> Proficient with WDS, SmartDeploy, FOG, MDT, and PXE booting for efficient system deployments.</p>
            <p><strong>Other Platforms:</strong> Good working knowledge of Docker, Ansible, and Linux.</p>

            <h5>NETWORKING</h5>
            <p><strong>Core Networking:</strong> Advanced capabilities in DHCP, DNS, LAN/WAN, VPN, ACLs, SMTP, static routes, and understanding network topologies.</p>
            <p><strong>VoIP Systems:</strong> Proficient with 3CX, Go To Connect (formerly Jive), FreePBX, Allworx, and Crexendo.</p>
            <p><strong>Networking Hardware:</strong> Experienced in configuring and managing UniFi, Sophos, Fortigate, Meraki, and SonicWall devices.</p>
          </div>
          {/* Column 2 for Skills */}
          <div className="skills-column">
            <h5>INFRASTRUCTURE & AUTOMATION</h5>
            <p><strong>RMM:</strong> High proficiency in device management using ConnectWise (Control, Manage, Automate) and NinjaOne RMM.</p>
            <p><strong>Automation:</strong> Expertise in PowerShell for task automation and Wazuh for security automation.</p>
            <p><strong>Asset & Infrastructure Management:</strong> Strong asset management skills using Asset Tiger and SnipeIT, adept at dashboard creation for real-time infrastructure monitoring.</p>

            <h5>BACKUP, COMPLIANCE, & SECURITY</h5>
            <p><strong>Backup Solutions:</strong> Expert in data protection and archiving with Veeam Backup & Replication v11, Wasabi, NAS (Synology), emphasizing the importance of data integrity for finance sectors.</p>
            <p><strong>MFA & Security:</strong> Leadership in MFA deployment, enhancing account security, and implementing comprehensive firewall and ACL strategies.</p>
            <p><strong>Data Protection:</strong> Focused on NTFS permissions, antivirus solutions (Trend Micro, Webroot, Bitdefender GravityZone), and IDS/EDS systems for robust security.</p>
            <p><strong>Compliance & Auditing:</strong> Proficient in compliance, spam filtering (Proofpoint, Securance, Barracuda), and auditing practices, ensuring regulatory adherence.</p>
            <p><strong>Password Management:</strong> Skilled in using Bitwarden for secure password management and data protection practices.</p>
          </div>
        </div>
      </section>
       {/* Adjust the margin as needed to create whitespace */}
       <div style={{ margin: "16px 0" }}></div>
    </div>
  );
};

export default SkillsSection;
