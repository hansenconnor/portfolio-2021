import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class Index extends React.Component {

  componentDidMount() {
    console.log('Hello world');
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".asdf").forEach(e => {

      gsap.fromTo(e, {
        autoAlpha: 0
      },{
        autoAlpha: 1,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: true,
        }
      });
    });
  }

  render () {
    return (
      <Layout>
        <SEO title="Connor Hansen" />
        <div className="page">
          
          <section>
            <h2 id="heroText" className="title w-10/12 inline-block">
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

          <section className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                col 1
              </div>
              <div>
                <h2 className="asdf">Fashion, Tech, Real Estate Healthcare and More</h2>
                <p>I’ve completed projects for a variety of industries and individuals.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index