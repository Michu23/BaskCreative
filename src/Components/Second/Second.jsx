import React from 'react'
import Rooted from './rooted.svg'

const Second = () => {
  return (
    <section>
          <div>
            {/* <div className="maincontent"> */}
              {/* <br />
              <div
                className='z-index'
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <p className="heading2 ww">Rooted in</p>
                <p className="heading2 z-index">strategy.</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <p className="heading2 ww">Fuelled</p>
                <p className="heading2">by ideas.</p>
              </div> */}
              <img src={Rooted} alt="img" className='logo2 mt-5 pt-5'
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
              />
            {/* </div> */}
           

            <div className="container">
              <p className="description  px-2 fr  mx-2">
                Being creative begins with a great strategy. Without a great
                strategy, there’s no great creativity. You will see that every
                great campaign ever, every great brand that was ever created all
                flowed from insight-driven strategy.
              </p>
              
            </div>
           
          </div>
        </section>
  )
}

export default Second