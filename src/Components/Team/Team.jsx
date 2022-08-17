import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Sampath from "./Sampath.jpg";
import Prabhakar from "./Prabhakar.jpg";
import Pramoda from "./Pramoda.jpg";
import Sonica from "./Sonica.jpg";
import Sasi from "./Sasi.jpg";
import Vishaka from "./Vishaka.jpg";
import Akansha from "./Akansha.jpg";
import Nisal from "./Nisal.jpg";
import Tanmay from "./Tanmay.jpg";

const Team = () => {
  return (
    <section className="container-fluid w-100" id="work">
          <div className="yy mb-5 d-flex justify-content-center">
            <b>

              
            </b>
            <h1 className="display-1 mb-3">Our Team</h1>
          </div>
          <div className="container">
            <Row className="mx-2">
              <Col md={4}  sm={6} xs={12}  className="d-flex  flex-column px-5 my-5  box">
                <img src={Sampath} width={250}></img>
                <p className="teamheading">Sampath</p>
                <p className="text-white">Founder and CEO</p>
                <br />
                <p className="text-white">
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
              <Col md={4}  sm={6} xs={12}  className="d-flex  flex-column px-5 my-5 box">
                <img src={Prabhakar} width={200}></img>
                <p className="teamheading">C P Prabhakaran</p>
                <p className="text-white">Director- Business</p>
                <br />

                <p className="text-white h-100">
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
              <Col
                md={4}  sm={6} xs={12} 
                className="d-flex  flex-column px-5 my-5 box align-items-start"
              >
                <img src={Pramoda} width={200}></img>
                <p className="teamheading">Pramoda Rangari</p>
                <p className="text-white">Director- Design</p>
                <br />

                <p className="text-white">
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

              <br />

              <Col md={4}  sm={6} xs={12}  className="d-flex  flex-column px-5 my-5 box ">
                <img src={Sonica} width={200}></img>
                <p className="teamheading">Sonica Singh</p>
                <p className="text-white">
                  Head-Digital marketing and Strategy
                </p>
                <br />

                <p className="text-white">
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
                </p>
              </Col>
              <Col md={4}  sm={6} xs={12}  className="d-flex  flex-column px-5 my-5 box ">
                <img src={Tanmay} width={240}></img>
                <p className="teamheading">Dr. Tanmay Chattopadhyay </p>
                <p className="text-white">
                  Director- Marketing Strategy & Services
                </p>
                <br />

                <p className="text-white">
                  Tanmay not only comes with all the right qualifications but
                  also loves solving problems, especially those related to
                  marketing and business strategy. He is that perfect,
                  passionate, marketing guy a creative agency falls in love
                  with. He has headed Marketing and Business Strategy at Exide
                  and Amara Raja Batteries. He was also the marketing brains
                  behind the success of Uniball and Linc Pens. And his efforts
                  made Goodyear Tyres a market leader in the country. With a a
                  doctorate degree in management from Birla Institute of
                  Technology, a post graduate degree in management from
                  Symbiosis Institute of Management Studies, and a graduate
                  degree in Chemical Engineering and Chemistry from the
                  University of Kolkata. Tanmay is a self-starter and has a
                  spark in his eyes when he talks about marketing (maybe it has
                  something to do with his long stints at automotive battery
                  companies).
                </p>
              </Col>
              <Col md={4}  sm={6} xs={12}  className="d-flex  flex-column px-5 my-5 box ">
                <img src={Nisal} width={240}></img>
                <p className="teamheading">Nisal Mohamed </p>
                <p className="text-white">
                  Director- Retail Strategy & Implementation
                </p>
                <br />

                <p className="text-white">
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
              <Col
                md={4}  sm={6} xs={12} 
                className="d-flex  flex-column px-5 my-5  box align-items-start"
              >
                <img src={Sasi} width={200} className=""></img>
                <p className="teamheading">Sasi Bhaskaran</p>
                <p className="text-white">Creative Director- Art</p>
                <br />

                <p className="text-white">
                  Sasi is a sculptor turned digital artist- turned magazine
                  designer-turned advertising art director. Sasi brings a keen
                  eye for aesthetically pleasing designs and at the same time
                  creates pieces of work that are meaningful and interesting in
                  their depth, creating vibrant geographical contours across the
                  advertising landscape. Basically, work that stand-out in a sea
                  of sameness. Sasi’s work talks for itself, that’s probably why
                  you will find him to be a man of few words.
                </p>
              </Col>
              <Col md={4}  sm={6} xs={12}  className="d-flex flex-column px-5 my-5 box">
                <img src={Vishaka} width={200}></img>
                <p className="teamheading">Vishakha</p>
                <p className="text-white">Account Manager</p>
                <br />

                <p className="text-white">
                  Vishakha is well travelled, having held jobs in different
                  parts of the world before she ended up at Bask. Her last job
                  was at a logistics company in New York, managing operations
                  across a wide-spectrum of clients. She now realizes that was
                  child’s play compared to handling deliverables at an ad
                  agency.
                </p>
              </Col>

              <br />

              <Col
                md={4}  sm={6} xs={12} 
                className="d-flex flex-column px-5 my-5 box"
              >
                <img src={Akansha} width={200}></img>
                <p className="teamheading">Akansha</p>
                <p className="text-white">Art Director</p>
                <br />

                <p className="text-white">
                  An experimental art-director with a spiritual bent of mind,
                  she somehow believes Bask is going to help open her third-eye.
                  We are not sure about that, but her designs are sure to open
                  your eyes.
                </p>
              </Col>
            </Row>
          </div>
        </section>
  )
}

export default Team