import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Work from "./Ework.svg";
import Img from "./1.jpeg";
import HoverVideoPlayer from "react-hover-video-player";
import Video from "./VegSeq.mp4";
import Www from "./www.svg";

const Works = () => {
  return (
    <>
      <Container fluid className=" m-0 p-0 bgg">
       
        <Container className="px-2 py-5 pe-3">
          <div>
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <HoverVideoPlayer
                  videoSrc={Video}
                  className="img-fluid "
                  pausedOverlay={
                    <img
                      src={Www}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                    // <div style={{
                    //   width: "100%",
                    //   height: "100%",
                    //   backgroundColor: "#4b5360",
                    // }}></div>
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <div className="workspage bgg">
        <Container fluid className="m-0  p-0">
          <div>
            <hr
              style={{
                color: "yellow",
                borderLeft: "8px solid yellow",
              }}
            />
          </div>
          <Container className="mx-2 pe-3">
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <div className="text-white">
                  <Row className="w-100">
                    <Col xs={12}>
                      Client: <b>Zlate</b>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center"
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out-cubic"
                    >
                      <p className="description w-50">
                        We were tasked with communicating the power of
                        negotiating using the AI capabilities of the Zlate
                        platform. We did what we do best and took a contrarian
                        approach with our tagline ‘ Settle for less.’
                      </p>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center"
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out-cubic"
                    >
                      <img src={Img} className="img-fluid h-75 " />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="m-0  p-0">
          <div>
            <hr
              style={{
                color: "yellow",
                borderLeft: "8px solid yellow",
              }}
            />
          </div>
          <Container className="px-2 pe-3">
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <div className="text-white">
                  <Row>
                    <Col xs={12}>
                      Client: <b>Zlate</b>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={Img}
                        className="img-fluid h-75 "
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                      />
                    </Col>
                    <Col md={6}
                    className="d-flex justify-content-center align-items-center"
                    
                    >
                      <p
                        className="description w-50"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                      >
                        We were tasked with communicating the power of
                        negotiating using the AI capabilities of the Zlate
                        platform. We did what we do best and took a contrarian
                        approach with our tagline ‘ Settle for less.’
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="m-0  p-0">
          <div>
            <hr
              style={{
                color: "yellow",
                borderLeft: "8px solid yellow",
              }}
            />
          </div>
          <Container className="mx-2 pe-3">
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <div className="text-white">
                  <Row>
                    <Col xs={12}>
                      Client: <b>Zlate</b>
                    </Col>
                    <Col md={6}
                    className="d-flex justify-content-center align-items-center"
                    
                    >
                      <p
                        className="description w-50"
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                      >
                        We were tasked with communicating the power of
                        negotiating using the AI capabilities of the Zlate
                        platform. We did what we do best and took a contrarian
                        approach with our tagline ‘ Settle for less.’
                      </p>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center"

                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out-cubic"
                    >
                      <img src={Img} className="img-fluid h-75 " />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Works;
