import React from "react";
import Card from "../card/Card";
import "../style/stake.css";

const Stake = () => {
  return (
    <div
      className="text-center text-white py-5"
      style={{ backgroundColor: "#080B2A", marginTop: "-1rem" }}
    >
      <h2>Staking</h2>
      <div
        className="row justify-content-center mt-4"
        style={{ width: "100%" }}
      >
        {/* Staking Card */}
        {/* <div
          className="col-md-8 p-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
            border: "1px solid #F2946D"
          }}
        > */}

        <Card className="col-md-8 col-10">
          <div className="row" style={{ margin: "3rem 0" }}>
            {/* Left Section */}
            <div className="col-md-6">
              <p
                className=""
                style={{
                  position: "relative",
                  paddingBottom: "8px",
                  borderBottom: "2px solid white",
                  display: "inline-block",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                100.0 Xora Stake
              </p>
              <input
                type="number"
                className="form-control input-custom"
                placeholder="0"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.0)",
                  color: "white",
                  outline: "none",
                  fontSize: "2rem",
                  border: "none",
                }}
              />

              <div className="d-flex justify-content-center gap-3 mt-3">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #6F5CEA",
                    color: "#15BFFD",
                    borderRadius: "42px",
                    width: "100px",
                  }}
                >
                  Stake
                </button>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "transparent",
                    // border: "1px solid #F2946D",
                    color: "#15BFFD",
                    borderRadius: "42px",
                    width: "100px",
                    border: "1px solid #6F5CEA",
                  }}
                >
                  Unstake
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6">
              <p
                className=""
                style={{
                  position: "relative",
                  paddingBottom: "8px",
                  borderBottom: "2px solid white",
                  display: "inline-block",
                  width: "100%",
                  textAlign: "left",
                  
                }}
              >
                Reward Token:
              </p>
              <input
                type="text"
                className="form-control"
                value="0.3 XORA"
                readOnly
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.0)",
                  color: "#B7D869",
                  fontSize: "2rem",

                  outline: "none",
                  border: "none",
                }}
              />
              <div className="d-flex justify-content-center mt-3">
                <button
                  className="btn"
                  style={{
                    width: "10rem",
                    backgroundImage:
                      "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                    border: "none",
                    color: "white",
                    borderRadius: "42px",
                  }}
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Stake;
