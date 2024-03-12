import React from "react"
import Layout from "../../../components/_App/layout"
import starIcon from "../../../images/star-icon.png";
import Seo from "../../../components/_App/seo"
import Navbar from "../../../components/_App/Navbar"
import PageBanner from "../../../components/Common/PageBanner"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion"
import StartProject from "../../../components/Common/StartProject"
import Footer from "../../../components/_App/Footer"




const FAQPage = () => {
return (
<>
  <Layout>
    <Navbar />

    <PageBanner pageTitle="FAQ" homePageText="Home" homePageUrl="/" activePageText="FAQ" />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={starIcon} alt="star icon" style={{ marginBottom: '10px' }} />
    </div>
    <div className="ptb-100">
      <div className="container">
        <div className="faq-accordion">
          <Accordion allowZeroExpanded preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What services does Mainframe Tech offer?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Mainframe Tech offers a range of IT services including, but not limited to, systems and network administration, server management, virtualization, cybersecurity solutions, and IT consultancy. Our goal is to provide comprehensive IT support tailored to your specific needs.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How can Mainframe Tech enhance my business's IT infrastructure?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Our team specializes in evaluating and improving IT infrastructures to ensure they are secure, efficient, and scalable. By leveraging the latest technologies and best practices, we help businesses optimize their operations, protect against cybersecurity threats, and ensure continuity.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Can Mainframe Tech provide custom IT solutions for my specific industry?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes, we pride ourselves on our ability to adapt our services to meet the unique challenges and requirements of various industries. Whether you're in healthcare, finance, education, or any other sector, we can tailor our IT solutions to support your specific business goals.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What makes Mainframe Tech different from other IT service providers?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Our commitment to personalized service and ongoing support sets us apart. We believe in building long-term relationships with our clients, understanding their needs deeply, and providing services that grow along with their businesses. Plus, our educational and professional development focus ensures we're always at the forefront of IT innovations.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do I get started with Mainframe Tech?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Starting is simple. Contact us through our website, email, or phone. We'll schedule a consultation to discuss your needs, audit your current IT infrastructure if necessary, and provide a proposal for services that best fit your requirements and budget.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>

    <StartProject />

    <Footer />
  </Layout>
</>
);
};

export const Head = () =>
<Seo title="FAQ" />

export default FAQPage;
