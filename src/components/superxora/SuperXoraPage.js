import React from "react";
import '../style/SuperXora.css'

const SuperXoraPage = () => {
  return (
    <div id="home"
      className="container-fluid superxora"
    >
      <div className="row align-items-center mt-5">
        {/* Left Section */}
        <div className="col-12 col-lg-6 text-center text-lg-center mt-5 mb-lg-0 " > 
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            Super Xora  Marketplace
          </h1>
          <div class="line-with-zigzag"></div>
          <p
            style={{
              color: "#CCCCCC",
              marginBottom: "2rem",
            }}
          >
            The largest and unique Super rare Xora marketplace for
            crypto-collectibles
          </p>
          
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 d-flex  align-items-center justify-content-center position-relative mt-5">
  {/* Card 1 */}
  <div className="mycard card-1"
  >
    <h6 style={{ color: "#AE5BFF" }}>XRI Digital Artwork</h6>
    <p style={{ fontSize: "0.9rem", color: "white" }}>3.2 ETH</p>
    <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>Golden Hour</p>
    <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>John Doe</p>
  </div>

  {/* Card 2 */}
  <div className="mycard card-2"
  >
    <h6 style={{ color: "#AE5BFF" }}>XRI Digital Artwork</h6>
    <p style={{ fontSize: "0.9rem", color: "white" }}>3.2 ETH</p>
    <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>Golden Hour</p>
    <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>John Doe</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default SuperXoraPage;
