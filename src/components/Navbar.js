import React from "react"
import logo from "../assets/logo.svg"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <div className="nav-logo">
            <Link to="/">
              <h3>Sam Seldor fitness</h3>
            </Link>
          </div>
          <button type="button" className="toggle-btn">
            <FaBars></FaBars>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
