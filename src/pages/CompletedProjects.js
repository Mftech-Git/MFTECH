import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import CompletedProjectsContent from "../components/Projects/Completed-Projects"
import Footer from "../components/_App/Footer"

const CompletedProjectsPage = () => {
  return (

    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Completed Projects"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Completed Projects"
      />

      <CompletedProjectsContent />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About Us" />

export default CompletedProjectsPage
