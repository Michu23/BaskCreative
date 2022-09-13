import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic from '../../Team/Prabhakar.jpg'

const Prabhakar = () => {
  return (
    <>
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
<h1 className="bigtitle">C P Prabhakaran</h1>
    
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

                <h1 className='text-white'>Director- Business</h1>
            </div>
            <div className="p-2 pt-5"
            
            >
                <Row>
                    <Col md={1}></Col>
                    <Col md={11}>
                        <Row>
                            <Col md={4} className="d-flex justify-content-end pe-5">
                                <img src={Pic} className="w-100 pb-5" />
                                </Col>
                            <Col md={8}>
                                <h1 className="text-white mt-5">About</h1>
                                <p className='description'>
                                Prabhakaran is the consummate advertising andmarketing
                  professional. With 3 decades of experience both on the agency
                  side as well as the brand side. He has worked with some of the
                  leading advertising agencies in Bangalore including Saatchi
                  &Saatchi, Maa Bozzel and Everest. Where he has handled a
                  diverse portfolio of clients in the FMCG as well as other
                  categories. Later he moved on to work on the brand side with
                  RMZ Corp, Bangalore's leading Corporate and Residential
                  developer, for 10 years as head of marketing communication for
                  both, RMZ Homes and Commercial spaces.
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

export default Prabhakar
