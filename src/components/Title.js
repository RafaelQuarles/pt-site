import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title title-white">
      <h4>{title || "default title"}</h4>
    </div>
  )
}

export default Title
