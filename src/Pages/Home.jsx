import React from "react";

function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="mobile-menu">
          <span className="open-slide">
            <div className="mx-2 text-danger" href="#">
              <i className="bi bi-list fs-1 fw-bolder" />
            </div>
          </span>
          <div className="image-container-mobile">
            <a href="index.html" className="logo-mobile">
              {/* <img
              src="assets/img/logo.png"
              alt="solfix logo"
              className="img-fluid"
            /> */}
            </a>
          </div>
        </div>
        <div className="desktop-menu">
          <div className="image-container">
            <a href="index.html" className="logo">
              {/* <img
              src="assets/img/logo.png"
              alt="solfix logo"
              className="img-fluid"
            /> */}
            </a>
          </div>
          <ul className="navbar-nav" style={{ marginRight: 30 }}>
            <li className="nav-lists">
              <a href="/">Home</a>
            </li>
            <li className="nav-lists">
              <a href="/#services">Service</a>
            </li>
            <li className="nav-lists">
              <a href="/about">About</a>
            </li>
            <li className="nav-lists">
              <a href="/contact.html">Contact</a>
            </li>
            <li className="nav-lists">
              <a href="tel:256751297229">
                <i className="bi bi-telephone-fill mx-1 text-danger" />
                call us
              </a>
            </li>
            <li className="buttons-filled ">
              <a href="https://solfixafrica.com/signup">sign up</a>
            </li>
            <li className="buttons-outlined mx-1">
              <a href="https://solfixafrica.com/signin">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="side-menu" className="side-nav">
        <div className="btn-close text-light">×</div>
        <a href="/#">Home</a>
        <a href="/#services">Service</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
        <a href="tel:256751297229">
          <span className="px-1">call us</span>{" "}
          <i className="bi bi-telephone-fill text-danger" />{" "}
        </a>
        <a
          href="https://solfixafrica.com/signup"
          className="btn btn-danger text-light m-1 rounded-0 "
        >
          Sign up
        </a>
        <a
          href="https://solfixafrica.com/signin"
          className="btn btn-outline-danger m-1 rounded-0 text-danger"
        >
          Sign in
        </a>
      </div>
      {/* End Navbar */}
      {/* ======= Body wrapper ======= */}
      <section id="body-wrapper" className="animate__animated animate__fade">
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>
                  All professional services for your business in Uganda right
                  here!
                </h1>
                <h2>
                  {" "}
                  On-demand services. Less stress, more time and better
                  business.
                </h2>
                <div className="d-flex">
                  <a
                    className="btn btn-outline-danger rounded-0 mx-1"
                    href="/#services"
                  >
                    <span>Our Services</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                {/* <img
              src="assets/img/hero-img.png"
              className="img-fluid animated"
              alt=""
            /> */}
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <div id="main">
          {/* ======= Featured Services Section ======= */}
          <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="icon">
                      <i className="bi bi-book" />
                    </div>
                    <h4 className="title">
                      <a href="https://solfixafrica.com/services/documents">
                        Legal Documents
                      </a>
                    </h4>
                    <a
                      style={{ color: "black" }}
                      href="https://solfixafrica.com/services/documents"
                    >
                      <p className="description">
                        Process your legal Documents with us to meet your legal
                        goals
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="icon">
                      <i className="bi bi-building" />
                    </div>
                    <h4 className="title">
                      {/* <a href="">Register your company</a> */}
                    </h4>
                    <p className="description">
                      Process your company registration requirements at your
                      convince .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Featured Services Section */}
          {/* ======= about Section ======= */}
          <section id="about" className="about ">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="row justify-content-end">
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={80}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Happy Clients</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={85}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Documents</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-clock" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={2}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Years of experience</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={50}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Business assisted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 video-box align-self-baseline"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  {/* <img src="assets/img/workIMG.png" className="img-fluid" alt="" /> */}
                  {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a> */}
                </div>
                <div className="col-lg-6 pt-3 pt-lg-0 content">
                  <h3>
                    Join with more customers who have relied on us for their
                    business needs.
                  </h3>
                  <p className="fst-italic">We are here:</p>
                  <ul>
                    <li>
                      <i className="bx bx-check-double" />
                      Helping entrepreneurs turn ideas into businesses.
                    </li>
                    <li>
                      <i className="bx bx-check-double" /> Providing access to
                      our independent network of professionals.
                    </li>
                    <li>
                      <i className="bx bx-check-double" /> Getting all
                      documentation for starting your business and growing it.
                    </li>
                  </ul>
                  <p>Have a peace of mind in your business.</p>
                </div>
              </div>
            </div>
          </section>
          {/* End about Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Services</h2>
                <p>Check our Services</p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-md-6">
                  <div className="icon-box">
                    {/* <a href="/services/intellectualproperty.html"> */}
                    <i className="bi bi-clipboard-check" />
                    <h4>Intellectual Property</h4>
                    <p>Protect your ideas and brand to grow smoothly.</p>
                    {/* </a> */}
                    <div className="text-end buttons">
                      <a
                        href="/#"
                        className="btn btn-outline-primary btn-sm rounded-0 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Ask Us
                      </a>
                      <a
                        href="/services/intellectualproperty.html"
                        className="btn btn-danger btn-sm mx-1 rounded-0"
                      >
                        Get started →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box">
                    <a href="/services/businesdevelopment.html">
                      <i className="bi bi-briefcase" />
                      <h4>Business Development</h4>
                      <p>Start and run your business simplified with us.</p>
                    </a>
                    <div className="text-end buttons">
                      <a
                        href="/#"
                        className="btn btn-outline-primary btn-sm rounded-0 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Ask Us
                      </a>
                      <a
                        href="/services/businesdevelopment.html"
                        className="btn btn-danger btn-sm mx-1 rounded-0"
                      >
                        Get started →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box">
                    {/* <a href="/services/tax.html"> */}
                    <i className="bi bi-graph-up-arrow" />
                    <h4>Tax</h4>
                    <p>
                      Trust us to simplify your tax filings and bookkeeping.
                    </p>
                    {/* </a> */}
                    <div className="text-end buttons">
                      <a
                        href="/#"
                        className="btn btn-outline-primary btn-sm rounded-0 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Ask Us
                      </a>
                      {/* <a href="/services/tax.html" class="btn btn-danger btn-sm mx-1 rounded-0">Get started &#8594;</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box">
                    {/* <a href="/services/trainings.html"> */}
                    <i className="bi bi-people" />
                    <h4>Trainings</h4>
                    <p>
                      Receive training from us on how to establish your business
                      legally and grow successfully.{" "}
                    </p>
                    {/* </a> */}
                    <div className="text-end buttons">
                      <a
                        href="/#"
                        className="btn btn-outline-primary btn-sm rounded-0 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Ask Us
                      </a>
                      {/* <a href="/services/trainings.html" class="btn btn-danger btn-sm mx-1 rounded-0">Get started &#8594;</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section */}
          {/* ======= Call to action Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div
                      style={{ height: 300 }}
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0  d-flex align-items-center features-content"
                    >
                      <div>
                        <h3>
                          We understand that every business has different needs
                          in Uganda.
                        </h3>
                        <p className="fst-italic">
                          Our experts will guide you to what your business
                          needs, to help set you up for success.
                        </p>
                        <a
                          className="btn btn-danger rounded-0 mx-1"
                          href="/#services"
                        >
                          <span>Our Services</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Call to action Section */}
          {/* ======= Clients Section ======= */}
          <div>
            <section id="clients" className="clients pb-5">
              <div className="container" data-aos="zoom-in">
                <div
                  className="section-title text-start pt-5 pb-0"
                  style={{ backgroundColor: "#F0F4F8" }}
                >
                  <h2>Partners</h2>
                  <p>Our Partners</p>
                </div>
              </div>
            </section>
          </div>
          {/* End Clients Section */}
          {/* ======= Testimonials Section ======= */}
          {/* <section id="testimonials" class="testimonials">
<div class="container" data-aos="zoom-in">

  <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="https://avatars.githubusercontent.com/u/42036497?v=4" class="testimonial-img" alt="">
          <h3>Michael Kasingye</h3>
          <h4>Ceo &amp; Founder</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            I do love the services, I was able to register my company and get the necessary documents with
            ease, I am gratefully
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div> */}
          {/* End testimonial item */}
          {/* <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
          <h3>Semakula Paul Smith</h3>
          <h4>Construction Engineer</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            This is an awesome service, while I was in Australia, During the lock down, I was able to 
            open up a company in Uganda, conveniently, this is amazing
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div> */}
          {/* End testimonial item */}
          {/* </div>
    <div class="swiper-pagination"></div>
  </div>

</div>
    </section> */}
          {/* End Testimonials Section */}
        </div>
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info">
                    <h3>Solfix Africa</h3>
                    <p>
                      Charm Towers level - 2 <br />
                      Plot 12, Kampala Road
                      <br />
                      <br />
                      <strong>Phone:</strong> +256 414 699 575
                      <br />
                      <strong>WhatsApp:</strong> +256 706 045 950
                      <br />
                      <strong>Email:</strong> info@solfixafrica.com
                      <br />
                    </p>
                    <div className="social-links mt-3">
                      {/* <a href="#" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a> */}

                      {/* <a href="#" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/about.html">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/#services">Services</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/services/intellectualproperty.html">
                        Intellectual Property
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/services/businesdevelopment.html">
                        Business Development
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/services/trainings.html">Trainings</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/services/tax.html">Tax</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Company</h4>
                  <p>
                    All professional services for your business in Uganda right
                    here!. On-demand services. Less stress, more time and better
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Solfix</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
        {/* End Footer */}`
      </section>{" "}
      {/* End wrapper */}
      {/* ======= preloader ======= */}
      <div
        id="preloader"
        className="d-flex  align-items-center justify-content-center flex-wrap"
      >
        {/* <img
      src="assets/img/solfix logos/solfixlogo1.jpeg"
      alt="solfix logo"
      width={100}
      height={200}
      className="img-fluid m-4"
    /> */}
      </div>
      {/* ======= floating icons ======= */}
      <a
        href="/#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up" />
      </a>
      {/* Whatsapp icon */}
      <div className="to-left d-flex align-items-center justify-content-between">
        <span className="text-dark">message us</span>
      </div>
      {/* end floating icons */}
      {/* cookiePopup  */}
      <div id="cookiePopup">
        {/* <h5>Cookie Consent</h5> */}
        <p>
          Our website uses <strong>cookies</strong> to provide your browsing
          experience and relevant information.Before continuing to use our
          website, you agree &amp; accept of our{" "}
          <a href="/cookiePolicy.html">Cookie Policy</a>
        </p>
        <button id="acceptCookie">Accept</button>
      </div>
      {/* =======  Modals' Bodies ======= */}
      {/* Ask us Modal  */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Quick Message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="name"
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="email"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    ASk Your Question Here
                  </label>
                  <textarea
                    className="form-control"
                    id="question.."
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <input type="Submit" className="btn btn-danger rounded-0 m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Ask Us message Modal */}
      {/* Health check Modal  */}
      <div
        className="modal fade "
        id="healthCheck"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Business Health Check
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="name"
                    className="form-label"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="email"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Your Question
                  </label>
                  <textarea
                    className="form-control"
                    id="question.."
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <input type="Submit" className="btn btn-danger rounded-0 m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Health check Modal */}
      {/* All Documents Tab Modal  */}
      <div
        className="modal fade "
        id="allDocumentsTab"
        tabIndex={-1}
        aria-labelledby="allDocumentsTabModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="allDocumentsTabModalLabel">
                Get all legal documents
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="name"
                    className="form-label"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe LTD"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="email"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    What documents would you like to get
                  </label>
                  <textarea
                    className="form-control"
                    id="question.."
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <input type="Submit" className="btn btn-danger rounded-0 m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End All Documents Tab Modal */}
      {/* Manage your business compliance Tab Modal  */}
      <div
        className="modal fade "
        id="businessComplianceTab"
        tabIndex={-1}
        aria-labelledby="businessComplianceTabTabModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="businessComplianceTabModalLabel">
                Manage your business compliance
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="name"
                    className="form-label"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe LTD"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="email"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Would you like us to manage your business compliance
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="Yes"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="No"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      No
                    </label>
                  </div>
                </div>
                <input type="Submit" className="btn btn-danger rounded-0 m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Manage your business compliance Tab Modal */}
      {/* Manage intellectual property Tab Modal  */}
      <div
        className="modal fade "
        id="intellectualPropertyTab"
        tabIndex={-1}
        aria-labelledby="intellectualPropertyTabModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="intellectualPropertyTabModalLabel"
              >
                Manage intellectual property
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="name"
                    className="form-label"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe LTD"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="email"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Would you like us to secure your intellectual property
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="Yes"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="No"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      No
                    </label>
                  </div>
                </div>
                <input type="Submit" className="btn btn-danger rounded-0 m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Manage intellectual property Tab Modal */}
      {/* Register your company Tab Modal  */}
      <div
        className="modal fade "
        id="RegisterCompanyTab"
        tabIndex={-1}
        aria-labelledby="RegisterCompanyTabModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="RegisterCompanyTabModalLabel">
                Register your company
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="name"
                    className="form-label"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe LTD"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="email"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Would you like us to register your company
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="Yes"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="No"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      No
                    </label>
                  </div>
                </div>
                <input type="Submit" className="btn btn-danger rounded-0 m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Register your company Tab Modal */}
      {/* Book a training with us Tab Modal  */}
      <div
        className="modal fade "
        id="trainingTab"
        tabIndex={-1}
        aria-labelledby="trainingTabModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="trainingTabModalLabel">
                Book a training with us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="name"
                    className="form-label"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe LTD"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    name="email"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Would you like us to book a training with us
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="Yes"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="No"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      No
                    </label>
                  </div>
                </div>
                <input type="Submit" className="btn btn-danger rounded-0 m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Book a training with us Tab Modal */}
      {/* End of MOdal Bodies */}
      {/* Vendor JS Files */}
      {/*  */}
      {/* JavaScript Bundle with Popper */}
      {/* Template Main JS File */}
      {/*  */}
    </>
  );
}

export default Home;
