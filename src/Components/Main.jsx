import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";




const Main = () => {

    


  return (
    <section className="maintitle" 
        data-aos="flip-left"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
    >
      
      <div className="maincontent container-fluid">
        <p className="title bask ">Bask</p>
        <div className="subtitlediv m-0 p-0">
          <p className="subtitle ms-5">creative</p>
        </div>
      </div>
      <div className="container">
            <p className="description">
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
  );
};

export default Main;
