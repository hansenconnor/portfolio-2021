import React, { useEffect } from "react"
import SEO from "../components/seo"

function Showcase() {

    return (
      <React.Fragment>
        <SEO title="Connor Hansen" />
        <div className="page" data-scroll>
          
          <section class="h-screen">
            <h2 data-scroll data-scroll-speed="3">Scroll</h2>
            <h2>No scroll</h2>
          </section>
          <section class="h-screen">
            <h2 data-scroll scroll-speed="3">Scroll</h2>
            <h2>No scroll</h2>
          </section>
          <section class="h-screen">
            <h2 data-scroll scroll-speed="3">Scroll</h2>
            <h2>No scroll</h2>
          </section>


        </div>
      </React.Fragment>
    )
}

export default Showcase