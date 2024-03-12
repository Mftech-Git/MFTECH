import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import termsImg from "../images/terms-of-service.jpg";
import starIcon from "../images/star-icon.png";

const TermsOfServicePage = () => {
return (
<Layout>
  <Navbar />

  <PageBanner pageTitle="Terms of Service" homePageText="Home" homePageUrl="/" activePageText="Terms of Service" />

  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>

  <section className="terms-of-service-area ptb-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12">
          <div className="terms-of-service-content">
            <img src={termsImg} alt="terms" />
            <p><i>Last Updated: [Insert Current Date Here]</i></p>
            <h3>Welcome to Mainframe Tech</h3>
            <p>
              Thank you for choosing Mainframe Tech for your IT training and resources. By accessing or using our services, you agree to be bound by these terms of service. These terms apply to all visitors, users, and others who wish to access or use our Service.
            </p>
            <h3>1. Services Offered</h3>
            <p>
              Mainframe Tech provides comprehensive IT training modules, including practical and applicable skills for the IT field, through various mediums such as interactive labs, video tutorials, and quizzes. We aim to empower users with the knowledge and skills required to excel in their IT careers.
            </p>
            <h3>2. Use of Our Services</h3>
            <p>
              Our services are designed to offer users an immersive learning experience. We encourage collaboration, questions, and active participation in all our modules. However, misuse of the services, including sharing copyrighted material, harassment, or any form of cheating, is strictly prohibited.
            </p>
            <h3>3. Account Registration and Security</h3>
            <p>
              To access certain features of our services, you may be required to create an account. It is crucial that the information you provide is accurate and up to date. You are responsible for maintaining the confidentiality of your account and password.
            </p>
            <h3>4. Intellectual Property Rights</h3>
            <p>
              All content provided on Mainframe Tech, including text, graphics, logos, and software, is the property of Mainframe Tech or its content suppliers and protected by international copyright laws.
            </p>
            <h3>5. User Contributions</h3>
            <p>
              Users may post, link, share, and otherwise contribute content, provided it does not infringe on intellectual property rights, is not illegal, and does not contain harmful software.
            </p>
            <h3>6. Termination</h3>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <h3>7. Modifications to the Service and Prices</h3>
            <p>
              Mainframe Tech reserves the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. Prices for our products are subject to change without notice.
            </p>
            <h3>8. Disclaimer and Limitation of Liability</h3>
            <p>
              Mainframe Tech's services are provided on an 'as is' and 'as available' basis. We do not warrant that the service will be uninterrupted, timely, secure, or error-free. In no event shall Mainframe Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at [Insert Contact Information].
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</Layout>
);
};

export const Head = () =>
<Seo title="Terms Of Service" />;

export default TermsOfServicePage;
