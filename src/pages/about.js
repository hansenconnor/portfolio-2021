import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import gsap from 'gsap'
import '../styles/about.scss'
import { AnimationActionLoopStyles } from "three";

let animations = []

function initMarquee() {

  // Kill animation if exists
  animations.forEach(a => a.progress(0).kill())

  // Marquee speed (pixels per second)
  let velocity = 150;
  
  let offset = 0
  let itemWidth = 0
  let rowWidth = 0
  
  let marqueeItems = gsap.utils.toArray('.about-hero__marquee-item')

  // Get row width
  marqueeItems.forEach(e => {
    rowWidth += e.getBoundingClientRect().width
  })
  
  // Animation Loop
  marqueeItems.forEach((e, i) => {

    gsap.set(e, {x: 0})
    
    itemWidth = e.getBoundingClientRect().width
    
    let tl = new gsap.timeline({ repeat: -1 });
    
    // Animate item to end of row
    tl.to(e, {
      ease: "none",
      duration: ((rowWidth - offset - itemWidth) / velocity),
      x: (rowWidth - offset - itemWidth),
    });
        
    // Send item to beginning
    tl.to(e, {
      ease: "none",
      duration: 0,
      x: ((offset + itemWidth) * -1)
    })
    
    // Animate to original position
    tl.to(e, {
      ease: "none",
      duration: ((offset + itemWidth) / velocity),
      x: 0
    })
    
    // Increment offset
    offset += itemWidth

    animations.push(tl)
  })
}

function About() {

  useEffect(() => {
    initMarquee()
    
    var timer
    function handleResize() {
      clearTimeout(timer)
      timer = setTimeout(initMarquee, 500)
    }

    window.addEventListener('resize', handleResize)

    return(() => {
      window.removeEventListener('resize', handleResize)
    })
    
  }, [])

  return (
    <div className="page">
      <SEO title="About" />
      <section className="about-hero">
        <div className="about-hero__content py-32 min-h-3/4-screen flex items-center">
          <header className="flex flex-col justify-center w-full">
            <h1 className="font-medium mx-auto">👋🏼 Hi, I'm Connor</h1>
            <div className="about-hero__marquee w-full">
              <div className="about-hero__marquee-row" role="marquee">
                <div className="about-hero__marquee-item">
                  <span className="about-hero__marquee-item-text">Bespoke Designer</span>
                </div>
                <div className="about-hero__marquee-item about-hero__marquee-item--stroke">
                  <span className="about-hero__marquee-item-text">Web Developer</span>
                </div>
                <div className="about-hero__marquee-item">
                  <span className="about-hero__marquee-item-text">Awwwards Judge</span>
                </div>
                <div className="about-hero__marquee-item about-hero__marquee-item--stroke">
                  <span className="about-hero__marquee-item-text">Digital Artist</span>
                </div>
                <div className="about-hero__marquee-item">
                  <span className="about-hero__marquee-item-text">Storyteller</span>
                </div>
                <div className="about-hero__marquee-item about-hero__marquee-item--stroke">
                  <span className="about-hero__marquee-item-text">Dribbbler</span>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="about-parallax">
        <div className="about-parallax__content py-32 min-h-3/4-screen bg-gray-400">
          
        </div>
      </section>
    </div>
  )
  
}



export default About