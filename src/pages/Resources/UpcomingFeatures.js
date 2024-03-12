import React from "react";
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/_App/Footer"
import UpcomingFeatures from "../../components/ComingSoon/UpcomingContent";

const UpcomingFeaturesPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Upcoming Features"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Projects Coming Soon"
      />

      <UpcomingFeatures />

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

export default UpcomingFeaturesPage
