import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scroll } from "../theme"
import Scrollbar from 'smooth-scrollbar'
import SoftScrollPlugin from './plugins/SoftScrollPlugin'

const Scroll = (location, scrollerRef) => {
    
  useEffect(() => {

    console.log('initializing layout...');
    
    
    const scroller = scrollerRef.current
    
    Scrollbar.use(SoftScrollPlugin)
    
    const bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), { damping: 0.1, delegateTo: document, alwaysShowTracks: true })
    
    window.bodyScrollBar = bodyScrollBar
    
    gsap.registerPlugin(ScrollTrigger)
    
    ScrollTrigger.defaults({ scroller: scroller })
    
    ScrollTrigger.scrollerProxy('.scroller', {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value
        }
        return bodyScrollBar.scrollTop
      }
    })

    window.scroller = '.scroller'

    ScrollTrigger.refresh()
    bodyScrollBar.addListener(ScrollTrigger.update)


    
    return () => {
      // if (bodyScrollBar) bodyScrollBar.destroy()
      // bodyScrollBar.removeListener(ScrollTrigger.update)
    }
  }, [location])

  return null
}

export default Scroll