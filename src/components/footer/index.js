import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Facebook, Twitter, Instagram, Globe } from "react-feather"
import "./styles.scss"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          socialMedia {
            facebook
            twitter
            instagram
            etsy
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata.socialMedia

  return (
    <div id="footer-wrap" className="bg-light pt-4 pb-5">
      <div className="container-lg">
        <div className="col">
          <Link
            className="btn btn-link text-muted font-weight-bold px-0 mr-3"
            activeClassName="active"
            to="/policies">
            Order
          </Link>

          <Link
            className="btn btn-link text-muted font-weight-bold px-0"
            activeClassName="active"
            to="/policies">
            Policies
          </Link>
        </div>
        <div className="col mt-3 text-muted text-sm d-flex justify-content-between align-items-center">
          <div>
            &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
          </div>
          <div className="social-links">
            <a
              className="btn btn-link"
              target="_blank"
              rel="noreferrer"
              href={social.facebook}>
              <Facebook size={18} />
            </a>
            <a
              className="btn btn-link"
              target="_blank"
              rel="noreferrer"
              href={social.twitter}>
              <Twitter size={18} />
            </a>
            <a
              className="btn btn-link"
              target="_blank"
              rel="noreferrer"
              href={social.instagram}>
              <Instagram size={18} />
            </a>
            <a
              className="btn btn-link"
              target="_blank"
              rel="noreferrer"
              href={social.etsy}>
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
