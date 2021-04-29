import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Client Page can link to instagram account?</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
