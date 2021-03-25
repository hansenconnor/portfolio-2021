import React, { useState, useEffect, useRef } from "react"
import * as THREE from 'three'
// import { Spring } from "react-spring/renderprops"
// import VisibilitySensor from "react-visibility-sensor"
// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
// import Layout from "../components/layout"
import SEO from "../components/seo"
// import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import collage from "../images/collage-small.png"
import CustomLink from "../components/custom-link"
// import * as THREE from 'three'
// import { Canvas, useFrame } from 'react-three-fiber'
import BlobScene from '../components/blob-scene'
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

  useEffect(() => {

    // gsap.registerPlugin(ScrollTrigger)
  
    // TODO: Destroy on cleanup
    // window.scroll.on('scroll', ScrollTrigger.update)

    // Fade in elements with class
    // gsap.utils.toArray(".gsap-fade-in").forEach(e => {

    //   gsap.fromTo(e, {
    //     autoAlpha: 0
    //   },{
    //     autoAlpha: 1,
    //     scrollTrigger: {
    //       trigger: e,
    //       scroller: '#___gatsby',
    //       start: "top 80%",
    //       end: "top 50%",
    //       scrub: true,
    //       markers: false,
    //     }
    //   });
    // });

    // Handle Parallax
    // TODO: Convert to timeline
    gsap.fromTo(".parallax", {
      autoAlpha: 0,
      backgroundPosition: `center 100%`
    },{
      autoAlpha: 1,
      backgroundPosition: `center 25%`,
      scrollTrigger: {
        trigger: ".parallax",
        scroller: window.scroller,
        start: "top 80%",
        end: "top top",
        scrub: true,
        markers: false,
      }
    });

    // Verticals Pinned Section Story
    const tl = gsap.timeline();

    // Set default configuration from store
    // ? Simplify ?
    let iConfig = {
      color:  useBlobMatPropStore.getState().testColor, // Get non-reactive fresh state,
      clearColor:  useBlobMatPropStore.getState().clearColor,
      waves: useBlobMatPropStore.getState().waves,
      speed: useBlobMatPropStore.getState().speed,
    }

    // Config 1/3
    let matPropConfig_1 = {
      color: "rgba(255,0,0,1)",
      speed: 1,
    }

    // Config 2/3
    let matPropConfig_2 = {
      color: "#00FF00",
      clearColor: "#00FF00",
      waves: 2,
      speed: 10,
    }

    // Config 3/3
    let matPropConfig_3 = {
      color: "#0000FF",
      clearColor: "#0000FF",
      waves: 2,
      speed: 10,
    }

    const setBlobMatProps = (props) => {
      useBlobMatPropStore.setState({
          testColor: props.color,
          speed: props.speed,
      })
    }
    
    // TODO: Update easings for sticky middle position
    tl.fromTo(redRef.current, 
      {y: "100%", autoAlpha: 0, duration: 2, ease: "none"}, 
      {y: "50%", autoAlpha: 1, duration: 2, ease: "none"})
      .to(redRef.current, {y: "0%", autoAlpha: 0, duration: 2, ease: "none"})
      .to( iConfig,
        {
          color: matPropConfig_1.color,
          speed: matPropConfig_1.speed,
          onUpdate: setBlobMatProps,
          onUpdateParams:[iConfig],
          duration: 4
        },
        0
      );
      
    tl.from(greenRef.current, {y: "100%"})
    .from(blueRef.current, {y: "100%"});

    // Update blob scene via timeline
    // let dummyIntensity = { value: 1.5 }
    // tl.to(dummyIntensity, { 
    //   value: 0.5,
    //   onUpdate: setIntensity,
    //   onUpdateParams: [dummyIntensity.value]
    // })
    // tl.to({ value: 1.5}, { 
    //   value: 0.5,
    //   onUpdate: setIntensity,
    //   onUpdateParams: [value] 
    // })
    ScrollTrigger.create({
      animation: tl,
      trigger: "#verticals",
      scroller: window.scroller,
      start: "top top",
      end: "+=4000", 
      scrub: true,
      pin: true,
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    // ScrollTrigger.addEventListener('refresh', () => window.scroll.update())

    ScrollTrigger.refresh()

    // Initialize ThreeJS Blob Scene
    

    // return () => {
    //   console.log('destroying scroller')
    //   scroller.destroy()
    // }
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
              <div className="relative">
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


          <section className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-gray-200 parallax" style={{ height: "30vw", minHeight: "350px", backgroundImage: "url(" + collage + ")", backgroundSize: "auto" }}></div>
              <div className="flex items-center md:justify-center">
                <div>
                  <h3 className="gsap-fade-in"><span className="block">Fashion, Tech, Real Estate</span><span className="block">Healthcare and More</span></h3>
                  <p className="gsap-fade-in mb-8 mt-6"><span className="block">I’ve completed projects for a variety of</span><span className="block">industries and individuals.</span></p>
                  <CustomLink className="gsap-fade-in" to="/showcase">Check out my work</CustomLink>
                </div>
              </div>
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


          <section id="verticals" className="h-screen relative overflow-hidden">
            <div className="grid grid-cols-2 gap-6 h-full w-full">
              
              <div className="relative w-full overflow-hidden h-screen">
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

              <div className="flex items-center h-screen">
                <AppScene />
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
