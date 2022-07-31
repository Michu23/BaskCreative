import React from "react";
import Main from "../Components/Main";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgressBar from "react-progressbar-on-scroll";
import { Row, Col } from "react-bootstrap";

import Sampath from "./Sampath.jpg";
import Prabhakar from "./Prabhakar.jpg";
import Pramoda from "./Pramoda.jpg";
import Sonica from "./Sonica.jpg";
import Sasi from "./Sasi.jpg";
import Vishaka from "./Vishaka.jpg";
import Akansha from "./Akansha.jpg";

Aos.init();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
}

const Home = () => {
  return (
    <>
      <ProgressBar color="#fee600" height={10} />
      <div className="p-0 m-0 contain  y mandatory-scroll-snapping">
        <section
          className="maintitle"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className="maincontent first container-fluid" data-aos="fade-up">
            <p className="title bask ">Bask</p>
            <div className="subtitlediv m-0 p-0">
              <p className="subtitle ms-2">creative</p>
            </div>
          </div>
          <div className="container px-2" data-aos="fade-up">
            <p className="description mx-1">
              Bask in the bright lights of fame. Be the brand that everyone
              wants. Be desired. Be admired. Be possessed. We will do everything
              that’s required to put your brand in the limelight. And be made
              irreplaceable. Finding the way into the minds and hearts of people
              and making brands be loved is what Bask strives to do. If you want
              to take your brand and put it centre stage, we are probably the
              ones to talk to.
            </p>
          </div>
        </section>

        <section>
          <div>
            <div className="maincontent">
              <br />
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                Rooted in
              </p>
              <p
                className="heading2"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                Strategy.
              </p>
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                Fuelled
              </p>
              <p
                className="heading2"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                by ideas.
              </p>
            </div>
            <br />
            <br />

            <div className="container">
              <p className="description mx-2">
                Being creative begins with a great strategy. Without a great
                strategy, there’s no great creativity. You will see that every
                great campaign ever, every great brand that was ever created all
                flowed from insight-driven strategy.
              </p>
              <br />
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
        </section>

        <section className="navs">
          <div>
            <div className="www naves ms-3">
              <br />
              <br />
              <div>
                <a href="#weare">

                    <p
                  className="cp"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                  
                >
                  who we are
                </p>
                </a>
                <a href="#wedo">
<p
                  className="ww cp"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                  
                >
                  what we do
                </p>

                </a>

                <a href="#work"> <p
                  className="cp"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                    
                >
                  work
                </p></a>
                
                
               
              </div>
            </div>
          </div>
        </section>

        <section className="purpose-driven">
          <div className="maincontent">
            <p
              className="heading2 ww"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-cubic"
            >
              Purpose
            </p>
            <p
              className="heading2"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-cubic"
            >
              -driven
            </p>
          </div>
          <div>
            <div className="container">
              <p className="subheading ms-2">
                Purpose-The framework behind every great brand.
              </p>
              <p className="description mx-2">
                We believe we are not separate, but one. Everything that we do
                stems from the awareness that whatever affects everyone affects
                us too. So we try to infuse purpose into every brand we work
                with. Purpose is not with a profit motive but with the
                realisation that inevitably, in today’s world, profits are a
                side effect of doing good. We do not believe brands can anymore
                exist in silos that suck money out of people with only
                shareholder benefit at its core. In a way, it is still
                shareholder benefit- driven. But this time the definition of a
                shareholder is much wider and include every human on this
                planet. We believe purpose in every organisation begins
                internally with their own people. And this is the foundation of
                building a purpose-driven brand.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="maincontent"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-cubic"
            >
              <br />
              <p
                className="heading2 ww"
                
              >
                Powering
              </p>
              <p
                className="heading2 ww"
                
              >
                brands
              </p>
              <p
                className="heading2"
                
              >
                through
              </p>
              <p
                className="heading2"
                
              >
                creative
              </p>
              <p
                className="heading2 ww"
                
              >
                thinking.
              </p>
            </div>
            <br />
            <br />

            <div className="container">
              <p className="description mx-2">
                Every brand has access to analytics. When you infuse creative
                thinking into this, you unleash insights that have the power to
                move markets. If your brand needs an infusion of creativity,
                call us. Creativity is the energy brands need to keep themselves
                young and active.
              </p>
              <p className="subheading yy">Creative Strategy</p>
              <p className="description mx-2">
                The basis of everything that the Outsiders do. This is arrived
                at from understanding theconsumer. Not what they ask for or what
                they want or what they tell us. But by mining subconscious
                desires that lie under the surface of the mind of the consumer.
                Andcorrelating it with the market as well as the brand.
              </p>
              <p className="subheading yy">Big Idea</p>
              <p className="description mx-2">
                The holy grail of this business. If we don’t get a big idea, we
                try harder until we have one. Big ideas are what differentiate
                the brand and create a moat that competitors find hard to cross.
              </p>
              <p className="subheading yy">Great Execution</p>
              <p className="description mx-2">
                As Bernbach said, execution is content in a work of art. We are
                always trying to get there. Take a powerful idea and execute it
                till it transforms into something even bigger.
              </p>

              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
        </section>

        <section id="weare">
          <div>
            <div className="maincontent">
              <br />
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                Who
              </p>
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                we are
              </p>
            </div>
            <br />
            <br />

            <div className="container">
              <p className="description mx-2">
                We are a group of experienced professionals and young minds with
                the united intention of creating ground-breaking work for brands
                across the spectrum. We treat everyone equitably and try to
                bring transparency to everything we do. Our vision is to create
                a great business and a joyful place to work. We believe in
                inclusiveness. We are classless, gender- neutral and believe
                every human can overcome their conditioning to realise their
                potential. We believe what stops us is in the mind. Remove these
                mental obstacles and we have a clear path to success. Hard work
                is the genius factor in every great talent. We believe hard work
                is fun. And hard work is about thinking about new stuff. Not
                monotonous drivel. We believe in hard work that energises you
                and not the hard work that saps your energy.
              </p>
              <p className="subheading yy">Our spirit</p>
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                ‘I tap dance
              </p>
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                to work
              </p>

              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                every day.’
              </p>

              <p className="subheading yy">- Warren Buffett</p>

              <p className="subheading yy">Creative Soul. Digital Heart</p>

              <p className="description mx-2">
                Though we emphasise the importance of everything that we do, we
                are also very digitally savvy. We have a team that is
                experienced in digital strategy and execution across Performance
                Marketing, Website Design, Social Marketing and Native
                advertising.
              </p>

              <p className="description mx-2">
                Digital Strategy | Websites | UI/UX | Apps | SEO | Social Media
                Strategy | Social Media Content Social Media Analytics | Content
                Writing | Performance Marketing | Social Media Marketing Native
                Advertising | Influencer Marketing
              </p>
            </div>
            <br />
            <br />
          </div>
        </section>

        <section id="wedo">
          <div>
            <div className="maincontent">
              <br />
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                What
              </p>
              <p
                className="heading2 ww"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                we do
              </p>
            </div>
            <br />
            <br />

            <div className="container">
              <p className="description mx-2">
                Brand Strategy | Identity Design | Packaging | Communication
                Campaigns | Performance Marketing | Social Campaigns | Native
                Advertising | Websites | Blogs | Experience Design
              </p>
              <br></br>
            </div>
          </div>
        </section>
        <section></section>

        <section className="container-fluid w-100" id="work">
          <div className="yy mb-5">
            <h1 className="display-1 mb-3">Our Team</h1>
          </div>
          <div className="container">
            <Row className="mx-2">
              <Col md={4} className="d-flex  flex-column px-5  box">
                <img src={Sampath} width={250}></img>
                <p className="subheading">Sambath</p>
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
              <Col md={4} className="d-flex  flex-column px-5 box">
                <img src={Prabhakar} width={200}></img>
                <p className="subheading">C P Prabhakaran</p>
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
                md={4}
                className="d-flex  flex-column px-5 box align-items-start"
              >
                <img src={Pramoda} width={200}></img>
                <p className="subheading">Pramoda Kumar</p>
                <p className="text-white">Director- Design</p>
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
            </Row>
            <br />
            <Row>
              <Col md={4} className="d-flex  flex-column px-5 box ">
                <img src={Sonica} width={200}></img>
                <p className="subheading">Sonica Singh</p>
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
                  basis. Her experiences include working with micro, small and
                  mid-sized clients to large corporations through her agency
                  engagements. She has worked with clients in hospitality,
                  fitness and wellness, fashion, healthcare, retail, real
                  estate, technology, non-profit organisations, and many others.
                  Before she dived headlong into the digital world she had
                  various sales and marketing roles with Taj Hotels, ITC Hotels,
                  The Ritz-Carlton Hotel Company and Accor Hotels .
                </p>
              </Col>
              <Col
                md={4}
                className="d-flex  flex-column px-5  box align-items-start"
              >
                <img src={Sasi} width={200} className=""></img>
                <p className="subheading">Sasi Bhaskaran</p>
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
              <Col md={4} className="d-flex flex-column px-5 box">
                <img src={Vishaka} width={200}></img>
                <p className="subheading">Vishaka</p>
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
            </Row>
            <br />
            <Row>
              <Col
                md={4}
                className="d-flex justify-content-center flex-column px-5 box"
              >
                <img src={Akansha} width={200}></img>
                <p className="subheading">Akansha</p>
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

        <section>
          <div className="yy mb-5">
            <h1 className="display-1 mb-3">Contact us</h1>
          </div>
          <div className="container">
            <Row>
              <Col>
              <h1 className="ww pb-2 display-6">Communicate with us!</h1>
                <form className="text-white" id="submit_form" onSubmit={(e)=>{
                    handleSubmit(e)
                    }}>
                  <div className="form-group my-2">
                    <label for="exampleFormControlInput1">Name</label>
                    <input
                      type="email"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                      type="email"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      className="form-control py-2"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary w-25"
                    value="Submit"
                  />
                </form>
              </Col>
              <Col className="ps-5">
                <h1 className="ww pb-2 display-6">Bangalore</h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.655758383615!2d77.6350955!3d12.9613594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe01b32340b5de090!2sMNR%20PRIDE!5e0!3m2!1sen!2sin!4v1659097414987!5m2!1sen!2sin"
                  className="w-100 h-50 pe-5"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="text-white pt-5">
                <p>
                LET’S TALK BUSINESS
                <br></br>
                prabhakar@blackis.in
                </p>
                <br></br>

                <p>
                CALL IT OUT
                <br></br>
                +91 99809 12312
                </p>
                <br></br>

                <p>
                BE A OUTSIDER
                <br></br>
                info@blackis.in
                </p>
                <br></br>


                <p>
                CONNECT
                <br></br>
                Instagram
                <br></br>
                Facebook
                <br></br>
                Linkedin
                </p>
                <br></br>

                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Home;
