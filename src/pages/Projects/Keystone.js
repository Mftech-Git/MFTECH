import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import KeystoneContent from "../../components/Projects/Keystone-Content"
import Footer from "../../components/_App/Footer"

const KeystonePage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Keystone Infrastructure Project"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Completed Projects > Keystone Infrastructure Project"
      />

      <KeystoneContent />

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

export default KeystonePage
