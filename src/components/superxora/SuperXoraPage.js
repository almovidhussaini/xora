import React from "react";
import "../style/SuperXora.css";
// import Star from "../star/Star";
import Star from '../../assets/icons/Star.png'


const SuperXoraPage = () => {
  const raised = 1562;
  const target = 1285800;

  const stages = [
    {
      name: "Private-Sale",
      progress: 20,
      color: "linear-gradient(90deg, #6F5CEA, #AE5BFF, #F2946D)",
    },
    {
      name: "Public-Sale",
      progress: 100,
      color: "linear-gradient(90deg, #6F5CEA, #AE5BFF, #F2946D)",
    },
  ];
  const activeStage = 0;

  return (
    <div id="home" className="container-fluid superxora position-relative">
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
      <div className="position-absolute" style={{top:'50%', left:'50%'}}>
      <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'10%', left:'45%'}}>
      <img src={Star}/>
      </div>
      
      <div className="row align-items-center ">
        {/* Left Section */}
        <div className="col-12 col-lg-6 text-center text-lg-center mt-5 mb-lg-0 ">
          <h1
            // style={{
            //   fontWeight: "bold",
            //   fontSize: "80px",
            // }}
            className="marketpace"
          >
            Super Xora Marketplace
          </h1>
          <div className="line-with-zigzag"></div>
          <p
            style={{
              color: "#CCCCCC",
              marginBottom: "2rem",
              fontSize: "20px",
            }}
          >
            The largest and unique Super rare Xora marketplace for
            crypto-collectibles
          </p>
        </div>

        

        {/* Right Section */}
        <div className="col-12 col-lg-6 d-flex  align-items-center justify-content-center position-relative mt-5">
          {/* Card 1 */}
          <div className="mycard card-1">
            <div>
              <h6 style={{ color: "#AE5BFF" }}>XRI Digital Artwork</h6>
              <p style={{ fontSize: "0.9rem", color: "white" }}>3.2 ETH</p>
            </div>

            <div>
              <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>
                Golden Hour
              </p>
              <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>John Doe</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mycard card-2">
            <div>
              <h6 style={{ color: "#AE5BFF" }}>XRI Digital Artwork</h6>
              <p style={{ fontSize: "0.9rem", color: "white" }}>3.2 ETH</p>
            </div>

            <div>
              <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>
                Golden Hour
              </p>
              <p style={{ fontSize: "0.8rem", color: "#CCCCCC" }}>John Doe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wholebar">
        <div
          className=" stagesbar"
          style={{
            padding: "2rem",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            // width:'100%'
          }}
        >
          <div
            className="d-flex justify-content-between mb-3"
            style={{ fontSize: "1rem" }}
          >
            <div>
              <span style={{ fontWeight: "bold" }}>Raised</span> -{" "}
              <span style={{ color: "#EA8D80" }}>{raised} Token</span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Target</span> -{" "}
              <span style={{ color: "#EA8D80" }}>{target} Token</span>
            </div>
          </div>
          {/* Progress Bar */}
          <div
            className="progress"
            style={{
              height: "30px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            {stages.map((stage, index) => (
              <div
                key={index}
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${stage.progress}%`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  background: index <= activeStage ? stage.color : "#B4C5CB",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Stage Indicators */}
          <div className="d-flex justify-content-between position-relative mt-3">
            {stages.map((stage, index) => (
              <div key={index} className="text-center">
                <span
                  style={{
                    color:
                      index === activeStage
                        ? "#EA8D80"
                        : "rgba(255, 255, 255, 0.5)",
                    fontSize: "1.5rem",
                  }}
                >
                  ▲
                </span>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color:
                      index === activeStage
                        ? stage.color
                        : "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {stage.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperXoraPage;
