import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic from '../../Team/Nisal.jpg'

const Nisal = () => {
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
<h1 className="bigtitle">Nisal Mohamed</h1>
    
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

                <h1 className='text-white'>Director- Retail Strategy & Implementation</h1>
            </div>
            <div className="p-2 pt-5 "
            
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
                                Nisal has been there, done that. His down-to-earth demeanour
                  and can-do attitude carry the day. For over 20 years, he has
                  been the man companies reached out to implement retail
                  strategies across the country. His experiences range from
                  setting up retail stores in India, hypermarkets in Oman, and
                  running the Liverpool Football Academy in Dubai. He has
                  launched both premium and discount format stores and appointed
                  and managed franchisees. Mapped the market for tractors for
                  Escorts. Managed diversification of personal care products for
                  ITC. And conceptualized and implemented the ‘All Steel’ Store
                  in  Kolkata for the Tata Group. He will lead  Bask’s work in
                  the retail space, devising strategies and implementing retail
                  experiences across domains. 
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

export default Nisal
