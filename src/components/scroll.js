import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar'
import SoftScrollPlugin from './plugins/SoftScrollPlugin'
import '../styles/smooth-scrollbar.css'

const Scroll = (scrollerRef) => { 
  
  const scroller = scrollerRef.current
  
  Scrollbar.use(SoftScrollPlugin)
  
  const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true })
  
  window.bodyScrollBar = bodyScrollBar
  
  gsap.registerPlugin(ScrollTrigger)
  
  ScrollTrigger.defaults({ scroller: scroller })
  
  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value
      }
      return bodyScrollBar.scrollTop
    }
  })

  ScrollTrigger.refresh()
  bodyScrollBar.addListener(ScrollTrigger.update)

  bodyScrollBar.scrollTo(0, 0, 0)
  console.log('Scolled');
}

export default Scroll