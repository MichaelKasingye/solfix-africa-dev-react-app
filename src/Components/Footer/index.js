import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Solfix Africa</h3>
                  <p>
                    Charm Towers Level 2 <br />
                    Plot 12, Kampala Road
                    <br />
                    <br />
                    <strong>Phone:</strong> +256 414 699 575
                    <br />
                    <strong>WhatsApp:</strong> +256 706 045 950
                    <br />
                    <strong>Email:</strong> info@solfixafrica.com
                  </p>
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
              {/* <div className="col-lg-2 col-md-6 footer-links">
                <h4>Popular Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Services</a>
                  </li>
                </ul>
              </div> */}
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Popular Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Register a Company</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Legal Documents</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Get a client</a>
                  </li>
                  {/* <li>
                    <i className="bx bx-chevron-right" /> <a href="/">Tax</a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Company</h4>
                <p>
                  All professional services for your business in Uganda right
                  here!. On-demand services. Less stress, more time and better
                  business.
                </p>
                {/* <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form> */}
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
