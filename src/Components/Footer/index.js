import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-4">
                <div className="footer-info">
                  <h3>Solfix Africa</h3>
                  <p>
                    Charm Towers Level 2 <br />
                    Plot 12, Kampala Road
                    <br />
                    <br />
                    <strong> <i className="bi bi-phone-fill" /></strong> +256 414 699 575
                    <br />
                    <strong><i className="bi bi-whatsapp"></i></strong> +256 706 045 950
                    <br />
                    <strong><i className="bi bi-envelope-fill"></i></strong> info@solfixafrica.com
                  </p>
                
                </div>
              </div>
           
              <div className="col-lg-4 col-md-4 footer-links">
                <h4>Popular Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="/company-registration-page">Register a Company</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="/legal-documents-page">Legal Documents</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="https://dashboard.solfixafrica.com/login">Sign Up</Link>
                  </li>
                  {/* <li>
                    <i className="bx bx-chevron-right" /> <a href="/">Tax</a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 footer-newsletter">
              <div className="social-links mt-3">
                    <a href="https://www.facebook.com/solfixafrica" className="facebook">
                      <AiFillFacebook />
                    </a>
                    <a href="https://www.instagram.com/solfixafrica/?hl=en" className="instagram">
                      <AiFillInstagram />
                    </a>
                    <a href="https://www.youtube.com/channel/UCZkl2avKyvO056qX3e7UVxA" className="you-tube">
                      <AiFillYoutube />
                    </a>
                  </div>
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
      {/* End Footer */}
    </>
  );
}

export default Footer;
