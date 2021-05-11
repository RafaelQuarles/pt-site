import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesOne from "../components/ServicesOne"
import Hero from "../components/Hero"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"
import Programs from "../components/Programs"
import GalleryHex from "../components/GalleryHex"
import GallerySlide from "../components/GallerySlide"

const SocialLinksContainer = styled.div`
  display: grid;
  background: var(--clr-grey-1);
  color: var(--clr-grey-10);
  justify-content: center;
  text-align: center;
  padding-top: 3rem;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <SocialLinksContainer>
      <h4>Social</h4>
      <SocialLinks />
    </SocialLinksContainer>
    <ServicesOne />
    <GalleryHex />
    <Programs />
    <GallerySlide />
  </Layout>
)

export default IndexPage
