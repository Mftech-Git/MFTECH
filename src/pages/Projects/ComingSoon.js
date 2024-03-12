import React from "react";
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/_App/Footer"
import ComingSoonContent from "../../components/Projects/ComingSoon-Content";

const ProjectsCSPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Coming Soon"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Coming Soon"
      />

      <ComingSoonContent />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title=" HIPPA Compliant Fax Migration" />

export default ProjectsCSPage
