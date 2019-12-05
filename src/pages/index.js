import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const HeaderStyle = styled.div`
  margin: 0 auto;
  max-width: auto;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Laura Badgley</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

