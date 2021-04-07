import React, { useRef, useEffect, useState } from "react"
import Navbar from "./navbar"
import Scroll from './scroll'

const Layout = ({ children, location }) => {
  
  let scrollerRef = useRef()
  let [scrollDefined, setScrollDefined] = useState(false)

  const initScroll = () => {
    Scroll(scrollerRef)
    setScrollDefined(true)
  }

  useEffect(() => {
    initScroll()
  }, [location])
  
  return (
    <div className="global-wrapper scroller h-screen overflow-hidden" ref={scrollerRef}>

      <header className="global-header animate__animated animate__fadeIn">
        <Navbar />
      </header>
    
      <main>{ scrollDefined && children }</main>

      <footer>
        {/* © {new Date().getFullYear()}, Built with */}
        {` `}
        {/* <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
      
    </div>
  )
}

export default Layout
