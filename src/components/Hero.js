import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero-dark.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className=""
      fluid={imageData}
      backgroundColor={`#040e18`}
      style={{ width: "100%", backgroundPosition: "top center" }}
    >
      <section className="section hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <h1>BUILD YOUR DREAM BODY</h1>
            <p>Work with NASM Certified Pro Trainer!</p>
            <Link to="/" className="btn">
              Click Here for Coaching or Custom Programs
            </Link>
          </article>
        </div>
      </section>
    </BackgroundImage>
  )
}

const StyledHero = styled(Hero)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default Hero
