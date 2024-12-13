import React, { useState } from "react";
import "../style/ico.css";

const Ico = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [icoInput, setIcoInput] = useState(0);

  const handleIcoChange = (e) => setIcoInput(e.target.value);
  const buyIco = () => {
    console.log("handle ico");
  };
  const withdraIco = () => {
    console.log("handle withdraw ico");
  };

  const icoStages = [
    {
      name: "PrivateSale",
      stage: 1,
    },
    {
      name: "PreSale",
      stage: 2,
    },
    {
      name: "PublicSale",
      stage: 3,
    },
  ];
  return (
    <div
      className=" text-center text-white"
      style={{ backgroundColor: "#080B2A" }}
    >
      <h2>ICO</h2>
      <div
        className="row justify-content-center mt-4 "
        style={{ width: "100%" }}
      >
        {/* Buy Token Card */}
        <div
          className="col-md-5 m-2 p-4 card-custom"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
          }}
        >
          <h5 className="mb-5">Buy Token</h5>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="number"
                className="form-control input-custom "
                placeholder="0"
                min="0"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                }}
              />
              <span className="ms-2">AMOUNT</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <select
                className="form-select select-custom"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                }}
              >
                <option value="1">USDC</option>
                <option value="2">USDT</option>
              </select>
              <span className="ms-2">Coin</span>
            </div>
          </div>
          <button
            className="btn mt-5"
            style={{
              width: "10rem",
              backgroundImage:
                "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
              border: "none",
              color: "white",
            }}
          >
            Buy
          </button>
        </div>

        {/* Withdraw Card */}
        <div
          className="col-md-5 m-2 p-4 card-custom"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
          }}
        >
          <h5 className="mb-5">Withdraw</h5>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="number"
                className="form-control input-custom "
                placeholder="0"
                min="0"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                }}
              />
              <span className="ms-2">AMOUNT</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <select
                className="form-select select-custom"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                }}
              >
                <option value="1">PrivateSale</option>
                <option value="2">PreSale</option>
                <option value="2">PublicSale</option>
              </select>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <select
                className="form-select select-custom"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                }}
              >
                <option value="1">USDC</option>
                <option value="2">USDT</option>
              </select>
            </div>
          </div>
          <button
            className="btn mt-5"
            style={{
              width: "10rem",
              backgroundImage:
                "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
              border: "none",
              color: "white",
            }}
          >
            Withdraw
          </button>
        </div>
        
      </div>
      <div className="row m-2 p-4  d-flex justify-content-center align-items-center"
>
    <h3>Claim Xora Token</h3>
        <div className=" d-flex justify-content-center align-items-center mt-3 gap-3">
        
        <select
                className="form-select select-custom"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                  width:'10rem'
                }}
              >
                <option value="1">PrivateSale</option>
                <option value="2">PreSale</option>
                <option value="2">PublicSale</option>
              </select>

              <button
            className="btn"
            style={{
              width: "10rem",
              backgroundImage:
                "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
              border: "none",
              color: "white",
              
            }}
          >
            Claim
          </button>
              </div>
      </div>
    </div>
  );
};

export default Ico;
