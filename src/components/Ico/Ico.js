// import React, { useState } from "react";
// import "../style/ico.css";

// const Ico = () => {
//   const [currentStage, setCurrentStage] = useState(0);
//   const [icoInput, setIcoInput] = useState(0);

//   const handleIcoChange = (e) => setIcoInput(e.target.value);
//   const buyIco = () => {
//     console.log("handle ico");
//   };
//   const withdraIco = () => {
//     console.log("handle withdraw ico");
//   };

//   const icoStages = [
//     {
//       name: "PrivateSale",
//       stage: 1,
//     },
//     {
//       name: "PreSale",
//       stage: 2,
//     },
//     {
//       name: "PublicSale",
//       stage: 3,
//     },
//   ];
//   return (
//     <div
//       className=" text-center text-white"
//       style={{ backgroundColor: "#080B2A" }}
//     >
//       <h2>ICO</h2>
//       <div
//         className="row justify-content-center  mt-4 "
//         style={{ width: "100%" }}
//       >
//         {/* Buy Token Card */}

//         <div
//           className="col-7 col-md-4 m-3  d-flex flex-column justify-content-center align-items-center mycard"
//           style={{ minHeight: "fit-content" }}
//         >
//           <h5 className="mb-5">Buy Token</h5>

//           <div className="d-flex  flex-column flex-lg-row justify-content-center align-items-center mt-1 gap-5">
//             {/* Amount Input */}
//             <div className="d-flex justify-content-between align-items-center w-100 justify-content-start ">
//               <div className="gradient-border-input flex-grow-1 ">
//                 <input
//                   type="number"
//                   className="form-control  input-custom"
//                   placeholder="0"
//                   min="0"
//                   style={{ height: "30px", width:'120px' }}
//                 />
//               </div>
//               <span className="ms-2">Amount</span>
//             </div>

//             {/* Rate Input (Moves Below on Mobile) */}
//             <div className="d-flex justify-content-start justify-content-lg-end align-items-center w-100 mt-md-0">
//               <div
//                 className="gradient-border-input rate"
//                 style={{ maxWidth: "6rem" }}
//               >
//                 <input
//                   type="number"
//                   className="form-control input-custom"
//                   placeholder="0"
//                   min="0"
//                   readOnly
//                   value={123}
//                   style={{ height: "30px"}}
//                 />
//               </div>
//               <span className="ms-2">Rate</span>
//             </div>

//           </div>

//           <button
//             className="btn mt-5"
//             style={{
//               width: "220px",
//               backgroundImage:
//                 "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
//               border: "none",
//               color: "white",
//               borderRadius: "42px",
//             }}
//           >
//             Buy
//           </button>
//         </div>

// <div
//   className="col-md-4 m-3 col-7 mycard d-flex flex-column justify-content-center align-items-center"
//   style={{ minHeight: "fit-content" }}
// >
//   <h5 >Withdraw</h5>

//   {/* Amount Input & Dropdown - Responsive Layout */}
//   <div className="d-flex flex-column flex-lg-row flex-md-column flex-sm-row align-items-center  w-100 " style={{margin:'1.4rem 0'}}>

//     {/* Xora Amount Input */}
//     <div className="d-flex  align-items-end w-100" style={{marginBottom:'2rem'}}>
//       <div className="gradient-border-input-xora ">
//         <input
//           type="number"
//           className="form-control input-custom"
//           placeholder="0"
//           min="0"
//           readOnly
//           value={123}
//           style={{width:'190px'}}
//         />
//       </div>
//       <span className=" xoraspan">Amount</span>
//     </div>

//     {/* Stages Dropdown - Moves Below on Mobile */}
//     <div className="d-flex justify-content-start justify-content-md-center  w-100 mt-lg-4" style={{marginBottom:'1rem'}} >
//       <select
//         className="form-select select-custom text-center"
//         style={{
//           backgroundColor: "#080B2A",
//           color: "#B7D869",
//           borderColor: "#F2946D",
//           width: "100px",
//           marginTop:'-1.4rem'
//         }}
//       >
//         {[...Array(20)].map((_, i) => (
//           <option key={i} value={i}>Stage {i + 1}</option>
//         ))}
//       </select>
//     </div>

//   </div>

//   {/* Withdraw Button */}
//   <button
//     className="btn"
//     style={{
//       width: "220px",
//       backgroundImage:
//         "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
//       border: "none",
//       color: "white",
//       borderRadius: "42px",
//     }}
//   >
//     Withdraw
//   </button>

// </div>

//       </div>

//       <div className="row m-2 p-4  d-flex justify-content-center align-items-center">
//         <h3>Claim Xora Token</h3>
//         <div className=" d-flex justify-content-center align-items-center mt-3 gap-3">
//           <select
//             className="form-select select-custom"
//             style={{
//               backgroundColor: "#080B2A",
//               color: "#B7D869",
//               borderColor: "#F2946D",
//               width: "10rem",
//             }}
//           >
//             <option value="0">Stage 1</option>
//             <option value="1">Stage 2</option>
//             <option value="2">Stage 3</option>
//             <option value="3">Stage 4</option>
//             <option value="4">Stage 5</option>
//             <option value="5">Stage 6</option>
//             <option value="6">Stage 7</option>
//             <option value="7">Stage 8</option>
//             <option value="8">Stage 9</option>
//             <option value="9">Stage 10</option>
//             <option value="10">Stage 11</option>
//             <option value="11">Stage 12</option>
//             <option value="12">Stage 13</option>
//             <option value="13">Stage 14</option>
//             <option value="14">Stage 15</option>
//             <option value="15">Stage 16</option>
//             <option value="16">Stage 17</option>
//             <option value="17">Stage 18</option>
//             <option value="18">Stage 19</option>
//             <option value="19">Stage 20</option>
//           </select>

//           <button
//             className="btn"
//             style={{
//               width: "10rem",
//               backgroundImage:
//                 "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
//               border: "none",
//               color: "white",
//             }}
//           >
//             Claim
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ico;

import React, { useState } from "react";
import "../style/ico.css";

const Ico = () => {
  const [buyAmount, setBuyAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedStage, setSelectedStage] = useState("");

  const handleBuy = () => {
    console.log("Buy Amount:", buyAmount);
  };

  const handleWithdraw = () => {
    console.log("Withdraw Amount:", withdrawAmount);
    console.log("Selected Stage:", selectedStage);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "#080B2A",
      }}
    >
      <div className="container">
        <h2 className="text-white text-center mb-4">ICO</h2>

        <div className="row justify-content-center">
          {/* Buy Token Card */}
          <div className="col-12 col-md-5 mb-4 mb-md-0 me-md-3">
            <div
              className="card h-100 gradient-border-input"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius:'42px'
                
              }}
            >
           
              <div className=" p-4">
                <h5 className="text-white mb-4 text-center">Buy token</h5>

                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <div className="gradient-border-input">
                      <input
                        type="text"
                        className=""
                        placeholder="0.0000"
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                      />
                    </div>
                    <span className="text-white">Xora</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center ">
                    <div className="gradient-border-input">

                   
                    <input
                      type="text"
                      className=""
                      placeholder="0.0000"
                      readOnly
                      style={{
                        backgroundColor: "#0E1138",
                        color: "white",
                        border: "none",
                        height: "40px",
                      }}
                    />
                     </div>
                    <span className="text-white">Rate</span>
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="btn  text-white"
                    onClick={handleBuy}
                    style={{
                      background:
                        "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                      border: "none",
                      height: "40px",
                      borderRadius: "10px",
                      width: "10rem",
                    }}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Withdraw Token Card */}
          <div className="col-12 col-md-5 ">
          <div
              className="card h-100 gradient-border-input"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
               borderRadius:'42px'
              }}
            >
              <div className="card-body p-4">
                <h5 className="text-white mb-4 text-center">Withdraw</h5>

                <div className="mb-3">
                  <div className="d-flex align-items-center">
                  <div className="gradient-border-input">

                   
                    <input
                      type="text"
                      className=""
                      placeholder="0.0000"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      style={{
                        backgroundColor: "#0E1138",
                        color: "white",
                        border: "none",
                        height: "40px",
                      }}
                    />
                     </div>
                    <span className="text-white">Amount</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center">
                  <div className="gradient-border-input">
                    <select
                      className="form-control flex-grow-1 me-2"
                      value={selectedStage}
                      onChange={(e) => setSelectedStage(e.target.value)}
                      style={{
                        backgroundColor: "#0E1138",
                        color: "white",
                        border: "none",
                        height: "40px",
                      }}
                    >
                      <option value="0">Stage1</option>
                      {[...Array(20)].map((_, i) => (
                        <option key={i} value={`stage${i + 1}`}>
                          Stage {i + 2}
                        </option>
                      ))}
                    </select>
                    </div>
                    <span className="text-white">Stage</span>
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="btn  text-white"
                    onClick={handleWithdraw}
                    style={{
                      background:
                        "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                      border: "none",
                      height: "40px",
                      borderRadius: "10px",
                      width: "10rem",
                    }}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 justify-content-center">
          <div className="col-12 text-center">
            <h3 className="text-white mb-3">Claim Xora Token</h3>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <select
                className="form-select select-custom"
                style={{
                  backgroundColor: "#080B2A",
                  color: "#B7D869",
                  borderColor: "#F2946D",
                  width: "10rem",
                }}
              >
                {[...Array(20)].map((_, i) => (
                  <option key={i} value={i}>
                    Stage {i + 1}
                  </option>
                ))}
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
      </div>
    </div>
  );
};

export default Ico;
