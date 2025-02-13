import React, { useState } from "react";
import "../style/ico.css";
// import Card from "../card/Card";

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
        className="row justify-content-center  mt-4 "
        style={{ width: "100%" }}
      >
        {/* Buy Token Card */}
        <div className="col-9 col-md-5 m-3 d-flex flex-column justify-content-center align-items-center mycard" style={{ minHeight: "fit-content" }} >
          <h5 className="mb-5">Buy Token</h5>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="gradient-border-input ">
                <input
                  type="number"
                  className="form-control input-custom"
                  placeholder="0"
                  min="0"
                />
              </div>
              <span className="ms-2">AMOUNT</span>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{marginLeft:'2rem'}}>
              <div className="gradient-border-input rate" style={{maxWidth:'6rem'}}>
                <input
                  type="number"
                  className="form-control input-custom"
                  placeholder="0"
                  min="0"
                  readOnly
                  value={123}
                />
              </div>
              <span className="ms-2">Rate</span>
            </div>
          </div>
          <button
            className="btn mt-5"
            style={{
              width: "220px",
              backgroundImage:
                "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
              border: "none",
              color: "white",
              borderRadius: "42px",
            }}
          >
            Buy
          </button>
        </div>

        {/* Withdraw Card */}
        <div className="col-md-5 m-3 col-9 mycard d-flex flex-column justify-content-center align-items-center mycard" style={{ minHeight: "fit-content" }}>
          <h5 className="mb-5">Withdraw</h5>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="gradient-border-input-xora ">
                <input
                  type="number"
                  className="form-control input-custom"
                  placeholder="0"
                  min="0"
                  readOnly
                  value={123}
                />
              </div>
              <span className="ms-2 xoraspan">Xora</span>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{marginLeft:'2rem'}}>
              <select
                className="form-select select-custom"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                  width:'100px'
                }}
              >
                <option value="0">Stage1</option>
                <option value="1">Stage2</option>
                <option value="2">Stage3</option>
                <option value="3">Stage4</option>
                <option value="4">Stage5</option>
                <option value="5">Stage6</option>
                <option value="6">Stage7</option>
                <option value="7">Stage8</option>
                <option value="8">Stage9</option>
                <option value="9">Stage10</option>
                <option value="10">Stage11</option>
                <option value="11">Stage12</option>
                <option value="12">Stage13</option>
                <option value="13">Stage14</option>
                <option value="14">Stage15</option>
                <option value="15">Stage16</option>
                <option value="16">Stage17</option>
                <option value="17">Stage18</option>
                <option value="18">Stage19</option>
                <option value="19">Stage20</option>
                
              </select>
            </div>
            {/* <div className="d-flex justify-content-center align-items-center">
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
            </div> */}
          </div>
          <button
            className="btn mt-5"
            style={{
              width: "220px",
              backgroundImage:
                "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
              border: "none",
              color: "white",
              borderRadius: "42px",
            }}
          >
            Withdraw
          </button>
        </div>
      </div>
      <div className="row m-2 p-4  d-flex justify-content-center align-items-center">
        <h3>Claim Xora Token</h3>
        <div className=" d-flex justify-content-center align-items-center mt-3 gap-3">
          <select
            className="form-select select-custom"
            style={{
              backgroundColor: "#080B2A",
              color: "#B7D869",
              borderColor: "#F2946D",
              width: "10rem",
            }}
          >
            <option value="0">Stage 1</option>
            <option value="1">Stage 2</option>
            <option value="2">Stage 3</option>
            <option value="3">Stage 4</option>
            <option value="4">Stage 5</option>
            <option value="5">Stage 6</option>
            <option value="6">Stage 7</option>
            <option value="7">Stage 8</option>
            <option value="8">Stage 9</option>
            <option value="9">Stage 10</option>
            <option value="10">Stage 11</option>
            <option value="11">Stage 12</option>
            <option value="12">Stage 13</option>
            <option value="13">Stage 14</option>
            <option value="14">Stage 15</option>
            <option value="15">Stage 16</option>
            <option value="16">Stage 17</option>
            <option value="17">Stage 18</option>
            <option value="18">Stage 19</option>
            <option value="19">Stage 20</option>
            
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
