import React, { useState, useEffect, useRef } from "react"
import * as THREE from 'three'
import SEO from "../components/seo"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import collage from "../images/collage-small.png"
import CustomLink from "../components/custom-link"

import useBlobMatPropStore from '../store'
import AppScene from './scene'

function Index() {

  let [intensity, setIntensity] = useState(0.25)
    

    // const color = useBlobMatPropStore(s => s.color)
    // const waves = useBlobMatPropStore(s => s.waves)
    // const color = useBlobMatPropStore.getState().color // Get non-reactive fresh state

    // const setColor = useBlobMatPropStore(state => state.setColor)
    // const setClearColor = useBlobMatPropStore(state => state.setClearColor)
    // const setWaves = useBlobMatPropStore(state => state.setWaves)
    // const setSpeed = useBlobMatPropStore(state => state.setSpeed)


  const redRef = useRef(null)
  const greenRef = useRef(null)
  const blueRef = useRef(null)
  const clientsRef = useRef()

  useEffect(() => {

    console.log(window.scroll)
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    // ScrollTrigger.addEventListener('refresh', () => window.scroll.update())

    // ScrollTrigger.refresh()

    // Initialize ThreeJS Blob Scene
    

    // return () => {
    //   console.log('destroying scroller')
    //   scroller.destroy()
    // }
    window.scroll.update()
  }, []);


  function rgb(rgb) {
    var c = new THREE.Color(`rgb(${rgb.r}, ${rgb.b}, ${rgb.b})`)
    var hex = c.getHex()
    return hex
  }

    return (
      <>
        <SEO title="Connor Hansen" />
        <div className="page">
          
          <section>
            <h2 id="heroText" className="inline-block" data-scroll data-scroll-speed="3">
              <span className="inline-block animate__animated animate__fadeInUp"><span className="text-gray-500">Design engineer combining</span> creativity, technology,</span>
              <span className="inline-block animate__animated animate__fadeInUp animate__delay-1s"> design and strategy <span className="text-gray-500">to help brands</span> exceed their goals </span>
              <span className="inline-block animate__animated animate__fadeInUp animate__delay-2s"><span className="text-gray-500">and ultimately</span> build better businesses.</span></h2>

            <div className="flex justify-end" data-scroll data-scroll-speed="1">
              <div className="relative overflow-hidden cursor-pointer rounded-full" onClick={() => window.scroll.scrollTo(clientsRef.current)} style={{width:"20vw", height:"20vw"}}>
                <svg id="svg_circle" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{width:"20vw", height:"20vw"}} viewBox="0 0 101 101">
                  <defs>
                  </defs>
                  <circle style={{ strokeWidth: "0.5" }} className="st0" cx="50.5" cy="50.5" r="50"/>
                </svg>
                <svg id="svg_arrow" style={{width:"1.5vw", height:"1.5vw"}} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7656 10.6719L20.4375 10.3438C20.2031 10.1094 19.875 10.1094 19.6406 10.3438L11.2969 18.6875V1.0625C11.2969 0.78125 11.0156 0.5 10.7344 0.5H10.2656C9.9375 0.5 9.70312 0.78125 9.70312 1.0625V18.6875L1.3125 10.3438C1.07812 10.1094 0.75 10.1094 0.515625 10.3438L0.1875 10.6719C-0.046875 10.9062 -0.046875 11.2344 0.1875 11.4688L10.0781 21.3594C10.3125 21.5938 10.6406 21.5938 10.875 21.3594L20.7656 11.4688C21 11.2344 21 10.9062 20.7656 10.6719Z" fill="black"/>
                  </svg>
              </div>
            </div>
          </section>


          <section ref={clientsRef} className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="col-span-1 overflow-hidden bg-gray-100">
                <figure data-scroll data-scroll-speed="1" style={{ height: "30vw", minHeight: "350px" }}>
                  <img src={collage} alt="" style={{ transform: "scale(2)"}}/>
                </figure>
              </div>
              <div className="flex items-center md:justify-center">
                <div>
                  <h3 className="gsap-fade-in"><span className="block">Fashion, Tech, Real Estate</span><span className="block">Healthcare and More</span></h3>
                  <p className="gsap-fade-in mb-8 mt-6"><span className="block">I’ve completed projects for a variety of</span><span className="block">industries and individuals.</span></p>
                  <CustomLink className="gsap-fade-in" to="/showcase">Check out my work</CustomLink>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="flex items-center" style={{ height: "20vh", minHeight: "256px"}}>
            <h1 className="font-medium">Featured Projects</h1>
          </section>

          {/* Parallax Collage */}
          <section style={{ height: "66vh" }}>
            <div className="parallax-wrapper overflow-hidden bg-gray-100">
              <figure data-scroll data-scroll-speed="2" style={{ height: "83.33%", minHeight: "350px" }}>
                <img src={collage} alt="Design Collage" style={{ transform: "scale(2)"}} />
              </figure>
            </div>
          </section>


          <section className="copy-scroll-section text-center min-h-screen flex items-center justify-center">
            <div className="container">
              <div className="grid grid-cols-8">
                <div className="col-span-full">
                  <h1>
                    Building the future of interactive experience design
                    {/* <span className="typography-hero-bullets text-5xl font-black text-gray-800 mb-4" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2"></span>
                    <span className="typography-hero-bullets text-5xl font-black text-gray-800" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">interactive experience design</span> */}
                  </h1>
                </div>
                <div className="col-span-full xl:col-span-6 xl:col-start-2">
                  <h4 className="text-gray-500 text-center mt-12 leading-normal">I’m focused on solving complex design interaction problems for individuals and startups in emerging tech spaces like Blockchain, Machine Learning and Edge Computing.</h4>
                  <CustomLink to="/about" className="inline-block mt-24">Learn more about me</CustomLink>
                </div>  
              </div>
            </div>
          </section>


          {/* <section id="verticals" className="h-screen flex items-center relative w-full overflow-hidden">
            <div className="grid grid-cols-2 gap-6 h-full w-full">
              
              <div className="flex items-center">
                <div className="relative w-full overflow-hidden h-80">
                  <div ref={redRef} className="panel absolute h-full w-full red text-black">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eligendi necessitatibus ea. Labore ipsam itaque corrupti. Ea quod molestias architecto, ratione enim voluptatibus adipisci ipsa dolores nihil ipsum id?</p>
                  </div>
                  <div ref={greenRef} className="panel absolute h-full w-full green">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eligendi necessitatibus ea. Labore ipsam itaque corrupti. Ea quod molestias architecto, ratione enim voluptatibus adipisci ipsa dolores nihil ipsum id?</p>
                  </div>
                  <div ref={blueRef} className="panel absolute h-full w-full blue">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eligendi necessitatibus ea. Labore ipsam itaque corrupti. Ea quod molestias architecto, ratione enim voluptatibus adipisci ipsa dolores nihil ipsum id?</p>
                  </div>    
                </div>
              </div>

              <div className="flex items-center">
                <AppScene />
              </div>

            </div>
          </section> */}

          <section className="min-h-screen">
            another section
          </section>
          <section className="min-h-screen">
            another section
          </section>
          <section className="min-h-screen"></section>

        </div>
      </>
    )
}

export default Index
