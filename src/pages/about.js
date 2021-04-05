import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import gsap from 'gsap'
import '../styles/about.scss'
import { AnimationActionLoopStyles } from "three";
import jumping from '../images/20180929-DSC05418.jpg'
import CustomLink from '../components/custom-link'

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

function initHeroParallax(ref, containerRef) {
  gsap.fromTo(ref.current, {
    backgroundPosition: '50% 100%',
  }, {
    backgroundPosition: '50% 0%',
    ease: 'none',
    scrollTrigger: {
      trigger: containerRef.current,
      scrub: true,
      start: 'top bottom',
      end: 'bottom top'
    }
  })
}

function About() {

  const heroParallaxRef = useRef()
  const aboutHeroParallax = useRef()

  useEffect(() => {
    console.log('About use effect');

    // gsap.registerPlugin(ScrollTrigger)

    // Initialize hero parallax
    initHeroParallax(heroParallaxRef, aboutHeroParallax)

    // Initialize hero marquee
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

      <section ref={aboutHeroParallax} className="about-parallax">
        <div ref={heroParallaxRef} className="about-parallax__content py-32 min-h-3/4-screen bg-gray-400" style={{background: `url(${jumping})`, backgroundSize: 'auto 150%', backgroundRepeat: 'no-repeat'}} />
      </section>

      <section className="lg:text-center min-h-1/2-screen flex items-center justify-center">
        <div className="flex flex-col lg:items-center py-32">
          <div className="w-100">
            <h1>
              Building the Future of<br/>Interactive Experience Design
            </h1>
          </div>
          <div className="w-full lg:w-5/6 xl:w-3/4">
            <h4 className="text-gray-500 lg:text-center mt-12 leading-normal">I’m focused on solving complex design interaction problems for individuals and startups in emerging tech spaces like Blockchain, Machine Learning and Edge Computing.</h4>
          </div>  
        </div>
      </section>

      <section>

      </section>
    </div>
  )
  
}



export default About