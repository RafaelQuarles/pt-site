import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const HeroContainer = styled.section`
  margin: 0 auto;
  padding: 4rem 1rem;
  height: 90vh;
  color: var(--clr-grey-10);
  text-shadow: 1px 1px var(--clr-grey-1);
  @media screen and (min-width: 1000px) {
    max-width: 66%;
  }
`
const HeroTitle = styled.h1``

const HeroSubTitle = styled.h4`
  margin: 2rem 0;
  font-size: 18px;
`
const HeroButton = styled.div``

const HeroSubText = styled.h5`
  margin: 2rem 0;
  font-size: 14px;
`

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
      <HeroContainer>
        <HeroTitle>BUILD YOUR DREAM BODY</HeroTitle>
        <HeroSubTitle>Work with Sam Seldor Certified Pro Trainer!</HeroSubTitle>
        <HeroButton>
          <Link to="/" className="btn">
            Click Here for Coaching or Custom Programs
          </Link>
        </HeroButton>

        <HeroSubText>
          View "Pricing" Tab for Coaching & Program Prices
        </HeroSubText>
      </HeroContainer>
    </BackgroundImage>
  )
}

export default Hero
