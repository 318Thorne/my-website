import React from "react"

const Category = ({ title, skills }) => (
  <div>
    <h3>{title}</h3>
    {skills && (
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    )}
  </div>
)

export default Category
