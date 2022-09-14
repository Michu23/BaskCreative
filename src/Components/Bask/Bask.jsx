import React from "react";

import Baskk from "./baskcreativeagency.svg";
// import Logo2 from "./BaskLogo2.svg";
import Logo2 from "./Logo3.svg";

const Bask = () => {
  return (
    <div className="">
      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <img src={Logo2} className="logo mb-5" alt="" />
      </div>
      <div className="container px-2">
        <p
          className="description22  px-2  mx-1 fr"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          At Bask, we solve brand and communication problems with creativity,
          ideas, and technology. We help brands become successful and loved. We
          are here to shake things up. We want to be nothing short of a
          revolution.
        </p>
      </div>
    </div>
  );
};

export default Bask;
