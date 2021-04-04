import React, { useState, useEffect, useRef } from "react"
import * as THREE from 'three'
import SEO from "../components/seo"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CollageSmall from "../images/collage-small.png"
import CollageLarge from "../images/collage-large.png"
import CustomLink from "../components/custom-link"
import FoldingGradient from '../components/folding-gradient/index.js'
import IBMScreen from '../images/screens/IBM.png'
import IBMLogo from '../images/logos/ibm-logo.inline.svg'
import CoolorsLogo from '../images/logos/coolors-logo.inline.svg'
import CoolorsScreen from '../images/screens/coolors.png'
import WiselyLogo from '../images/logos/wisely-logo.inline.svg'
import WiselyScreen from '../images/screens/wisely.png'
import HarshCruelLogo from '../images/logos/harsh-and-cruel-logo.inline.svg'
import HarshCruelScreen from '../images/screens/harsh-and-cruel.png'
import PhoneScreen from '../images/screens/your-project-here.inline.svg'
import SplitByLines from '../components/SplitText'
import Splitting from 'splitting'

import useBlobMatPropStore from '../store'
import AppScene from './scene'

function Index() {

  const clientsRef = useRef()
  const outroRef = useRef()
  const outroContentRef = useRef()
  const heroText = useRef()

  useEffect(() => {

    // Footer reveal animation
    gsap.fromTo(outroContentRef.current, {
      yPercent: "-50"
    }, {
      yPercent: "0",
      scrollTrigger: {
        scroller: window.scroller,
        trigger: outroRef.current,
        end: "bottom bottom",
        scrub: true,
      }, ease: "none"
    })

  }, []);



  return (
    <>
      <SEO title="Home" />
      <div className="page">
        
        <section className="min-h-3/4-screen relative flex items-center">
          
          <h2 ref={heroText} id="heroText" className="inline-block self-center" data-scroll data-scroll-speed="3">
            <span className="animate__animated animate__fadeInUp animate__delay-2s">Design engineer combining creativity, technology, </span>
            <span className="animate__animated animate__fadeInUp animate__delay-4s">design and strategy to help brands exceed their goals </span>
            <span className="animate__animated animate__fadeInUp animate__delay-6s">and ultimately build better businesses.</span>
          </h2>

          <div className="absolute bottom-0 right-0 overflow-hidden cursor-pointer rounded-full" onClick={() => window.bodyScrollBar.scrollIntoView(document.querySelector('.clients'))} style={{width:"20vw", height:"20vw"}}>
            <svg id="svg_circle" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{width:"20vw", height:"20vw"}} viewBox="0 0 101 101">
              <defs>
              </defs>
              <circle style={{ strokeWidth: "0.5" }} className="st0" cx="50.5" cy="50.5" r="50"/>
            </svg>
            <svg id="svg_arrow" style={{width:"1.5vw", height:"1.5vw"}} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7656 10.6719L20.4375 10.3438C20.2031 10.1094 19.875 10.1094 19.6406 10.3438L11.2969 18.6875V1.0625C11.2969 0.78125 11.0156 0.5 10.7344 0.5H10.2656C9.9375 0.5 9.70312 0.78125 9.70312 1.0625V18.6875L1.3125 10.3438C1.07812 10.1094 0.75 10.1094 0.515625 10.3438L0.1875 10.6719C-0.046875 10.9062 -0.046875 11.2344 0.1875 11.4688L10.0781 21.3594C10.3125 21.5938 10.6406 21.5938 10.875 21.3594L20.7656 11.4688C21 11.2344 21 10.9062 20.7656 10.6719Z" fill="black"/>
            </svg>
          </div>

        </section>


        <section ref={clientsRef} className="min-h-3/4-screen flex items-center justify-center clients">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="col-span-1 overflow-hidden bg-white">
              <figure data-scroll data-scroll-speed="1" style={{ height: "30vw", minHeight: "350px" }}>
                <img src={CollageSmall} alt="" style={{ transform: "scale(2.83)"}}/>
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
        <section>
          <div className="section-content py-32">
            <div className="section-header py-16">
              <h1 className="font-medium">Featured Projects</h1>
            </div>
            <div className="featured-projects">
              <div className="featured-project py-24 flex flex-col lg:flex-row lg:items-center">
                <figure className="featured-project__image block w-full lg:w-3/5" data-scroll data-scroll-speed="3">
                  <img src={IBMScreen} alt="IBM Screen"/>
                </figure>
                <article className="featured-project__copy flex flex-col justify-center py-8 md:p-8 w-full lg:w-2/5">
                  <IBMLogo className="featured-project__logo"/>
                  <h3 className="featured-project__title mt-9 mb-6">IBM Research</h3>
                  <p className="featured-project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit voluptates ad earum deleniti aut, sunt impedit, perspiciatis maxime veniam ipsam vitae facilis neque eos mollitia harum debitis dolores commodi?</p>
                </article>
              </div>
              <div className="featured-project py-24 flex flex-col lg:flex-row lg:items-center">
                <figure className="featured-project__image block w-full lg:w-3/5">
                  <img src={CoolorsScreen} alt="Coolors Screen"/>
                </figure>
                <article className="featured-project__copy flex flex-col justify-center py-8 md:p-8 w-full lg:w-2/5">
                  <CoolorsLogo className="featured-project__logo"/>
                  <h3 className="featured-project__title mt-9 mb-6">Coolors</h3>
                  <p className="featured-project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit voluptates ad earum deleniti aut, sunt impedit, perspiciatis maxime veniam ipsam vitae facilis neque eos mollitia harum debitis dolores commodi?</p>
                </article>
              </div>
              <div className="featured-project py-24 flex flex-col lg:flex-row lg:items-center">
                <figure className="featured-project__image block w-full lg:w-3/5">
                  <img src={WiselyScreen} alt="Wisely Screen"/>
                </figure>
                <article className="featured-project__copy flex flex-col justify-center py-8 md:p-8 w-full lg:w-2/5">
                  <WiselyLogo className="featured-project__logo"/>
                  <h3 className="featured-project__title mt-9 mb-6">Wisely</h3>
                  <p className="featured-project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit voluptates ad earum deleniti aut, sunt impedit, perspiciatis maxime veniam ipsam vitae facilis neque eos mollitia harum debitis dolores commodi?</p>
                </article>
              </div>
              <div className="featured-project py-24 flex flex-col lg:flex-row lg:items-center">
                <figure className="featured-project__image block w-full lg:w-3/5">
                  <img src={HarshCruelScreen} alt="Harsh &amp; Cruel Screen"/>
                </figure>
                <article className="featured-project__copy flex flex-col justify-center py-8 md:p-8 w-full lg:w-2/5">
                  <HarshCruelLogo className="featured-project__logo"/>
                  <h3 className="featured-project__title mt-9 mb-6">Harsh &amp; Cruel</h3>
                  <p className="featured-project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit voluptates ad earum deleniti aut, sunt impedit, perspiciatis maxime veniam ipsam vitae facilis neque eos mollitia harum debitis dolores commodi?</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Collage */}
        <section className="overflow-hidden flex items-center min-h-3/4-screen">
          <div className="parallax-wrapper overflow-hidden bg-white">
            <figure data-scroll data-scroll-speed="2" style={{ height: "83.33%", minHeight: "350px" }}>
              <img src={CollageLarge} alt="Design Collage" style={{ transform: "scale(2.6)"}} />
            </figure>
          </div>
        </section>


        <section className="lg:text-center min-h-1/2-screen flex items-center justify-center">
            <div className="flex flex-col lg:items-center">
              <div className="w-100">
                <h1>
                  Building the Future of<br/>Interactive Experience Design
                </h1>
              </div>
              <div className="w-full lg:w-5/6 xl:w-3/4">
                <h4 className="text-gray-500 lg:text-center mt-12 leading-normal">I’m focused on solving complex design interaction problems for individuals and startups in emerging tech spaces like Blockchain, Machine Learning and Edge Computing.</h4>
                <CustomLink to="/about" className="inline-block mt-24">Learn more about me</CustomLink>
              </div>  
            </div>
        </section>


        {/* New Project */}
        <section className="min-h-3/4-screen flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex items-center md:justify-center">
              <div>
                <h3 className="gsap-fade-in"><span className="block">Are you reacy to start</span><span className="block">your next project?</span></h3>
                <p className="gsap-fade-in mb-8 mt-6"><span className="block">User-centric design that beats the competition.</span><span className="block">Time and time again.</span></p>
                <CustomLink className="gsap-fade-in" to="/contact">Send me a message</CustomLink>
              </div>
            </div>
            <div className="order-first md:order-last col-span-1 relative overflow-hidden bg-gray-100 rounded-3xl min-h-1/3-screen">
              <PhoneScreen className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-auto" preserveAspectRatio="xMidYMax meet" />
              <FoldingGradient></FoldingGradient>
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

        <section ref={outroRef} className="bg-gray-900 text-white items-center overflow-hidden h-screen" style={{ minHeight: "720px", margin: "0 -10vw", padding: "0 10vw" }}>
          <div ref={outroContentRef} className="outro-content py-16 flex items-center h-full">
            <div className="outro-body flex h-100 w-full items-center">
              <div className="grid grid-cols-3 w-full">
                {/* Col 1 */}
                <div className="outro-col col-span-3 lg:col-span-1">
                    <h4 className="text-gray-300">Don't be shy</h4>
                    <h1 className="font-semibold text-white">Say Hi.</h1>
                </div>
                {/* Col 2 */}
                <div className="outro-col col-span-3 lg:col-span-1">
                    <h5 className="text-gray-400 uppercase tracking-widest">Navigation</h5>
                </div>
                {/* Col 3 */}
                <div className="outro-col col-span-3 lg:col-span-1">
                    <span className="block text-gray-400">Designed in <a className="text-white" href="http://figma.com" target="_blank">Figma</a></span>
                    <span className="block mt-4 text-gray-400">Built with <a className="text-white" href="http://gatsbyjs.com" target="_blank">Gatsby</a></span>
                    <span className="block mt-4 text-gray-400">Styles by <a className="text-white" href="http://tailwindcss.com" target="_blank">Tailwind</a></span>
                    <span className="block mt-4 text-gray-400"><a className="text-white" href="http://github.com/hansenconnor/portfolio-2021" target="_blank">Source Code</a> available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Index
