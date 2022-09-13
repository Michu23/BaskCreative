import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Driven from './purpose-driven.svg'

const Purpose = () => {
  return (
    <section className="purpose-driven mt-5">
          <div className="purpose">
            
            <img src={Driven} alt="" className='logo3'
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            />
          </div>
          <div>
            
              
            
            <div className="container prps">
              <p className="subheading ms-2 "
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
              >
                Purpose-The framework behind every great brand.
              </p>
              <p className="description3  px-2  mx-2"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
              >
                We believe we are not separate, but one. Everything that we do
                stems from the awareness that whatever affects everyone affects
                us too. So we try to infuse purpose into every brand we work
                with. Purpose is not with a profit motive but with the
                realisation that inevitably, in today’s world, profits are a
                side effect of doing good. We do not believe brands can anymore
                exist in silos that suck money out of people with only
                shareholder benefit at its core. In a way, it is still
                shareholder benefit- driven. But this time the definition of a
                shareholder is much wider and include every human on this
                planet. We believe purpose in every organisation begins
                internally with their own people. And this is the foundation of
                building a purpose-driven brand.
              </p>
            </div>
               

           
            
          </div>
        </section>
  )
}

export default Purpose