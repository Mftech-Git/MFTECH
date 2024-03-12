import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import VoIPContent from "../../components/Projects/VoIP-Content"
import Footer from "../../components/_App/Footer"

const VoIPPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="VoIP Migration with GoToConnect"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Completed Projects > VoIP Migration with GoToConnect"
      />

      <VoIPContent />

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

export default VoIPPage
