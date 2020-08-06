import React from "react"
import Header from "src/components/header"
import Footer from "src/components/footer"
import "src/assets/styles/index.scss"

const Layout = props => {
  return (
    <>
      <Header />
      <div id="main-content" className="container-lg py-5">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
