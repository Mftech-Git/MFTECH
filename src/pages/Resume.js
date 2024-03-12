import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import ResumeContent from "../components/AboutUs/Resume-Content"
import Footer from "../components/_App/Footer"

const ResumePage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Resume"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Resume"
      />
      <ResumeContent />
      
      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="History" />

export default ResumePage
