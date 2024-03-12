import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import NinjaContent from "../../components/Projects/Ninja-Content"
import Footer from "../../components/_App/Footer"

const NinjaPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Ninja RMM Implementation"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Completed Projects > Ninja RMM Implementation"
      />

      <NinjaContent />

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

export default NinjaPage
