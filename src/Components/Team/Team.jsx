import React from "react";
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
import Person from "./Person";
import ProgressBar from "react-progressbar-on-scroll";
import Heading from "./People.svg";
import NavIcon from "../NavIcon";
import { Link } from "react-router-dom";
import Contact from "../../Pages/Contact";

const Team = () => {
  return (
    <div className="m-0 p-0">
    <ProgressBar color="#fee600" height={10} />
      <Link to="/navs">
        <NavIcon />
      </Link>
    <Container fluid className="p-0 m-0 bgg">
      <Container className=" pe-3 ">
        <div className="p-0 m-0 ">
          <Row>
            <Col md={1}></Col>
            <Col md={11}><section className="container-fluid w-100  py-5 bgg" id="work">
      <img src={Heading} alt="" className="img-fluid mb-3 pt-5 mt-5" />

      <div className="container">
        <Row className="px-2">
          <Col md={5}></Col>
          <Col md={7}>
            <Row className="mx-2">
              <Col xs={12}>
                <div className="yy d-flex justify-content-center ">
                  <h1 className="display-1 gx">Our Team</h1>
                </div>
              </Col>
              <Person
                img={Sampath}
                link="/sampath"
                width="188"
                name="Sampath"
                desc="Founder and CEO"
                details="
                Sampath has varied experience in working with some of the
                  finest creative agencies in India including Enterprise
                  Advertising, Ambience, JWT and Contract. Over a career
                  spanning 30 years he has worked on many multi-national as well
                  as leading Indian Brands. The last 15 years he has been
                  creating and helming his own ventures including start-ups in
                  the charity and food & beverages space. With Black, his latest
                  venture, he is fashioning the agency of his dreams."
              />

              <Person
                img={Prabhakar}
                width="150"
                name="C P Prabhakaran"
                link="/prabhakar"
                desc="Director- Business"
                details="Prabhakaran is the consummate advertising andmarketing
                  professional. With 3 decades of experience both on the agency
                  side as well as the brand side. He has worked with some of the
                  leading advertising agencies in Bangalore including Saatchi
                  &Saatchi, Maa Bozzel and Everest. Where he has handled a
                  diverse portfolio of clients in the FMCG as well as other
                  categories. Later he moved on to work on the brand side with
                  RMZ Corp, Bangalore's leading Corporate and Residential
                  developer, for 10 years as head of marketing communication for
                  both, RMZ Homes and Commercial spaces."
              />

              <Person
                img={Pramoda}
                width="150"
                name="Pramoda Rangari"
                link="/pramoda"
                desc="Director- Design"
                details="Pramod Rangari has evolved over the last 30 years from being a
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
                  Division. "
              />

              <Person
                img={Sonica}
                width="125"
                name="Sonica Singh"
                link="/sonica"
                desc="Head-Digital marketing and Strategy"
                details="Sonica has a hawk’s eye when it comes to execution details.
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
                  "
              />

              <Person
                img={Tanmay}
                width="150"
                name="Dr. Tanmay"
                link="/tanmay"
                desc="Director- Marketing Strategy & Services"
                details="Tanmay not only comes with all the right qualifications but
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
                  companies). "
              />

              <Person
                img={Nisal}
                width="150"
                name="Nisal Mohamed"
                link="/nisal"
                desc="Director- Retail Strategy & Implementation"
                details="Nisal has been there, done that. His down-to-earth demeanour
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
                  experiences across domains. "
              />

              <Person
                img={Sasi}
                width="150"
                name="Sasi Bhaskaran"
                link="/sasi"
                desc="Creative Director- Art"
                details="Sasi is a sculptor turned digital artist- turned magazine
                designer-turned advertising art director. Sasi brings a keen
                eye for aesthetically pleasing designs and at the same time
                creates pieces of work that are meaningful and interesting in
                their depth, creating vibrant geographical contours across the
                advertising landscape. Basically, work that stand-out in a sea
                of sameness. Sasi’s work talks for itself, that’s probably why
                you will find him to be a man of few words. "
              />

              <Person
                img={Vishaka}
                width="150"
                name="Vishakha"
                link="/vishakha"
                desc="Account Manager"
                details="Vishakha is well travelled, having held jobs in different
                parts of the world before she ended up at Bask. Her last job
                was at a logistics company in New York, managing operations
                across a wide-spectrum of clients. She now realizes that was
                child’s play compared to handling deliverables at an ad
                agency. "
              />

              <Person
                img={Akansha}
                width="150"
                name="Akansha"
                link="/akansha"
                desc="Art Director"
                details="An experimental art-director with a spiritual bent of mind,
                she somehow believes Bask is going to help open her third-eye.
                We are not sure about that, but her designs are sure to open
                your eyes. "
              />
            </Row>
          </Col>
        </Row>
      </div>
    </section>
              </Col>
          </Row>
        </div>
      </Container>
    </Container>
    <Contact />

    
    </div>
  );
};

export default Team;
