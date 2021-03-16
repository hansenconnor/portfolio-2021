import * as React from "react"
import Navbar from "./navbar"
import { Helmet } from "react-helmet"
import Scrollbar from "smooth-scrollbar"
// import { Link } from "gatsby"


class Layout extends React.Component {

  componentDidMount() {
    // Scrollbar.init(document.querySelector('body'), {
    //   damping: 0.08
    // });
  }

  render() {
    return (
      <div className="global-wrapper">
        <Helmet htmlAttributes={{class : "bg-gray-50"}}></Helmet>
        <header className="global-header">
          <Navbar />
        </header>
        <main>{this.props.children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with */}
          {` `}
          {/* <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        </footer>
      </div>
    )
  }
}

export default Layout
