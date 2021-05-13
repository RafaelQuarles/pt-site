import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SocialLinks from "../constants/socialLinks"

const FooterContainer = styled.div`
  background: var(--clr-grey-1);
  padding: 3rem 0;
  text-align: center;
  @media screen and (max-width: 1000px) {
    padding: 1rem 0;
  }
`

const FooterText = styled.h4`
  color: var(--clr-grey-10);
  text-decoration: none;
  font-size: 14px;
  position: relative;
  bottom: -2rem;

  a {
    color: var(--clr-grey-10);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-5);
    letter-spacing: 4px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 10px;
    bottom: 1rem;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks />
      <FooterText>
        &copy; Developed by{" "}
        <Link href="https://rafaelquarles.com">Rafael Quarles</Link>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
