import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pic from "../../Team/Tanmay.jpg";

const Tanmay = () => {
  return (
    <>
      <Container
        fluid
        className=" m-0 p-0 bgy pt-5"
        style={{
          PaddingTop: "200px",
          alignItems: "bottom",
        }}
      >
        <Container className="mx-2 pt-5 pe-3">
          <div>
            <Row className="bottom-0">
              <Col md={1}></Col>
              <Col md={11} className="d-flex justify-content-center">
                <b>
                  <h1 className="bigtitle">Dr. Tanmay Chattopadhyay</h1>
                </b>{" "}
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Container
        fluid
        className=" m-0 p-0 bgg"
        style={{
          minHeight: "500px",
        }}
      >
        <Container className="mx-2  pe-3">
          <div className="text-end">
            <h1 className="text-white">
              Director- Marketing Strategy & Services
            </h1>
          </div>
          <div className="p-2 ">
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <Row>
                  <Col md={4} className="d-flex justify-content-end pe-5">
                    <img src={Pic} className="w-100 py-5" />
                  </Col>
                  <Col md={8}>
                    <h1 className="text-white mt-5">About</h1>
                    <p className="description">
                      Tanmay not only comes with all the right qualifications
                      but also loves solving problems, especially those related
                      to marketing and business strategy. He is that perfect,
                      passionate, marketing guy a creative agency falls in love
                      with. He has headed Marketing and Business Strategy at
                      Exide and Amara Raja Batteries. He was also the marketing
                      brains behind the success of Uniball and Linc Pens. And
                      his efforts made Goodyear Tyres a market leader in the
                      country. With a a doctorate degree in management from
                      Birla Institute of Technology, a post graduate degree in
                      management from Symbiosis Institute of Management Studies,
                      and a graduate degree in Chemical Engineering and
                      Chemistry from the University of Kolkata. Tanmay is a
                      self-starter and has a spark in his eyes when he talks
                      about marketing (maybe it has something to do with his
                      long stints at automotive battery companies).{" "}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Tanmay;
