import React, { useState } from "react";
import airdrop from "../../assets/airdrop.svg";
import "./airdrop.css";
import blufcard from "../../assets/blufcard.svg";
import hexapuzzle from "../../assets/hexapuzzle.svg";
import tictactoe from "../../assets/tictactoe.svg";
import flappybird from "../../assets/flappybird.svg";

// const GameModal = ({ game, onClose }) => {
//   return (
//     <div
//       className="modal-overlay"
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0,0,0,0.7)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 1000
//       }}
//       onClick={onClose}
//     >
//       <div
//         className="modal-content"
//         style={{
//           backgroundColor: '#fff',
//           borderRadius: '15px',
//           width: '90%',
//           padding: '20px',
//           position: 'relative'
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           style={{
//             position: 'absolute',
//             top: '10px',
//             right: '10px',
//             background: 'none',
//             border: 'none',
//             fontSize: '24px',
//             cursor: 'pointer'
//           }}
//         >
//           ×
//         </button>

//         <div className="game-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
//           <img
//             src={game.image}
//             alt={game.name}
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '15px'
//             }}
//           />
//           <h2>{game.name}</h2>
//         </div>

//         <p>{game.description}</p>

//         <div className="game-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
//           <button
//             style={{
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               border: 'none',
//               padding: '10px 20px',
//               borderRadius: '10px',
//               cursor: 'pointer'
//             }}
//           >
//             Play Game on iOS
//           </button>
//           <button
//             style={{
//               backgroundColor: '#2196F3',
//               color: 'white',
//               border: 'none',
//               padding: '10px 20px',
//               borderRadius: '10px',
//               cursor: 'pointer'
//             }}
//           >
//             Play Game on Android
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
const GameModal = ({ game, onClose }) => {
  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.64)", // 64% black background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          width: "90%",
          maxWidth: "1200px",
          height: "80%",
          // backgroundColor: "rgba(255, 255, 255, 0.1)",
          // backdropFilter: "blur(10px)",
          // borderRadius: "15px",
          // border: "1px solid rgba(255, 255, 255, 0.2)",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          marginTop: "4%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "24px",
            color: "white",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ×
        </button>

        {/* Left side - Game Image */}
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <img
            src={game.image}
            alt={game.name}
            style={{
              width: "20rem",
              height: "20rem",
              borderRadius: "15px",
              marginBottom: "20px",
              transform:
                game.name.toLowerCase() === "bluff cards"
                  ? "rotate(-25deg)"
                  : game.name.toLowerCase() === "tic tac toe"
                  ? "rotate(17deg)"
                  : game.name.toLowerCase() === "hexa puzzle"
                  ? "rotate(22deg)"
                  : "none",
            }}
            className="modal-image"
          />
        </div>

        {/* Right side - Description and Buttons */}
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "spaceBetween",
            padding: "0px 20px",
          }}
        >
          <h2 style={{ color: "white", margin: 0 }}>{game.name}</h2>
          <p
            style={{
              textAlign: "left",
              color: "white",
              // marginBottom: '20px'
              margin: "50px 0",
            }}
          >
            {game.description}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
              gap: "1rem",
            }}
          >
            <button
              style={{
                background:
                  "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                width: "fit-content",
              }}
            >
              Play Game on iOS
            </button>
            <button
              style={{
                background:
                  "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                width: "fit-content",
              }}
            >
              Play Game on Android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Airdrop = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const gameDetails = [
    {
      name: "Bluff Cards",
      image: blufcard,
      description:
        "Bluff Cards is a strategic multiplayer card game where players test their bluffing and poker skills. Navigate through complex rounds, read your opponents, and outsmart them to win.",
    },
    {
      name: "Hexa Puzzle",
      image: hexapuzzle,
      description:
        "Hexa Puzzle is an intricate puzzle game that challenges your spatial reasoning and problem-solving skills. Arrange hexagonal pieces to complete complex patterns and advance through increasingly difficult levels.",
    },
    {
      name: "Tic Tac Toe",
      image: tictactoe,
      description:
        "A classic game of strategy where two players compete to get three of their marks in a row. Simple to learn, yet requires tactical thinking to outmaneuver your opponent.",
    },
    {
      name: "Flappy Bird",
      image: flappybird,
      description:
        "Navigate a small bird through a series of challenging obstacles. Test your reflexes and timing as you try to achieve the highest score possible in this addictive arcade-style game.",
    },
  ];

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  return (
    <div style={{ backgroundColor: "#080B2A" }} id="game">
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
          src={flappybird}
          onClick={() => handleGameClick(gameDetails[3])}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            transform: "rotate(-15deg)",
            width: "150px",
            height: "auto",
            cursor: "pointer",
          }}
        />
        <img
          src={hexapuzzle}
          onClick={() => handleGameClick(gameDetails[1])}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "55%",
            left: "23%",
            width: "200px",
            height: "auto",
            cursor: "pointer",
          }}
        />
        <img
          src={tictactoe}
          onClick={() => handleGameClick(gameDetails[2])}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "15%",
            left: "69%",
            width: "200px",
            height: "auto",
            cursor: "pointer",
          }}
        />
        <img
          src={blufcard}
          onClick={() => handleGameClick(gameDetails[0])}
          className="marblemaster-img"
          style={{
            position: "absolute",
            top: "55%",
            left: "66%",
            width: "200px",
            height: "auto",
            cursor: "pointer",
          }}
        />
      </div>

      <div className="d-flex justify-content-center">
        <div
          style={{
            width: "70%",
            padding: "2rem",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "12px",
            border: "3px solid transparent",
            borderImage:
              "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D) 1",
          }}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <h1 className="text-white" style={{ margin: "1rem 0 2rem 0" }}>
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

      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  );
};

export default Airdrop;
