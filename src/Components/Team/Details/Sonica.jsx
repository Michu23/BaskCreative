import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic from '../../Team/Sonica.jpg'

const Sonica = () => {
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
<h1 className="bigtitle">Sonica Singh</h1>
    
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

                <h1 className='text-white'>Head-Digital marketing and Strategy</h1>
            </div>
            <div className="p-2 "
            
            >
                <Row>
                    <Col md={1}></Col>
                    <Col md={11}>
                        <Row>
                            <Col md={4} className="d-flex justify-content-end pe-5">
                                <img src={Pic} className="w-100 py-5" />
                                </Col>
                            <Col md={8}>
                                <h1 className="text-white mt-5">About</h1>
                                <p className='description'>
                                Sonica has a hawk’s eye when it comes to execution details.
                  But that doesn't take anything away from the strategic vision
                  that she brings to the table. Campaigns, Performance
                  Marketing, Content Strategy, Social Media Strategy, SEO
                  Strategy, Marketing Automation Strategy Analytics. These are
                  some of the things she handles in her stride on an everyday
                  basis. Her experiences include working with micro, small and
                  mid-sized clients to large corporations through her agency
                  engagements. She has worked with clients in hospitality,
                  fitness and wellness, fashion, healthcare, retail, real
                  estate, technology, non-profit organisations, and many others.
                  Before she dived headlong into the digital world she had
                  various sales and marketing roles with Taj Hotels, ITC Hotels,
                  The Ritz-Carlton Hotel Company and Accor Hotels .
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

export default Sonica
