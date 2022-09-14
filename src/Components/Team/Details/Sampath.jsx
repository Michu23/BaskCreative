import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic from '../../Team/Sampath.jpg'
import ProgressBar from "react-progressbar-on-scroll";
import NavIcon from "../../NavIcon";

import { Link } from 'react-router-dom';

const Sampath = () => {
  return (
    <>
     <ProgressBar color="#fee600" height={10} />
      <Link to="/navs">
        <NavIcon />
      </Link>
    <Container fluid className=" m-0 p-0 bgy pt-5" 
    style={{
        PaddingTop: "200px",
        alignItems: "bottom",
    }}
    >
        <Container className="mx-2 pt-5 pe-3">
          <div>
            <Row className="bottom-0">
              <Col md={1}></Col>
              <Col md={11} 
              className="d-flex justify-content-center"
              >
<b>
<h1 className="bigtitle">Sampath</h1>
    
    </b>              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Container fluid className=" m-0 p-0 bgg"
      style={{
        minHeight: "500px",
    }}
      >
        <Container className="mx-2  pe-3">
            <div 
            className="text-end"

            >

                <h1 className='text-white'>Founder and CEO</h1>
            </div>
            <div className="p-2 "
            
            >
                <Row>
                    <Col md={1}></Col>
                    <Col md={11}>
                        <Row>
                            <Col md={4} className="d-flex justify-content-center ">
                                <img src={Pic} className="h-100  py-5" />
                                </Col>
                            <Col md={8}>
                                <h1 className="text-white mt-5">About</h1>
                                <p className='description'>
                                Sampath has varied experience in working with some of the
                  finest creative agencies in India including Enterprise
                  Advertising, Ambience, JWT and Contract. Over a career
                  spanning 30 years he has worked on many multi-national as well
                  as leading Indian Brands. The last 15 years he has been
                  creating and helming his own ventures including start-ups in
                  the charity and food & beverages space. With Black, his latest
                  venture, he is fashioning the agency of his dreams.
                                </p>
                                </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    </Container>
      
    </>
  )
}

export default Sampath
