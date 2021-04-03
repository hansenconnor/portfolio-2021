import React, { useRef, useEffect } from "react"
import Navbar from "./navbar"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar'
import Scroll from './locomotive-scroll'
import scrollbarStyles from '../styles/smooth-scrollbar.css'


const Layout = ({ children, location }) => {
  
  const scrollerRef = useRef()
  
  return (
    <div className="global-wrapper scroller h-screen overflow-hidden" ref={scrollerRef}>
      <Scroll location={location} scrollerRef={scrollerRef} />

      <header className="global-header animate__animated animate__fadeIn">
        <Navbar />
      </header>

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
