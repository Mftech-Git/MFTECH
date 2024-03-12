import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import LinkedInRecommendation from "../../components/AboutUs/LinkedInContent"
import Footer from "../../components/_App/Footer"


const LinkedInPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Testimonials"
      />

      <LinkedInRecommendation />


      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Testimonials" />

export default LinkedInPage
