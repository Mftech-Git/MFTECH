import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import starIcon from "../../images/star-icon.png";
import shape from "../../images/shape/shape1.svg";



// Assuming you have a list of recommendations as objects
const recommendations = [
{
name: "Erin Duvall",
title: "Technology Leader | Code Enthusiast | AWS Geek",
date: "September 24th, 2023",
text: "It has been truly gratifying to witness Levi's evolution as an IT professional over the course of his career. Levi's unwavering ambition and relentless dedication to self-improvement are remarkable qualities that have consistently propelled him forward...",
imageUrl: "https://media.licdn.com/dms/image/D5603AQFnjpvos1RZeA/profile-displayphoto-shrink_100_100/0/1702839976961?e=1714608000&v=beta&t=L9cwEz2x0BunnSODhT0pfliWCVly7rreCt5pNQTdsIQ", // Update this path to the actual image location
},
{
name: "Michael R. Padilla",
title: "RN",
date: " February 29, 2024",
text: "Levi was instrumental into updating me into the new opportunities AI could bring to writing reports that restructered technical wording into something more digestible for the common reader. He takes his time and exhibits his passion...",
imageUrl: "https://media.licdn.com/dms/image/D5635AQGxT82Kc9u3iA/profile-framedphoto-shrink_100_100/0/1704236074479?e=1709931600&v=beta&t=kEGSJHmBisGWsFhLrlTcmyzzCsIRRa3eiORwv6tn3yM",
},
{
name: "Tyler Price",
title: "Senior Support Technician\n",
date: " September 27, 2023",
text: " If there were three words that I could use to describe Levi, I would use the words tenacious, dedicated, and integrious. Throughout the time that I have known him, he has demonstrated technical skills that are far beyond some who have been in the industry...",
imageUrl: "https://media.licdn.com/dms/image/D5603AQFzarbPOk0AXQ/profile-displayphoto-shrink_100_100/0/1678570771821?e=1714608000&v=beta&t=71sAWHsHjdcftUDATiu_Twmt-XlRc9I2vsRF5I25GE8",
},
{
name: "Christopher Feld",
title: "Director of Managed services",
date: " June 29, 2023",
relationship: "Christopher managed Levi directly",
text: "I had the pleasure of managing Levi at Technology Solutions for the several years, and I am delighted to share his outstanding performance. Levi has consistently proven himself as an exceptional IT professional, surpassing my expectations in every aspect...",
imageUrl: "https://media.licdn.com/dms/image/C5603AQG6F0BwHxibYA/profile-displayphoto-shrink_100_100/0/1516902309435?e=1714608000&v=beta&t=B9qP0xNz19gkreiiN2IqHOmdUa306phV2_CTXRbauQA",
},
// Add more objects for each review
];

const LinkedInRecommendation = () => {
return (
<>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>
  <section className="testimonials-area bg-f1f8fb">
    <div className="container">
      <div className="section-title">
        <h2>What my Colleagues are Saying?</h2>
      </div>

      <Swiper navigation={true} spaceBetween={30} breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }} autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }} modules={[Navigation, Autoplay]} className="testimonials-slides">
        {recommendations.map((rec, index) => (
        <SwiperSlide key={index}>
          {/* Use Link to wrap the content if you want it clickable */}
          <Link to={`/detailed-review/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="single-testimonials-item">
            <img src={rec.imageUrl} alt={rec.name} className="client-info" />
            <div className="testimonial-info">
              <h3>{rec.name}</h3>
              <span>{rec.title}</span>
              <p className="date">{rec.date}</p> {/* Ensures date is on its own line */}
              <p>{rec.text}</p>
            </div>
          </div>
          </Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="shape-img1">
      <img src={shape} alt="Shape" />
    </div>
  </section>
</>
);
};

export default LinkedInRecommendation;
