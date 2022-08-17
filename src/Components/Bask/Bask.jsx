import React from 'react'

import Baskk from "./baskcreativeagency.svg";
import Logo from "./L2.png";

const Bask = () => {
  return (
    <section
          className="maintitle"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className="maincontent first container-fluid"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
          >
            {/* <p className="title bask ">Bask</p>
            <div className="subtitlediv m-0 p-0">
              <p className="subtitle ms-2 typewriter">creative</p>
            </div> */}
            <img src={Logo} className="logo" alt="" />

          </div>
          <div className="container px-2" data-aos="fade-up">
            <p className="description  px-2  mx-1 fr">
              Bask in the bright lights of fame. Be the brand that everyone
              wants. Be desired. Be admired. Be possessed. We will do everything
              that’s required to put your brand in the limelight. And be made
              irreplaceable. Finding the way into the minds and hearts of people
              and making brands be loved is what Bask strives to do. If you want
              to take your brand and put it centre stage, we are probably the
              ones to talk to.
            </p>
          </div>
        </section>
  )
}

export default Bask