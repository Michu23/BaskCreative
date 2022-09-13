import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic from '../../Team/Akansha.jpg'

const Akansha = () => {
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
<h1 className="bigtitle">Akansha Gupta</h1>
    
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

                <h1 className='text-white'>Art Director</h1>
            </div>
            <div className="p-2 "
            
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
                                An experimental art-director with a spiritual bent of mind,
                she somehow believes Bask is going to help open her third-eye.
                We are not sure about that, but her designs are sure to open
                your eyes. 
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

export default Akansha
