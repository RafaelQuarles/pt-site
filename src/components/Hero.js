import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { FaAngleDoubleDown } from "react-icons/fa"

const HeroContainer = styled.section`
  margin: 0 auto;
  padding: 4rem 1rem;
  height: 90vh;
  color: var(--clr-grey-10);
  text-shadow: 1px 1px var(--clr-grey-1);
  @media screen and (min-width: 1000px) {
    max-width: 66%;
    padding: 15vw 1rem;
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

const ScrollDown = styled.div`
  position: absolute;
  color: white;
  bottom: 5rem;
  left: 48%;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    left: 46%;
  }
  :hover {
    bottom: 4.5rem;
    transition: 1s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
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
        <ScrollDown>
          <a href="#ds">
            <FaAngleDoubleDown size="40px" />
          </a>
        </ScrollDown>
      </HeroContainer>
      <div id="ds"></div>
    </BackgroundImage>
  )
}

export default Hero
