import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Weare from "./whoweare.svg";
import Quote from "./quote.jpg";
import Whowe from "./Edited_whowe.svg";
import Are from "./edited_ARE.svg";

const WeAree = () => {
  return (
    <>
      <Container fluid className=" m-0 p-0 bgg ">
        <Container className="mx-2 pt-5 pe-3 ">
          <div>
            <Row className="bottom-0">
              <Col md={1}></Col>
              <Col md={11}>
                {/* <h1 className="botton-0">Hello</h1> */}
                <img src={Whowe} alt="" className="img-fluid" />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Container fluid className=" m-0 p-0 bgy">
        <Container className="mx-2 pb-5 pe-3">
          <div>
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <Row>
                  <Col md={6}>
                    <img src={Are} alt="" className="img-fluid" />
                  </Col>
                  <Col md={1}></Col>
                  <Col md={4}>
                    <Container className="p-5 textgrey">
                      <Row>
                        <div className="my-4"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          <b>
                            <h1 className="">Creative Led</h1>
                          </b>
                          <p className="pt-2">
                            Everything we do at Bask has a creative angle. We
                            know a problem can have many solutions, but the
                            creative ones are also the most effective ones. It’s
                            not just about constant improvement, but about
                            constant creative improvement
                          </p>
                        </div>
                        <div className="my-4"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          <b>
                            <h1 className="">Tech Intensive</h1>
                          </b>
                          <p className="pt-2">
                            We believe with the right tech we can have the
                            flexibility to expand our thinking to areas we would
                            not have otherwise explored as a brand agency. We
                            use tech to bring better and more creative solutions
                            for our clients’ problems.
                          </p>
                        </div>
                        <div className="my-4"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          <b>
                            <h1 className="">Idea Centric</h1>
                          </b>
                          <p className="pt-2">
                            At Bask everything revolves around ideas. The search
                            for the big idea fuels our existence.
                          </p>
                        </div>
                        <div className="my-4"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        >
                          <b>
                            <h1 className="">Responsible</h1>
                          </b>
                          <p className="pt-2">
                            Our responsibility is to ourselves, our clients, our
                            work, our people and to everyone who comes in
                            contact with our work. We are here to enrich lives.
                            And live an enriched life.
                          </p>
                        </div>
                      </Row>
                    </Container>
                  </Col>
                </Row>
                {/* <img src={Are} alt="" className="w-50 img-fluid" /> */}
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default WeAree;

// <section id="weare" className="wearesection">
//   <div>
//     <div className="maincontent">
//       <br />
//       <p
//       className="heading2 ww"
//       data-aos="fade-up"
//       data-aos-delay="50"
//       data-aos-duration="1000"
//       data-aos-easing="ease-in-out-cubic"
//     >
//       Who
//     </p>
//     <p
//       className="heading2 ww"
//       data-aos="fade-up"
//       data-aos-delay="50"
//       data-aos-duration="1000"
//       data-aos-easing="ease-in-out-cubic"
//     >
//       we are
//     </p>
//       <img
//         src={Weare}
//         alt=""
//         className="logo"
//         data-aos="fade-up"
//         data-aos-delay="50"
//         data-aos-duration="1000"
//         data-aos-easing="ease-in-out-cubic"
//       />
//     </div>
//     <br />
//     <br />

//     <div className="container">
//       <Row className="">
//         <Col md={1}></Col>
//         <Col md={11}>
//           <p
//             className="description2 fr"
//             data-aos="fade-up"
//             data-aos-delay="50"
//             data-aos-duration="1000"
//             data-aos-easing="ease-in-out-cubic"
//           >
//             We are a group of experienced professionals and young minds with
//             the united intention of creating ground-breaking work for brands
//             across the spectrum. We treat everyone equitably and try to
//             bring transparency to everything we do. Our vision is to create
//             a great business and a joyful place to work. We believe in
//             inclusiveness. We are classless, gender- neutral and believe
//             every human can overcome their conditioning to realise their
//             potential. We believe what stops us is in the mind. Remove these
//             mental obstacles and we have a clear path to success. Hard work
//             is the genius factor in every great talent. We believe hard work
//             is fun. And hard work is about thinking about new stuff. Not
//             monotonous drivel. We believe in hard work that energises you
//             and not the hard work that saps your energy.
//           </p>
//         </Col>
//       </Row>

//       <div className="quote px-2">

//         <p className="subheading yy">
//           <b>Our spirit</b>
//         </p>
//         <p
//         className="heading2 ww"
//         data-aos="fade-up"
//         data-aos-delay="50"
//         data-aos-duration="2000"
//         data-aos-easing="ease-in-out-cubic"
//       >
//         ‘I tap dance
//       </p>
//       <p
//         className="heading2 ww"
//         data-aos="fade-up"
//         data-aos-delay="50"
//         data-aos-duration="2000"
//         data-aos-easing="ease-in-out-cubic"
//       >
//         to work
//       </p>

//       <p
//         className="heading2 ww"
//         data-aos="fade-up"
//         data-aos-delay="50"
//         data-aos-duration="2000"
//         data-aos-easing="ease-in-out-cubic"
//       >
//         every day.’
//       </p>
//         <img
//           data-aos="fade-up"
//           data-aos-delay="50"
//           data-aos-duration="2000"
//           data-aos-easing="ease-in-out-cubic"
//           src={Quote}
//           alt=""
//           className="img-fluid"
//         />
//         <div className="d-flex justify-content-end">
//           <p className="subheading2 yy">- Warren Buffett</p>
//         </div>
//       </div>

//       <Row>
//         <Col md={2}></Col>
//         <Col md={10}>
//           <p className="subheading "
//           data-aos="fade-up"
//           data-aos-delay="50"
//           data-aos-duration="1000"
//           data-aos-easing="ease-in-out-cubic"
//           >Creative Soul. Digital Heart</p>

//           <p
//             className="description  px-2  mx-2"
//             data-aos="fade-up"
//             data-aos-delay="50"
//             data-aos-duration="1000"
//             data-aos-easing="ease-in-out-cubic"
//           >
//             Though we emphasise the importance of everything that we do, we
//             are also very digitally savvy. We have a team that is
//             experienced in digital strategy and execution across Performance
//             Marketing, Website Design, Social Marketing and Native
//             advertising.
//           </p>

//           <p
//             className="description  px-2  mx-2"
//             data-aos="fade-up"
//             data-aos-delay="50"
//             data-aos-duration="1000"
//             data-aos-easing="ease-in-out-cubic"
//           >
//             <b>
//               Digital Strategy | Websites | UI/UX | Apps | SEO | Social
//               Media Strategy | Social Media Content Social Media Analytics |
//               Content Writing | Performance Marketing | Social Media
//               Marketing Native Advertising | Influencer Marketing
//             </b>
//           </p>
//         </Col>
//       </Row>
//     </div>
//     <br />
//     <br />
//   </div>
// </section>
