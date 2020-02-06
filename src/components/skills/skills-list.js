import React from "react"
import Category from "./category"

const SkillsList = ({ skillCategories }) => (
  <div>
    {skillCategories &&
      skillCategories.map(skill => <Category key={skill.title} {...skill} />)}
  </div>
)

export default SkillsList
