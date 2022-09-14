import axios from 'axios';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import $ from "jquery";


const Contact = () => {

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
  

  return (
    <Container fluid className="p-0 m-0 bgg">
        <Container className="mx-2 pe-3 ">
          <div className="p-0 m-0 ">
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                

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

                        <div
                          className="text-white "
                          style={{
                            height: "fit-content",
                          }}
                        >
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
  )
}

export default Contact
