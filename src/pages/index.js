import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Will Thorne - about me - github link - resume - contact
    <About />
  </Layout>
)

export default IndexPage
