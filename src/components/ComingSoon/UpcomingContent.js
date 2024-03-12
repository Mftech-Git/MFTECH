import React from "react";
import starIcon from "../../images/star-icon.png";
import './UpcomingFeatures.css'; // Make sure to create this CSS file

const UpcomingFeatures = () => {
return (
 <> 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
<section className="upcoming-feature  ptb-100 bg-fafafb">  
<div className="container">
  <div className="feature-container">

    {/* Repeated FeatureItem components for each feature */}
    {/* Example Feature Item */}

    <FeatureItem title="Documentation Page" headline="Bringing a wealth of knowledge directly to your fingertips, the Documentation Page will serve as your go-to hub for all things IT. From detailed SOPs to insightful how-to guides, get ready to dive deep into a world of information." details={[ "Self-hosted knowledge base leveraging RSS feed for dynamic content updates." , "Downloadable content including SOPs, tutorials, and case studies." , "Seamless integration ensuring the latest IT methodologies and best practices are always at your disposal." ]} date="Anticipated by May 2024" />

    <FeatureItem title="Reviews Page" headline="Your feedback is invaluable to us. The Reviews Page will not only serve as a testament to our commitment to excellence but also as a platform for you to share your experiences and insights." details={[ "Feedback and reviews directly from our community, pending review for authenticity." , "Integration with security platforms like Wordfence to ensure a safe and trustworthy feedback environment." , "A transparent showcase of what we're doing right and where we can improve." ]} date="Anticipated by June 2024" />

    <FeatureItem title="Articles Page" headline="Dive into detailed case studies and explore the intricacies of IT solutions through our Articles Page. From conceptualization to execution, witness the journey of IT projects in real-time." details={[ "Case studies highlighting the challenges, solutions, and outcomes of various IT projects." , "Curated content providing valuable insights and best practices in IT." , "A platform to share knowledge, fostering a community of learning and growth." ]} date="Anticipated by July 2024" />

    <FeatureItem title="Wordfence Security" headline="Security is not just a feature; it's our promise. With the integration of Wordfence, we're elevating our site's security to protect against threats, ensuring your data remains safe and secure." details={[ "Advanced firewall and malware scanner from Wordfence to fortify our site." , "Real-time threat defense feed to stay ahead of potential security issues." , "Enhanced login security features to protect against unauthorized access." ]} date="Anticipated by August 2024" />

    <FeatureItem title="Inventory Management" headline="Explore the realm of asset management with our interactive Inventory Management system. Hosted on a dedicated subdomain, this feature provides a practical learning environment for mastering SnipeIT Inventory." details={[ "Interactive lab environment hosted on Azure Web App, accessible through a dedicated subdomain." , "Real-world application of SnipeIT Inventory for effective asset management." , "Hands-on learning experience designed to enhance your inventory management skills." ]} date="Anticipated by September 2024" />

    <FeatureItem title="Enhanced Security Measures" headline="We're taking our site's security to the next level with enhanced measures designed to safeguard your data. From backend checks to advanced encryption, we're committed to providing a secure online environment." details={[ "Implementation of advanced encryption methods to secure data transmission." , "Backend server-side error checking for robust form validation and security." , "Continuous monitoring and updating of security protocols to combat emerging threats." ]} date="Anticipated by October 2024" />

    <FeatureItem title="SEO Optimization" headline="Maximize your visibility with our SEO Optimization feature. Tailored to increase your reach and impact, this tool ensures your content is seen by the right audience at the right time." details={[ "Comprehensive SEO strategies to enhance site visibility and search rankings." , "Keyword optimization to connect with your target audience more effectively." , "Regular analytics reviews to continually refine and improve your SEO performance." ]} date="Anticipated by November 2024" />

    <FeatureItem title="Improved UI/UX" headline="Embark on an effortless digital journey with our revamped UI/UX. From intuitive navigation to vibrant animations, every element is designed with your experience in mind." details={[ "Redesign with a focus on ease of use, ensuring information is accessible and interactions are intuitive." , "Integration of custom animations to provide a dynamic user experience." , "Enhancements for mobile responsiveness, ensuring a seamless experience across all devices." ]} date="Anticipated by December 2024" />

    <FeatureItem title="User Login and Interactive Modules" headline="Unlock a world of interactive learning with our User Login and Modules feature. From hands-on labs to comprehensive courses, your journey to IT mastery begins here." details={[ "Interactive labs using encrypted browser-based tools for real-time IT training." , "Comprehensive modules covering a wide range of IT topics, from basics to advanced concepts." , "Personalized learning paths with quizzes, exams, and certificates of completion." ]} date="Anticipated by January 2025" />

    <FeatureItem title="Ongoing Projects Insight" headline="Get an insider's view of the continuous innovation at Mainframe Tech through our Ongoing Projects feature. From cutting-edge research to practical applications, stay updated on our journey." details={[ "Regular updates on current projects, providing a glimpse into our work and progress." , "Insights into project successes and learnings, highlighting real-world applications of IT solutions." , "A space for community engagement, allowing for feedback and collaboration on ongoing endeavors." ]} date="Anticipated by February 2025" />



</div>
  </div>
</section>
</>
);
};

const FeatureItem = ({ title, details, date = "Anticipated by end of 2024" }) => (
<div className="feature-item">
  <h3 className="feature-title">{title}</h3>
  <ul className="feature-details">
    {details.map((detail, index) => (
    <li key={index}>{detail}</li>
    ))}
  </ul>
  <p className="feature-date">{date}</p>
</div>
);

export default UpcomingFeatures;
