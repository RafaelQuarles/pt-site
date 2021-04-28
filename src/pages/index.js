import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import ServicesOne from "../components/ServicesOne"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ServicesOne />
  </Layout>
)

export default IndexPage
