import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Weare from './whoweare.svg'


const WeAree = () => {
  return (
    <section id="weare" className="wearesection">
    <div>
      <div className="maincontent">
        <br />
        {/* <p
          className="heading2 ww"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          Who
        </p>
        <p
          className="heading2 ww"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          we are
        </p> */}
        <img src={Weare} alt="" className="logo" 
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
        />
      </div>
      <br />
      <br />

      <div className="container">
        <Row className="">
          <Col md={1}>
          </Col>
          <Col md={11}><p className="description2 fr" >
          We are a group of experienced professionals and young minds with
          the united intention of creating ground-breaking work for brands
          across the spectrum. We treat everyone equitably and try to
          bring transparency to everything we do. Our vision is to create
          a great business and a joyful place to work. We believe in
          inclusiveness. We are classless, gender- neutral and believe
          every human can overcome their conditioning to realise their
          potential. We believe what stops us is in the mind. Remove these
          mental obstacles and we have a clear path to success. Hard work
          is the genius factor in every great talent. We believe hard work
          is fun. And hard work is about thinking about new stuff. Not
          monotonous drivel. We believe in hard work that energises you
          and not the hard work that saps your energy.
        </p>
          </Col>
          
        </Row>
        
        <div className="quote px-2">
          <p className="subheading yy">
            <b>Our spirit</b>
          </p>
          <p
            className="heading2 ww"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-cubic"
          >
            ‘I tap dance
          </p>
          <p
            className="heading2 ww"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-cubic"
          >
            to work
          </p>

          <p
            className="heading2 ww"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-cubic"
          >
            every day.’
          </p>
          <div className="d-flex justify-content-end">
            <p className="subheading2 yy">- Warren Buffett</p>
          </div>
        </div>

        <Row>
          <Col md={2}></Col>
          <Col md={10}>

              <p className="subheading ">Creative Soul. Digital Heart</p>

        <p className="description  px-2  mx-2">
          Though we emphasise the importance of everything that we do, we
          are also very digitally savvy. We have a team that is
          experienced in digital strategy and execution across Performance
          Marketing, Website Design, Social Marketing and Native
          advertising.
        </p>

        <p className="description  px-2  mx-2">
          <b>
Digital Strategy | Websites | UI/UX | Apps | SEO | Social Media
          Strategy | Social Media Content Social Media Analytics | Content
          Writing | Performance Marketing | Social Media Marketing Native
          Advertising | Influencer Marketing

          </b>
         
        </p>
          </Col>
        </Row>

      
      </div>
      <br />
      <br />
    </div>
  </section>
  )
}

export default WeAree