import React from "react";

import Baskk from "./baskcreativeagency.svg";
// import Logo2 from "./BaskLogo2.svg";
import Logo2 from "./Logo3.svg";


const Bask = () => {
  return (
    <section
    
    >
      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        
        <img src={Logo2} className="logo" alt="" />
      </div>
      <div className="container px-2" >
        <p className="description22  px-2  mx-1 fr"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
        >
          Bask in the bright lights of fame. Be the brand that everyone wants.
          Be desired. Be admired. Be possessed. We will do everything that’s
          required to put your brand in the limelight. And be made
          irreplaceable. Finding the way into the minds and hearts of people and
          making brands be loved is what Bask strives to do. If you want to take
          your brand and put it centre stage, we are probably the ones to talk
          to.
        </p>
      </div>
    </section>
  );
};

export default Bask;
