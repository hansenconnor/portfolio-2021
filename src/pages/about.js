import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import gsap from 'gsap'
import '../styles/about.scss'

function About() {

  const marqueeRow = useRef()

  useEffect(() => {
    let row_width = marqueeRow.current.getBoundingClientRect().width;
    // let row_item_width = marqueeRow.current.children[0].getBoundingClientRect().width;
    // let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
    // let x_translation = initial_offset * -1;
    // console.log(e.children[0].clientWidth);

    // gsap.set(marqueeRow.current, {
    //   xPercent: `${initial_offset}`
    // });

    // Pixels per second
    let velocity = 200;

    
    const marqueeItems = gsap.utils.toArray('.about-hero__marquee-item')

    let rowWidth = 0
    marqueeItems.forEach((e) => {
      rowWidth += e.getBoundingClientRect().width
    })

    console.log(`Row width: ${rowWidth}`);
    
    let offset = 0
    let itemWidth = 0
    marqueeItems.forEach((e, i) => {
      
      itemWidth = e.getBoundingClientRect().width
      
      var tl = gsap.timeline({ repeat: -1 });
      
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
              <div className="about-hero__marquee-row w-full" ref={marqueeRow} role="marquee">
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