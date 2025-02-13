import React from "react";
import "../style/SuperXora.css";

const IcoBar = () => {
  const raised = 1562;
  const target = 1285800;


  const stages = [
    { name: "Private-Sale", progress: 20, color: "linear-gradient(90deg, #6F5CEA, #AE5BFF, #F2946D)" },
    { name: "Public-Sale", progress: 100, color: "linear-gradient(90deg, #6F5CEA, #AE5BFF, #F2946D)" },
  ];
  const activeStage = 0;

  return (
    // <div
    //   className="mt-3"
    //   style={{
    //     padding: "2rem",
    //     borderRadius: "10px",
    //     color: "white",
    //     textAlign: "center",
    //   }}
    // >
    //       <div
    //     className="d-flex justify-content-between mb-3"
    //     style={{ fontSize: "1rem" }}
    //   >
    //     <div>
    //       <span style={{ fontWeight: "bold" }}>Raised</span> -{" "}
    //       <span style={{ color: "blue" }}>{raised} Token</span>
    //     </div>
    //     <div>
    //       <span style={{ fontWeight: "bold" }}>Target</span> -{" "}
    //       <span style={{ color: "blue" }}>{target} Token</span>
    //     </div>
    //   </div>
    //   {/* Progress Bar */}
    //   <div
    //     className="progress"
    //     style={{
    //       height: "30px",
    //       backgroundColor: "rgba(255, 255, 255, 0.1)",
    //       borderRadius: "30px",
    //       overflow: "hidden",
    //     }}
    //   >
    //     {stages.map((stage, index) => (
    //       <div
    //         key={index}
    //         className="progress-bar"
    //         role="progressbar"
    //         style={{
    //           width: `${stage.progress}%`,
    //           backgroundColor:
    //             index <= activeStage
    //               ? stage.color
    //               : "rgba(255, 255, 255, 0)",
    //           transition: "background-color 0.3s ease",
    //         }}
    //       />
    //     ))}
    //   </div>

    //   {/* Stage Indicators */}
    //   <div className="d-flex justify-content-between position-relative mt-3">
    //     {stages.map((stage, index) => (
    //       <div key={index} className="text-center">
    //         <span
    //           style={{
    //             color:
    //               index === activeStage
    //                 ? stage.color
    //                 : "rgba(255, 255, 255, 0.5)",
    //             fontSize: "1.5rem",
    //           }}
    //         >
    //           ▲
    //         </span>
    //         <p
    //           style={{
    //             marginTop: "0.5rem",
    //             color:
    //               index === activeStage
    //                 ? stage.color
    //                 : "rgba(255, 255, 255, 0.5)",
    //           }}
    //         >
    //           {stage.name}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
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
          <span style={{ color: "blue" }}>{raised} Token</span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Target</span> -{" "}
          <span style={{ color: "blue" }}>{target} Token</span>
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
                    ? "blue"
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
  );
};

export default IcoBar;
