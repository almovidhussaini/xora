import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0b0f2e",
        color: "white",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start justify-content-center">
          {/* Left Section */}
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-center" >
            <div >
              <h5 style={{ fontSize: "1.5rem", color: "#AE5BFF" }}>Xora</h5>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
                ultrices amet tellus ornare. Faucibus id posuere massa.
              </p>
              <div>
                {/* Social Links */}
                <a
                  href="#"
                  style={{
                    marginRight: "10px",

                    fontSize: "1.9rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
                <a
                  href="#"
                  style={{
                    marginRight: "10px",

                    fontSize: "1.2rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a
                  href="#"
                  style={{
                    
                    fontSize: "1.2rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 25 25"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div
            className="col-3 col-md-2 mb-3 text-center"
          
          >
            <h6 style={{ color: "#AE5BFF" }}>Site Map</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>NFT</li>
              <li>Roadmap</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-3 col-md-2 mb-3 text-center">
            <h6 style={{ color: "#AE5BFF" }}>Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/terms" style={{ textDecoration: 'none' }}>Terms & Conditions</Link></li>
              <li><Link to ="/policy" style={{ textDecoration: 'none' }}>Privacy Policy </Link> </li>
              <li><Link to="/Disclamer" style={{ textDecoration: 'none' }}>Disclamer</Link></li>
              <li><Link to="/Regulatory" style={{ textDecoration: 'none' }}>Regulatory Statements</Link></li>
            </ul>
          </div>

          {/* Resource */}
          <div className="col-3 col-md-2 mb-3 text-center">
            <h6 style={{ color: "#AE5BFF" }}>Resource</h6>
            <ul className="list-unstyled">
              <li>Partner</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center">
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255, 255, 255, 0.6)",
                margin: 0,
              }}
            >
              Copyright © NFT Core 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
