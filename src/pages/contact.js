import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "src/components/layout"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiContact {
        description
      }
    }
  `)

  return (
    <Layout>
      <h1>Contact</h1>
      <p className="mt-3">{data.strapiContact.description}</p>
    </Layout>
  )
}

export default ContactPage
