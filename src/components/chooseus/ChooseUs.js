import React from "react";
// import { Container, Row, Col, Button } from "bootstrap";
import chooseus from '../../assets/chooseus.png'
import '../style/chooseus.css'
import Star from '../../assets/icons/Star.png'


const ChooseUs = () => {
  return (
    <div id="about"
      style={{
        backgroundColor: "#080B2A",
        color: "white",
        padding: "2rem 0",
        textAlign: "left",
        position: "relative",
      }}
    >
      <div className="container position-relative">

      <div className="position-absolute" style={{top:'80%', left:'10%'}}>
        <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'10%', left:'90%'}}>
      <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'60%', left:'90%'}}>
      <img src={Star}/>
      </div>
      <div className="position-absolute">
      <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'70%', left:'50%'}}>
      <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'10%', left:'45%'}}>
      <img src={Star}/>
      </div>

        <div className="row align-items-center">
          {/* Left Section: Circles */}
          <div className="col-md-6 d-flex justify-content-center">
       <img src={chooseus} className="chooseusimg" />
          </div>

          {/* Right Section: Text and Button */}
          <div className="col md-6">
            <h2 style={{ fontWeight: "bold", fontSize:'45px',  }} className="chooseusText">Why choose us?</h2>
            <p style={{ lineHeight: "1.6", marginBottom: "1rem", marginTop:'2rem' }}>
              Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque ut
              semper. Eros suspendisse varius enim ultrices.Congue eu arcu neque ut
              semper. Eros suspendisse varius enim ultrices.
            </p>
            <p style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Eu feugiat adipiscing viverra turpis. Mattis tellus malesuada
              massa amet facilisi.Congue eu arcu neque ut
              semper. Eros suspendisse varius enim ultrices.
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
