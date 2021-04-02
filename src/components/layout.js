import * as React from "react"
import Navbar from "./navbar"
import { Helmet } from "react-helmet"
// import Scroll from "./locomotive-scroll"
// import "../styles/locomotive-scroll.css"
import ScrollContainer from './ScrollContainer'

const Layout = ({ children, location }) => {

  return (
    <ScrollContainer scrollIntertia={40}>
      <div className="global-wrapper" data-scroll-container>
        {/* <Helmet htmlAttributes={{onScroll: () => console.log('Scrolled')}}></Helmet> */}

        <header className="global-header animate__animated animate__fadeIn w-full">
          <Navbar />
        </header>

        {/* <Scroll location={location}/> */}

        <main>{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with */}
          {` `}
          {/* <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        </footer>
      </div>
    </ScrollContainer>
  )
}

export default Layout
