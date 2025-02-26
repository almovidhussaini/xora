

import React from "react";
import chooseus from '../../assets/chooseus.png';
import '../style/chooseus.css';
import Star from '../../assets/icons/Star.png';

const ChooseUs = () => {
  return (
    <div id="about" className="py-5 text-white" style={{ backgroundColor: "#080B2A", position: "relative" }}>
      <div className="container position-relative">

        {/* Floating Stars for Decoration */}
        <img src={Star} className="position-absolute d-none d-md-block" style={{ top: "80%", left: "10%" }} alt="Star" />
        <img src={Star} className="position-absolute d-none d-md-block" style={{ top: "7%", left: "90%" }} alt="Star" />
        <img src={Star} className="position-absolute d-none d-md-block" style={{ top: "70%", left: "90%" }} alt="Star" />
        <img src={Star} className="position-absolute d-none d-md-block" style={{ top: "80%", left: "50%" }} alt="Star" />
        <img src={Star} className="position-absolute d-none d-md-block" style={{ top: "10%", left: "45%" }} alt="Star" />

        <div className="row align-items-center">
          {/* Left Section: Image */}
          <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <img src={chooseus} className="img-fluid chooseusimg" alt="Why Choose Us" />
          </div>

          {/* Right Section: Text Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="fw-bold display-5">Why choose us?</h2>
            <p className="lead mt-3">
              At Xoraland, we are reshaping gaming by blending fun, quality gameplay, and the transformative power of blockchain. With our play-to-earn model, you earn our native token **Xora** as you explore a wide range of engaging games.
            </p>
            <p className="lead">
              Our mission is to empower gamers worldwide by providing a community-driven, fair, and secure environment. Transparency and innovation are at the heart of everything we do, ensuring that every reward and game feature is crafted with your best interests at heart.
            </p>
            <p className="lead">
              Come join us in reinventing the gaming experience, where passion, skill, and technology come together to create a vibrant community that redefines the way we play and earn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

