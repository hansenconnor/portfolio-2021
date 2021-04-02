import React, { useCallback, useEffect, useRef } from "react"
import { useSpring, animated } from 'react-spring'
import SEO from "../components/seo"

function Contact() {

    const footerRef = useRef()

    const [animatedStyles, set] = useSpring(() => ({transform: "translateY(-50%)", zIndex: "-1"}))
    
    function onScroll() {

      let topDistFromTop = footerRef.current.offsetTop - window.pageYOffset;

      let percentInView = ((window.innerHeight - topDistFromTop) / window.innerHeight) * 100

      // Normalize percentage
      percentInView = percentInView >= 100 ? 100 : percentInView <= 0 ? 0 : percentInView

      if (percentInView >= 0 && percentInView <= 100) {
        set({transform: `translateY(${ -50 + (percentInView / 2) }%)`})
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', onScroll)

      return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="page">

          <section className="screen h-screen bg-red-400">
            <h2>Scroll</h2>
          </section>

          <section ref={footerRef} className="h-screen bg-gray-900 overflow-hidden">
            {/* <animatedFooterContent /> */}
            <animated.div style={animatedStyles} className="footer-content bg-gray-400 py-32 h-full flex items-center">
              <h2>Footer Content</h2>
            </animated.div>
          </section>

          <section className="min-h-screen">

          </section>

        </div>
    )
}

export default Contact