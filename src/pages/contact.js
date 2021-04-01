import React, { useEffect } from "react"
import SEO from "../components/seo"
import FoldingGradient from '../components/folding-gradient/index.js'
function Contact() {

    return (
      <React.Fragment>
        <SEO title="Connor Hansen" />
        <div className="page" data-scroll>
          
          <section className="h-screen">
            <h2 data-scroll data-scroll-speed="3">Scroll</h2>
            <h2>No scroll</h2>
            <FoldingGradient></FoldingGradient>
          </section>
          <section className="h-screen">
            <h2 data-scroll scroll-speed="3">Scroll</h2>
            <h2>No scroll</h2>
          </section>
          <section className="h-screen">
            <h2 data-scroll scroll-speed="3">Scroll</h2>
            <h2>No scroll</h2>
          </section>


        </div>
      </React.Fragment>
    )
}

export default Contact