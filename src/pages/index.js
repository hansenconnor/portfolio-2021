import React, { useEffect } from "react"
// import { Spring } from "react-spring/renderprops"
// import VisibilitySensor from "react-visibility-sensor"
// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
// import Layout from "../components/layout"
import SEO from "../components/seo"
// import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import collage from "../images/collage-small.png"
import CustomLink from "../components/custom-link"

function Index() {

  // const scrollRef = React.createRef();

  useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true
  //   });
  // })

    // gsap.registerPlugin(ScrollTrigger)
    
    // const scroller = new LocomotiveScroll({
    //   el: document.querySelector('.page'),
    //   smooth: true
    // });

    // scroller.on('scroll', ScrollTrigger.update)

    // ScrollTrigger.scrollerProxy(
    //     '.page', {
    //         scrollTop(value) {
    //             return arguments.length ?
    //             window.scroll.scrollTo(value, 0, 0) :
    //             window.scroll.scroll.instance.scroll.y
    //         },
    //         getBoundingClientRect() {
    //             return {
    //                 left: 0, top: 0, 
    //                 width: window.innerWidth,
    //                 height: window.innerHeight
    //             }
    //         },
    //         pinType: document.querySelector(".page").style.transform ? "transform" : "fixed"
    //     }
    // )

    gsap.utils.toArray(".gsap-fade-in").forEach(e => {

      gsap.fromTo(e, {
        autoAlpha: 0
      },{
        autoAlpha: 1,
        scrollTrigger: {
          trigger: e,
          scroller: '#___gatsby',
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: false,
        }
      });
    });

    // Handle Parallax
    gsap.fromTo(".parallax", {
      autoAlpha: 0,
      backgroundPosition: `center 100%`
    },{
      autoAlpha: 1,
      backgroundPosition: `center 25%`,
      scrollTrigger: {
        trigger: ".parallax",
        scroller: '#___gatsby',
        start: "top 80%",
        end: "top top",
        scrub: true,
        markers: true,
      }
    });



    // Fading Typography Bullets
    // gsap.utils.toArray(".typography-hero-bullets").forEach(e => {
    //   gsap.fromTo(e, {
    //     autoAlpha: 0,
    //     y: -50
    //   },{
    //     autoAlpha: 1,
    //     y: 50,
    //     scrollTrigger: {
    //       trigger: ".copy-scroll-section",
    //       scrub: true,
    //       pin: true,
    //       scroller: '.page',
    //       anticipatePin: 1,
    //       start: 'top top',
    //       end: '+=4000',
    //       markers: true
    //     }
    //   })
    // })

    // gsap.utils.toArray(".panel").forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     scroller: ".page", 
    //     pin: true, 
    //     pinSpacing: false 
    //   });
    // });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    // ScrollTrigger.addEventListener('refresh', () => window.scroll.update())

    // ScrollTrigger.refresh()

    // return () => {
    //   console.log('destroying scroller')
    //   scroller.destroy()
    // }
  });


    return (
      <React.Fragment>
        <SEO title="Connor Hansen" />
        <div className="page">
          
          <section>
            <h2 id="heroText" className="title w-10/12 inline-block" data-scroll data-scroll-speed="3">
              <span className="inline-block animate__animated animate__fadeInUp"><span className="text-gray-500">Design engineer combining</span> creativity, technology,</span>
              <span className="inline-block animate__animated animate__fadeInUp animate__delay-1s"> design and strategy <span className="text-gray-500">to help brands</span> exceed their goals </span>
              <span className="inline-block animate__animated animate__fadeInUp animate__delay-2s"><span className="text-gray-500">and ultimately</span> build better businesses.</span></h2>

            <div className="flex justify-end">
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


          <section className="min-h-screen flex items-center" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-200 h-80 parallax" style={{ backgroundImage: "url(" + collage + ")", backgroundSize: "auto" }}></div>
              <div class="flex items-center">
                <div>
                  <h2 className="gsap-fade-in">Fashion, Tech, Real Estate Healthcare and More</h2>
                  <p className="gsap-fade-in mb-8">I’ve completed projects for a variety of industries and individuals.</p>
                  <CustomLink className="gsap-fade-in" to="/showcase">Check out my work</CustomLink>
                </div>
              </div>
            </div>
          </section>


          <section className="copy-scroll-section text-center" data-scroll data-scroll-speed="2">
            <p className="typography-hero-bullets text-5xl font-black text-gray-800 mb-4" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">Redefining the future of </p>
            <p className="typography-hero-bullets text-5xl font-black text-gray-800" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">interactive experience design</p>
          </section>

          <section className="min-h-screen"></section>

        </div>
      </React.Fragment>
    )
}

export default Index