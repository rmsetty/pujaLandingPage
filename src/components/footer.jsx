import React from "react";
import footerFlower from "../assets/footerFlower.png";

function Footer() {
  return (
    <>
      {/* Subscription Section */}

      {/* Footer Section */}
      <footer
        className="pt-4 my-md-5 pt-md-5 border-top"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        <div className="container">
          <div className="row">
            {/* Image and Copyright Section */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
              <img
                className="mb-2"
                src={footerFlower}
                alt="Footer Flower"
                width="220"
                height="96"
                style={{ borderRadius: "5px" }}
              />
              <small className="d-block mb-3 text-body-secondary">
                © 2017–2024
              </small>
            </div>

            {/* Features, Resources, and Contact Sections */}
            <div className="col-12 col-md-8 d-flex flex-column align-items-center">
              <div className="row w-100">
                {/* Features Section */}
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <h5>Features</h5>
                  <ul className="list-unstyled text-small">
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        High-Quality Priest Services
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        Personalized Puja Planning
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        Secure Payment Processing
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        Verified Priest Profiles
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        24/7 Customer Support
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        Customizable Puja Packages
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources Section */}
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <h5>Resources</h5>
                  <ul className="list-unstyled text-small">
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        How to Book a Puja
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        Guide to Choosing a Priest
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        Puja Rituals Explained
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="#"
                      >
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <h5>Contact</h5>
                  <ul className="list-unstyled text-small">
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="https://www.instagram.com/yourmarketplace"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="https://wa.me/yourwhatsappnumber"
                      >
                        WhatsApp
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="https://www.youtube.com/yourmarketplace"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
