import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import privacyPolicy from "../images/privacy-policy.jpg";
import starIcon from "../images/star-icon.png";

const PrivacyPolicyPage = () => {

  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
return (
<Layout>

  <Navbar />

  <PageBanner pageTitle="Privacy Policy" homePageText="Home" homePageUrl="/" activePageText="Privacy Policy" />

  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
  </div>

  <section className="privacy-policy-area ptb-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12">
          <div className="privacy-policy-content">
            <img src={privacyPolicy} alt="Privacy Policy" />
            <p>
              <i>
                This Privacy Policy was last updated on <span style={{ fontWeight: 'bold', color: '#224907' }}>{lastUpdatedDate}</span>.
              </i>
            </p>
            <h3>1. Introduction</h3>
            <p>
              At Mainframe Tech, your privacy is paramount. We are committed to protecting your personal information and being transparent about the information we collect about you and what we do with it.
            </p>
            <h3>2. Information We Collect</h3>
            <p>
              We collect limited information but only to provide better services to all our users – from figuring out basic stuff like which language you speak, to more complex things like which services you’ll find most useful. The information Mainframe Tech collects, and how that information is used, depends on how you use our services and how you manage your privacy controls.
            </p>
            <h3>3. How We Use Information</h3>
            <p>
              We use the information we collect from our services to provide, maintain, protect, and improve them, to develop new ones, and to protect Mainframe Tech and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
            </p>
            <h3>4. Information Security</h3>
            <p>
              We work hard to protect Mainframe Tech and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. In particular:
              <ul>
                <li>We encrypt many of our services using SSL.</li>
                <li>We offer you two-step verification when you access your Mainframe Tech Account.(Coming Soon)</li>
                <li>We review our information collection, storage, and processing practices, including physical security measures, to prevent unauthorized access to our systems.</li>
              </ul>
            </p>
            <h3>5. Accessing and Updating Your Personal Information</h3>
            <p>
              Whenever you use our services, we aim to provide you with access to your personal information. If that information is wrong, we strive to give you ways to update it quickly or to delete it – unless we have to keep that information for legitimate business or legal purposes.
            </p>
            <h3>6. Changes</h3>
            <p>
              Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes).
            </p>
            <h3>7. Contact</h3>
            <p>
              For questions about these or any Mainframe Tech terms or policies, email us at [Insert Contact Email].
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

/**
* Head export to define metadata for the page
*
* See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
*/
export const Head = () =>
<Seo title="Privacy Policy" />

export default PrivacyPolicyPage;
