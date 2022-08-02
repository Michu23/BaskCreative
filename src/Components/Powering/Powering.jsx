import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Power from "./powering-brands.svg";


const Powering = () => {
  return (
    <section>
    <div>
      <div
        className="maincontent"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
      >
        <br />
        {/* <p className="heading2 ww">Powering</p>
        <p className="heading2 ww">brands</p>
        <p className="heading2">through</p>
        <p className="heading2">creative</p>
        <p className="heading2 ww">thinking.</p> */}
        <img src={Power} alt="" className='logo2'
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
        />

      </div>
      <br />
      <br />

      <div className="container">
        <p className="description  px-2  mx-2 fr">
          Every brand has access to analytics. When you infuse creative
          thinking into this, you unleash insights that have the power to
          move markets. If your brand needs an infusion of creativity,
          call us. Creativity is the energy brands need to keep themselves
          young and active.
        </p>

        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
        <Row>
          <Col md={4} className="px-2"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1250"
          data-aos-easing="ease-in-out-cubic"
          >
            <p className="subheading yy">
              <b>Creative Strategy</b>
            </p>
            <p className="description  px-2  mx-2">
              The basis of everything that the Outsiders do. This is
              arrived at from understanding theconsumer. Not what they ask
              for or what they want or what they tell us. But by mining
              subconscious desires that lie under the surface of the mind
              of the consumer. Andcorrelating it with the market as well
              as the brand.
            </p>
          </Col>
          <Col md={4} className="px-2"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1250"
          data-aos-easing="ease-in-out-cubic"
          >
            <p className="subheading yy">
              <b>Big Idea</b>
            </p>
            <p className="description  px-2  mx-2">
              The holy grail of this business. If we don’t get a big idea,
              we try harder until we have one. Big ideas are what
              differentiate the brand and create a moat that competitors
              find hard to cross.
            </p>
          </Col>
          <Col md={4} className="px-2"
          data-aos="fade-up"
          data-aos-delay="750"
          data-aos-duration="1250"
          data-aos-easing="ease-in-out-cubic"
          >
            
            <p className="subheading yy">
              <b>Great Execution</b>
            </p>
            <p className="description  px-2  mx-2">
              As Bernbach said, execution is content in a work of art. We
              are always trying to get there. Take a powerful idea and
              execute it till it transforms into something even bigger.
            </p>
          </Col>
        </Row>
  </section>
  )
}

export default Powering