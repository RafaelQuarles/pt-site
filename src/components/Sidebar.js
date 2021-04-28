import React from "react"
import logo from "../assets/logo.svg"
import { Link } from "gatsby"
import PageLinks from "../constants/links"
import SocialLinks from "../constants/socialLinks"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side-logo">
        <Link to="/">
          {/* <img src={logo} alt="logo" /> */}
          <h3>Sam Seldor fitness</h3>
        </Link>
      </div>
      <PageLinks className="side-links" />
      <SocialLinks className="side-social" />
    </div>
  )
}

export default Sidebar
