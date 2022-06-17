import React from 'react'

export default function Contact() {

  return (
  //   <section id="contact" className="contact mt-5">
  //   <div className="container">
  //     <div className="section-title">
  //       <h2>Contact</h2>
  //       <p>Contact Us</p>
  //     </div>
  //     <div className="w-100" data-aos="fade-up" data-aos-delay={100}>

 

  //       <div className="d-flex align-items-stretch">
  //         <div className="info">
  //           <div className="contact_details">
  //           <div className="address">
  //             <i className="bi bi-whatsapp" />
  //             <a href="https://api.whatsapp.com/send/?phone=256751297229&text=Hello%2C+how+may+we+help+you%3F+Just+send+us+a+message&app_absent=0" 
  //             rel="noreferrer"
  //             target="_blank">
  //             <h4>Whatsapp:</h4>
  //             <p>+256 751 297 229</p>
  //             </a>
  //           </div>
  //           <div className="email" data-bs-toggle="modal" data-bs-target="#ContactForm">
  //             <i className="bi bi-envelope" />
  //             <h4>Email:</h4>
  //             <p>info@solfixafrica.com</p>
  //           </div>
  //           <div className="phone">
  //             <i className="bi bi-phone" />
  //             <a href="tel:256751297229">
  //             <h4>Call Us:</h4>
  //               </a>
  //             <p>+256 414 699 575</p>
  //           </div>

  //           </div>
  //           <iframe
  //           title="Company Map"
  //             src="https://maps.google.com/maps?q=Charm%20Towers%20Kampala%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
  //             frameBorder={0}
  //             style={{ border: 0, width: "100%", height: 290 }}
  //             allowFullScreen=""
  //           />
  //         </div>
  //       </div>
  //       <div className=" d-flex align-items-stretch">
         
  //       </div>
  //     </div>
  //   </div>
    
  // </section>

<section
  id="body-wrapper"
  className="animate__animated animate__fadeIn mt-5"
>
  <div id="main">
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>Charm Towers level - 2, Plot 12, Kampala Road</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info@solfixafrica.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+256 414 699 575</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Charm%20Towers%20Kampala%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Solfix location"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 290 }}
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              // action="mail/contact"
              // method="post"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="name">Your Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Subject *</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Message *</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  required
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </div>
</section>


  )
}
