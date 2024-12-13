import React from "react";
// import { Container, Row, Col, Button } from "bootstrap";


const ChooseUs = () => {
  return (
    <div id="about"
      style={{
        backgroundColor: "#080B2A",
        color: "white",
        padding: "4rem 0",
        textAlign: "left",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Circles */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              style={{
                position: "relative",
                width: "250px",
                height: "250px"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  animation: "spin 8s linear infinite",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "25px",
                  width: "80%",
                  height: "80%",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "50%",
                  animation: "spin-reverse 10s linear infinite",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "50px",
                  width: "60%",
                  height: "60%",
                  border: "2px solid rgba(255, 255, 255, 0.7)",
                  borderRadius: "50%",
                  animation: "spin 6s linear infinite",
                }}
              ></div>
            </div>
          </div>

          {/* Right Section: Text and Button */}
          <div className="col md-6">
            <h2 style={{ fontWeight: "bold" }}>Why choose us?</h2>
            <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque ut
              semper. Eros suspendisse varius enim ultrices.
            </p>
            <p style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Eu feugiat adipiscing viverra turpis. Mattis tellus malesuada
              massa amet facilisi.
            </p>
            {/* <button
              style={{
                backgroundColor: "#ae5bff",
                border: "none",
                padding: "0.5rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "30px",
              }}
            >
              Connect Wallet
            </button> */}
          
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style type="text/css">
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ChooseUs;
