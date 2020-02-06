import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import SkillsList from "../components/skills/skills-list"

const skillsPlaceholder = [{ title: "frontend", skills: ["react.js"] }]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Will Thorne - about me - github link - resume - contact
    <About />
    <SkillsList skillCategories={skillsPlaceholder} />
  </Layout>
)

export default IndexPage
