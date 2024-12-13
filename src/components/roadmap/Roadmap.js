import React from "react";

const Roadmap = () => {
  const roadmapData = [
    { month: "January", title: "Brief", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "February", title: "Research", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "March", title: "Discover", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "April", title: "Design", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "May", title: "Testing", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
  ];

  return (
    <div
    id="roadmap"
      className="roadmap-container py-5"
      style={{
        backgroundColor: "#080B2A",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <h2 style={{ marginBottom: "1rem" }}>Road map 2024</h2>
      <p style={{ marginBottom: "2rem", color: "#CCCCCC" }}>
        The largest and unique Super rare Xora marketplace for crypto-collectibles
      </p>

      {/* Timeline */}
      <div className="container position-relative">
        {/* Horizontal line for timeline */}
        <div className="row justify-content-center position-relative">
          {/* Roadmap items */}
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-2 d-flex flex-column align-items-center"
              style={{ marginBottom: "2rem" }}
            >
              {/* Box */}
              <div
                className="roadmap-box"
                style={{
                  padding: "1rem",
                  backgroundColor: "#111436",
                  border: "1px solid #F2946D",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                  zIndex: 2,
                  width: "180px",
                }}
              >
                <h5 style={{ fontWeight: "bold" }}>{item.month}</h5>
                <h6>{item.title}</h6>
                <p style={{ fontSize: "14px", color: "#CCCCCC" }}>{item.description}</p>
              </div>

              {/* Circle */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background:
                    "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                  borderRadius: "50%",
                  zIndex: 2,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
