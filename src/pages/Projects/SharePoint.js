import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import SharePointContent from "../../components/Projects/SharePoint-Content"
import Footer from "../../components/_App/Footer"

const SharePointPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="SharePoint Migration"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Completed Projects > SharePoint Migration"
      />

      <SharePointContent />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Case Details" />

export default SharePointPage
