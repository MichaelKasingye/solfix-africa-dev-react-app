import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Achievements from './Achievements'

function AboutUs() {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, [])

    return (
      <section id="about" className="about ">
      <div className="container" data-aos="fade-up">

     <Achievements/>
        <div className="row">
          <div
            className="col-lg-6 video-box align-self-baseline"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <img src="assets/img/pages/workingTeam.svg" className="img-fluid" alt="" />
            {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a> */}
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0 content">
            <h3>
              Join with more customers who have relied on us for their business
              needs.
            </h3>
            <p className="fst-italic">We are here:</p>
            <ul>
              <li>
                <i className="bx bx-check-double" />
                Helping entrepreneurs turn ideas into businesses.
              </li>
              <li>
                <i className="bx bx-check-double" /> Providing access to our
                independent network of professionals.
              </li>
              <li>
                <i className="bx bx-check-double" /> Getting all documentation for
                starting your business and growing it.
              </li>
            </ul>
            <p>Have a peace of mind in your business.</p>
          </div>
        </div>
      </div>
    </section>
    

    )
}

export default AboutUs
