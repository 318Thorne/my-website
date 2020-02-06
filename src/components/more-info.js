import React from "react"

const MoreInfo = ({ title, description, links }) => (
  <div>
    <h2>{title}</h2>
    <div>{description}</div>
    {links && links.map(link => <a href={link.url}>{link.text}</a>)}
  </div>
)

export default MoreInfo
