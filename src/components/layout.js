import React, { useRef, useEffect } from "react"
import Navbar from "./navbar"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar'
// import "../styles/locomotive-scroll.css"
import Scroll from './locomotive-scroll'
import scrollbarStyles from '../styles/smooth-scrollbar.css'


const Layout = ({ children, location }) => {
  
  const scrollerRef = useRef()

  // useEffect(() => {

  //   console.log('initializing layout...');
    
  //   gsap.registerPlugin(ScrollTrigger)
    
  //   const scroller = scrollerRef.current

  //   const bodyScrollBar = Scrollbar.init(scrollerRef.current, { damping: 0.1, delegateTo: document, alwaysShowTracks: true })

  //   window.bodyScrollBar = bodyScrollBar

  //   ScrollTrigger.scrollerProxy(scrollerRef.current, {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         bodyScrollBar.scrollTop = value
  //       }
  //       return bodyScrollBar.scrollTop
  //     }
  //   })

  //   window.scroller = scrollerRef.current

  //   ScrollTrigger.refresh()
  //   bodyScrollBar.addListener(ScrollTrigger.update)

  //   ScrollTrigger.defaults({ scroller: scroller })

    
  //   return () => {
  //     if (bodyScrollBar) bodyScrollBar.destroy()
  //     bodyScrollBar.removeListener(ScrollTrigger.update)
  //   }
  // }, [location])
  
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
