import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Work from "./Ework.svg";
import Img from "./1.jpeg";
import HoverVideoPlayer from "react-hover-video-player";
import Video from "./VegSeq.mp4";
import Www from "./www.svg";
import ProgressBar from "react-progressbar-on-scroll";
import { Link } from "react-router-dom";
import NavIcon from "../NavIcon";
import Two from "./2.jpeg";
import Three from "./3.jpeg";
import Four from "./4.jpeg";
import L1 from "./L1.jpg";
import L2 from "./L2.jpg";
import L3 from "./L3.jpg";
import Contact from "../../Pages/Contact";
import Img2 from "./Img";


const Works = () => {
  return (
    <>
    <ProgressBar color="#fee600" height={10} />
      <Link to="/navs">
        <NavIcon />
      </Link>
      <Container fluid className=" m-0 p-0 bgg">
       
        <Container className="px-2 py-5 pe-3">
          <div>
            <Row>
              <Col md={1}></Col>
              <Col md={11} className="position-relative">
                <img src={Www} alt="" className="w-100 position-absolute " 
                style={{zIndex : "888"}} />
                
                <div className="bnw">
                   {/* <HoverVideoPlayer
                  videoSrc={Video}
                  className="img-fluid bnw"
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
                    <div style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#4b5360",
                    }}></div>
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                /> */}
                <video src={Video} 
                className="img-fluid bnw"
                autoPlay
                loop
                muted
                />
                
                </div>
               
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
                    <Col xs={12} className="mb-5">
                      Client: <b>Zlate</b>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center "
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out-cubic"
                    >
                      <p className="description w-50 ">
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
                      <Row>
                        <Col md={6}
                        
                        data-aos="fade-left"
                          data-aos-delay="300"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out-cubic"
                          >
                          {/* <img src={Img} alt="" className="img-fluid p-2" 
                          
                          /> */}
                          <Img2 image={Img} />
                        </Col>
                        <Col md={6}
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          {/* <img src={Two} alt="" className="img-fluid p-2" 
                          
                          /> */}
                          <Img2 image={Two} />
                        </Col>
                        <Col md={6}
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          {/* <img src={Three} alt="" className="img-fluid p-2" 
                          
                          /> */}
                          <Img2 image={Three} />
                        </Col>
                        <Col md={6}
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          {/* <img src={Four} alt="" className="img-fluid p-2" 
                          
                          /> */}
                          <Img2 image={Four} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <div style={{
          height: "140px",
        }}></div>
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
                      Client: <b>LakeFront</b>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center pt-5"
                    >
                      <Row>
                        <Col md={6}
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          
                        {/* <img
                        src={L1}
                        className="img-fluid h-75 "
                        
                      /> */}
                      <Img2 image={L1} />
                        </Col>
                        <Col md={6}
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                        {/* <img
                        src={L2}
                        className="img-fluid h-75 "
                        
                      /> */}
                      <Img2 image={L2} />

                        </Col>
                        <Col md={6}
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                        {/* <img
                        src={L3}
                        className="img-fluid h-75 "
                        
                      /> */}
                      <Img2 image={L3} />
                      </Col>
                       

                      </Row>
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
                        When there is a beautiful lake near the residential property we are creating ads for, the campaign more or less writes  itself.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        {/* <Container fluid className="m-0  p-0">
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
        </Container> */}
      </div>
      <Contact/>
    </>
  );
};

export default Works;
