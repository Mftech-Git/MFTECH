import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Banner from "../components/Index/Banner"
import Footer from "../components/_App/Footer"
import LoadingAnimation from "../components/SpecialEffects/LoadingAnimation"


const IndexPage = () => (
  <Layout>

    <LoadingAnimation />

    <Navbar />

    <Banner />

    <Footer />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
