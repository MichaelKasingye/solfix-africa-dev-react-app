import React from 'react'

export default function Contact() {

  return (
    <section id="contact" className="contact mt-5">
    <div className="container">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
      <div className="w-100" data-aos="fade-up" data-aos-delay={100}>

 

        <div className="d-flex align-items-stretch">
          <div className="info">
            <div className="contact_details">
            <div className="address">
              <i className="bi bi-whatsapp" />
              <a href="https://api.whatsapp.com/send/?phone=256751297229&text=Hello%2C+how+may+we+help+you%3F+Just+send+us+a+message&app_absent=0" 
              rel="noreferrer"
              target="_blank">
              <h4>Whatsapp:</h4>
              <p>+256 751 297 229</p>
              </a>
            </div>
            <div className="email" data-bs-toggle="modal" data-bs-target="#ContactForm">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>info@solfixafrica.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <a href="tel:256751297229">
              <h4>Call Us:</h4>
                </a>
              <p>+256 414 699 575</p>
            </div>

            </div>
            <iframe
            title="Company Map"
              src="https://maps.google.com/maps?q=Charm%20Towers%20Kampala%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 290 }}
              allowFullScreen=""
            />
          </div>
        </div>
        <div className=" d-flex align-items-stretch">
         
        </div>
      </div>
    </div>
    
  </section>

  )
}
