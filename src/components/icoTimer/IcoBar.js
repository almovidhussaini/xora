import React from "react";

const IcoBar = () => {
  const raised = 1562;
  const target = 1285800;


  const stages = [
    { name: "Private-Sale", progress: 10, color: "rgb(183, 216, 105)" },
    { name: "Pre-Sale", progress: 40, color: "rgb(183, 216, 105)" },
    { name: "Public-Sale", progress: 45, color: "rgb(183, 216, 105)" },
  ];
  const activeStage = 0;

  return (
    <div
      className="mt-3"
      style={{
        padding: "2rem",
        borderRadius: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
          <div
        className="d-flex justify-content-between mb-3"
        style={{ fontSize: "1rem" }}
      >
        <div>
          <span style={{ fontWeight: "bold" }}>Raised</span> -{" "}
          <span style={{ color: "rgb(183, 216, 105)" }}>{raised} Token</span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Target</span> -{" "}
          <span style={{ color: "rgb(183, 216, 105)" }}>{target} Token</span>
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
              backgroundColor:
                index <= activeStage
                  ? stage.color
                  : "rgba(255, 255, 255, 0)",
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
                    ? stage.color
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
  );
};

export default IcoBar;
