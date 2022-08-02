import React, { useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavIcon from '../NavIcon'
import { useNavigate } from "react-router";


const Nav = () => {
  const navigate = useNavigate();

  return (
    
    <>
    <Link to="/">
        <NavIcon/>
    </Link>
        <Container className='navspage'>
            
            <Row>   
            <section className="navs">
           
          <div>
            <div className="www naves ms-3">
              <br />
              <br />
              <div>
                
                  <p
                    className="cp weare"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                    onClick={() => {
                        navigate('/')
                        setTimeout(() => {
                            document.getElementById("weare").scrollIntoView();
                        },)  
                    }}
                  >
                    who we are
                  </p>
                
                <a href="#wedo">
                  <p
                    className="ww cp wedo"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                    onClick={() => {
                        navigate('/')
                        setTimeout(() => {
                            document.getElementById("wedo").scrollIntoView();
                        }, 3000)  
                    }}
                  >
                    what we do
                  </p>
                </a>

                <a href="#work">
                 
                  <p
                    className="cp work"
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                    onClick={() => {
                      navigate('/')
                      setTimeout(() => {
                          document.getElementById("work").scrollIntoView();
                      },)  
                  }}
                  >
                    work
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
            </Row>
        </Container>
    </>
  )
}

export default Nav