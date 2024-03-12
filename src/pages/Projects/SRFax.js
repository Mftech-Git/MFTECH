import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import SRFaxContent from "../../components/Projects/SRFax-Content"
import Footer from "../../components/_App/Footer"

const SRFaxPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="HIPPA Compliant Fax Migration"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Completed Projects > HIPPA Compliant Fax Migration"
      />

      <SRFaxContent />

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

export default SRFaxPage
