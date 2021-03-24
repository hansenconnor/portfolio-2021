import * as React from "react"
import Navbar from "./navbar"
// import { Helmet } from "react-helmet"
import Scroll from "./locomotive-scroll"
import "../styles/locomotive-scroll.css"

const Layout = ({ children, location }) => {

  return (
    <div className="global-wrapper" data-scroll-container>
      {/* <Helmet htmlAttributes={{class : "bg-gray-50"}}></Helmet> */}
      <header className="global-header animate__animated animate__fadeIn">
        <Navbar />
      </header>

      <Scroll />

      <main>{children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with */}
        {` `}
        {/* <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
