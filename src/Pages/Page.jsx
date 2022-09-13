import React from "react";
import Main from "../Components/Main";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgressBar from "react-progressbar-on-scroll";
import { Row, Col, Container } from "react-bootstrap";

import $ from "jquery";
import axios from "axios";

import Swal from "sweetalert2";
import NavIcon from "../Components/NavIcon";
import { Link } from "react-router-dom";

import Baskk from "../Components/Bask/Bask";
import Second from "../Components/Second/Second";
import Purpose from "../Components/Purpose/Purpose";
import Powering from "../Components/Powering/Powering";
import Team from "../Components/Team/Team";

import Wedo from "./E1.svg";
import Work from "./work.svg";
import WeAree from "../Components/WeAre/WeAree";
import Stategy from "./st.svg";
import Works from "../Components/Works/Works";
import HoverVideoPlayer from "react-hover-video-player";

Aos.init();

const handleSubmit = (e) => {
  const Swal = require("sweetalert2");
  e.preventDefault();
  const data = $("#submit_form").serialize();
  console.log("Submitted");
  console.log(data);

  axios
    .post(
      "https://script.google.com/macros/s/AKfycbyVk1PFsIhusRGGPvZOjzGDeIQofReSwQqyFfG6_SZA2CjQNLK0UdQ5CGQE7SFTQXyB2w/exec",
      data,
      {}
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log("Submitted");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Form submitted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    })
    .catch((err) => {
      console.log(err);
      console.log("Not Submitted");
    });
};

const Page = () => {
  return (
    <>
      <ProgressBar color="#fee600" height={10} />
      <Link to="/navs">
        <NavIcon />
      </Link>
      <Container fluid className="">
        <Container className="mx-2 pe-3 ">
          <div className="p-0 m-0 ">
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <Baskk />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>

      <WeAree />
      <Container fluid className="p-0 m-0 bgg">
        <Container className="mx-2 pe-3 ">
          <Row>
            <Col md={1} className=""></Col>
            <Col md={11} className="">
              <section id="wedo" className="">
                <div className=" ">
                  <div
                    className="maincontent py-5 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                  >
                    <img src={Wedo} alt="" className="logo   pt-5" />
                    <img src={Stategy} alt="" className="  img-fluid w-25" />
                  </div>

                  <Row className="">
                    <Col md={1} className=""></Col>
                    <Col md={11}>
                      <b>
                        <Row className=" ">
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Strategy
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Creative
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Design
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Digital
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Tech
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Retail
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Marketing
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Brand Factory
                          </Col>
                          <Col
                            md={4}
                            className="does  p-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                          >
                            Production
                          </Col>
                        </Row>
                      </b>
                    </Col>
                  </Row>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>

      <Works />
      <Container fluid className="p-0 m-0 bgg">
        <Container className="mx-2 pe-3 ">
          <div className="p-0 m-0 ">
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                {/* <Second /> */}
                {/* <Purpose /> */}

                <Powering />

                <Team />

                <section>
                  <div className="yy mb-5">
                    <h1 className="display-1 mb-3">Contact us</h1>
                  </div>
                  <div className="container ">
                    <Row>
                      <Col md={6}>
                        <Container fluid className="px-2">
                          <h1 className="ww pb-2 display-6">
                            Communicate with us!
                          </h1>
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
                              <label for="exampleFormControlTextarea1">
                                Message
                              </label>
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
                            <br />
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
      </Container>
    </>
  );
};

export default Page;
