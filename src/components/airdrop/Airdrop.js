import React from "react";
import airdrop from "../../assets/airdrop.svg";
import "./airdrop.css";
import blufcard from "../../assets/blufcard.svg";
import hexapuzzle from "../../assets/hexapuzzle.svg";
import marblemaster from "../../assets/marblemaster.svg";
import tictactoe from "../../assets/tictactoe.svg";

const Airdrop = () => {
  return (
    <div style={{ backgroundColor: "#080B2A" }}>
      <div style={{ padding: "7rem 0 0 0" }}>
        <h1 className="text-center text-white">Game Airdrops</h1>
        <p className="text-center text-white">
          Epic Game Airdrops-Play,Earn,Conquer
        </p>
      </div>
      <div className="position-relative">
        <img
          src={airdrop}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
        <img
          src={marblemaster}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            
            width: "200px",
            height: "auto",
          }}
        />
        <img
          src={hexapuzzle}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "55%",
            left: "23%",
          
            width: "200px",
            height: "auto",
          }}
        />
        <img
          src={tictactoe}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "15%",
            left: "69%",
            width: "200px",
            height: "auto",
          }}
        />
        <img
          src={blufcard}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "55%",
            left: "66%",
            width: "200px",
            height: "auto",
          }}
        />
      </div>

      <div className="d-flex justify-content-center">
        <div
          style={{
            width: "70%",
            padding: "2rem",
            backgroundColor: "rgba(255, 255, 255, 0.05)", // Adjust as needed
            borderRadius: "12px",
            border: "3px solid transparent", // Transparent border for gradient effect
            borderImage:
              "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D) 1",
          }}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <h1 className="text-white" style={{margin:'1rem 0 2rem 0'}}>
            Unlock the Power of Game Airdrops -- Play, Earn & Win!{" "}
          </h1>
          <p className="text-white" style={{ fontSize: "1rem" }}>
            Dive into the world of game airdrop, where playing unlocks free
            rewards! Complete misssions, join events, and collect exclusive
            in-game tokens, skinsm and perks, Don't miss out--play more, earn
            more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
