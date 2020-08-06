import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Helmet
      title={`
        ${props.title && props.title + " | "}
        ${data.site.siteMetadata.title}`}
      htmlAttributes={{ lang: "en" }}>
      <meta
        name="description"
        content={
          props.description
            ? props.description
            : data.site.siteMetadata.description
        }
      />
    </Helmet>
  )
}

export default Head
