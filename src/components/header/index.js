import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import useGlobalState from "src/hooks/use-global-state"

import { Menu } from "react-feather"

import "./styles.scss"

const Header = () => {
  const { appState, dispatch } = useGlobalState()
  const [state, setState] = useState({ showNav: false })
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const toggleCart = e => {
    e.preventDefault()
    dispatch({ type: "TOGGLE_CART", payload: !appState.showCart })
  }
  return (
    <>
      <nav
        id="navbar-header"
        className="navbar navbar-expand-md navbar-dark bg-secondary position-relative">
        <div className={`container-fluid nav-container`}>
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setState({ ...state, showNav: !state.showNav })}>
            <Menu color="white" />
          </button>

          <button className="navbar-brand btn" onClick={toggleCart}>
            {data.site.siteMetadata.title}
          </button>

          <div
            className={`collapse navbar-collapse ${
              state.showNav ? "show" : ""
            }`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <button className="btn btn-cart" type="button" onClick={toggleCart}>
            {appState.cart.items && appState.cart.items.length > 0 && (
              <span className="count bg-dark text-light">
                {appState.cart.items.length}
              </span>
            )}
            <svg width="29" height="26">
              <path
                fill="#fff"
                d="M28.165 3.152H6.259V.788C6.151.211 5.276 0 4.694 0H.782A.955.955 0 000 .788a.955.955 0 00.782.788h3.912l3.13 18.909a3.679 3.679 0 00-.782 2.364A3.074 3.074 0 0010.171 26c1.782 0 3.912-1.357 3.912-3.152 0-.48-.543-1.161-.782-1.576h7.041c-.239.415 0 1.1 0 1.576A3.074 3.074 0 0023.471 26a3.074 3.074 0 003.129-3.152 3.19 3.19 0 00-.782-2.364c-.131-.52-.988-.788-1.565-.788H9.388l-.782-3.152h17.212c.573 0 .665-.223.782-.788l2.347-11.03c.153-.756-.015-1.574-.782-1.574zm-16.43 19.696a1.539 1.539 0 01-1.565 1.576 1.539 1.539 0 01-1.564-1.576 1.539 1.539 0 011.565-1.576 1.539 1.539 0 011.564 1.576zm11.736 1.576a1.539 1.539 0 01-1.565-1.576 1.539 1.539 0 011.565-1.576 1.539 1.539 0 011.565 1.576 1.539 1.539 0 01-1.565 1.576zm1.565-9.455H8.606L7.041 4.727h20.341z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  )
}
export default Header
