import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic from '../../Team/Pramoda.jpg'
import ProgressBar from "react-progressbar-on-scroll";
import NavIcon from "../../NavIcon";

import { Link } from 'react-router-dom';

const Pramoda = () => {
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
<h1 className="bigtitle">Pramoda Rangari</h1>
    
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

                <h1 className='text-white'>Director- Design</h1>
            </div>
            <div className="p-2 "
            
            >
                <Row className="py-4">
                    <Col md={1}></Col>
                    <Col md={11}>
                        <Row>
                            <Col md={4} className="d-flex justify-content-center ">
                                <img src={Pic} className="w-100 pb-5" />
                                </Col>
                            <Col md={8}>
                                <h1 className="text-white mt-5">About</h1>
                                <p className='description'>
                                Pramod Rangari has evolved over the last 30 years from being a
                  pure play advertising art director to being the design guru
                  that he is today. His work has spanned advertising campaigns
                  and design work for a host of national and international
                  brands including, Axis Bank, Bank Of America, Standard and
                  Poor Global, Harmon Kardon, Mahindra, CGH Earth, Asian Paints,
                  Cadbury, Taj Hotels, Vodafone, the Prince Charles Foundation
                  and the Reliance Foundation. He has worked for trailblazing
                  creative agencies like Ambience and Enterprise at the start of
                  his career and then moved on to Lowe-Lintas before being
                  called by Ogilvy to set up and head their India Design
                  Division. 
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

export default Pramoda
