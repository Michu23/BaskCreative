import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic from '../../Team/Vishaka.jpg'
import ProgressBar from "react-progressbar-on-scroll";
import NavIcon from "../../NavIcon";

import { Link } from 'react-router-dom';

const Vishakha = () => {
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
<h1 className="bigtitle">Vishakha</h1>
    
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

                <h1 className='text-white'>Account Manager</h1>
            </div>
            <div className="p-2 "
            
            >
                <Row>
                    <Col md={1}></Col>
                    <Col md={11}>
                        <Row className="pt-5">
                            <Col md={4} className="d-flex justify-content-center ">
                                <img src={Pic} className="w-100 pb-5" />
                                </Col>
                            <Col md={8}>
                                <h1 className="text-white mt-5">About</h1>
                                <p className='description'>
                                Vishakha is well travelled, having held jobs in different
                parts of the world before she ended up at Bask. Her last job
                was at a logistics company in New York, managing operations
                across a wide-spectrum of clients. She now realizes that was
                child’s play compared to handling deliverables at an ad
                agency. 
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

export default Vishakha
