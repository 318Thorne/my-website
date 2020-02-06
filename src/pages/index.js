import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import SkillsList from "../components/skills/skills-list"
import MoreInfo from "../components/more-info"

const skillsPlaceholder = [{ title: "frontend", skills: ["react.js"] }]
const moreInfoPlaceholder = {
  title: "More Info Placeholder",
  description: "want to know more about me? follow these links to learn more",
  links: [{ text: "github", url: "https://github.com/318thorne" }],
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Will Thorne - about me - github link - resume - contact
    <About />
    <SkillsList skillCategories={skillsPlaceholder} />
    <MoreInfo {...moreInfoPlaceholder} />
  </Layout>
)

export default IndexPage
