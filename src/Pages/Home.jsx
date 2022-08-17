import React from "react";
import Main from "../Components/Main";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgressBar from "react-progressbar-on-scroll";
import { Row, Col, Container } from "react-bootstrap";



import $ from "jquery";
import axios from "axios";

import Swal from 'sweetalert2' 
import NavIcon from "../Components/NavIcon";
import { Link } from "react-router-dom";

import Baskk from "../Components/Bask/Bask";
import Second from "../Components/Second/Second";
import Purpose from "../Components/Purpose/Purpose";
import Powering from "../Components/Powering/Powering";
import Team from "../Components/Team/Team";

import Wedo from './whatwedo.svg'
import Work from './work.svg'
import WeAree from "../Components/WeAre/WeAree";



Aos.init();

const handleSubmit = (e) => {
  const Swal = require('sweetalert2')
  e.preventDefault();
  const data = $("#submit_form").serialize();
  console.log("Submitted");
  console.log(data);

  axios
    .post(
      "https://script.google.com/macros/s/AKfycbyVk1PFsIhusRGGPvZOjzGDeIQofReSwQqyFfG6_SZA2CjQNLK0UdQ5CGQE7SFTQXyB2w/exec",
      data,
      {
        
      }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log("Submitted");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Form submitted successfully',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        window.location.reload();
      }
      , 3500);
    })
    .catch((err) => {
      console.log(err);
      console.log("Not Submitted");
    });
};

const Home = () => {
  return (
    <>
      <ProgressBar color="#fee600" height={10} />
      <Link to="/navs">
      <NavIcon/></Link>
      <Container className="mx-2 pe-3">
      <div className="p-0 m-0 contain  y mandatory-scroll-snapping">
        <Row>
          <Col md={1}>
          </Col>
          <Col md={11}>
           <Baskk/>

        <Second/>

        <Purpose/>

        <Powering/>

      <WeAree/>

        <section id="wedo">
          <div>
            <div className="maincontent"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            >
              
              {/* <p
                className="heading22 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                What
              </p>
              <p
                className="heading22 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                we do
              </p> */}
              
              <img src={Wedo} alt="" className="logo"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
              />
            </div>
            
            <Row>
              <Col md={2}>
              </Col>
              <Col md={10}><div className="container">
              <p className="description  px-2  mx-2">
                Brand Strategy | Identity Design | Packaging | Communication
                Campaigns | Performance Marketing | Social Campaigns | Native
                Advertising | Websites | Blogs | Experience Design
              </p>
              <br></br>
            </div>
                </Col>
            </Row>
            
          </div>
        </section>

        <Team/>

        <section>
          <div className="yy mb-5">
            <h1 className="display-1 mb-3">Contact us</h1>
          </div>
          <div className="container">
            <Row>
              <Col md={6}>
                <Container fluid className="px-2">
                  <h1 className="ww pb-2 display-6">Communicate with us!</h1>
                  <form
                    className="text-white"
                    id="submit_form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // const data = $("#submit_form").serialize();
                      // console.log(data);

                      handleSubmit(e);
                    }}
                  >
                    <div className="form-group my-2">
                      <label for="exampleFormControlInput1">Name</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        id="exampleFormControlInput1"
                        name="name"
                      />
                    </div>
                    <div className="form-group my-2">
                      <label for="exampleFormControlInput1">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control py-2"
                        id="exampleFormControlInput1"
                        name="email"
                      />
                    </div>
                    <div className="form-group my-2">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea
                        className="form-control py-2"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary w-25 h-100 "
                      value="Submit"
                    />
                  </form>
                </Container>
              </Col>
              <Col md={6} className="px-4">
                <h1 className="ww pb-2 display-6">Bangalore</h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.655758383615!2d77.6350955!3d12.9613594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe01b32340b5de090!2sMNR%20PRIDE!5e0!3m2!1sen!2sin!4v1659097414987!5m2!1sen!2sin"
                  className="w-100 h-50 pe-5"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="text-white pt-5">
                  <p>
                    Contact us
                    <br></br>
                    prabhakar@blackis.in
                    <br/>
                    +91 99809 12312
                  </p>
                  <br></br>


                  <p>
                    CONNECT
                    <br></br>
                    Instagram
                    <br></br>
                    Facebook
                    <br></br>
                    Linkedin
                  </p>
                  <br></br>
                </div>
              </Col>
            </Row>
          </div>
        </section>

          </Col>
        </Row>


        
       
      </div>
      </Container>
     
    </>
  );
};

export default Home;
