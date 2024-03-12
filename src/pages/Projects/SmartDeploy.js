import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import SmartDeployContent from "../../components/Projects/SmartDeploy-Content"
import Footer from "../../components/_App/Footer"

const SmartDeployPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="WDS with SmartDeploy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Completed Projects > WDS w/ SmartDeploy"
      />

      <SmartDeployContent />

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

export default SmartDeployPage
