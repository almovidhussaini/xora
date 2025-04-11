import React from "react";
import whitepaperpic from "../../assets/whitepaper.png";
import "./Whitepaper.css"; // optional custom styles

const Whitepaper = () => {
  return (
    <div
      className="whitepaper-container d-flex flex-column flex-lg-row justify-content-center align-items-center px-4 px-lg-5"
      style={{
        backgroundColor: "#080B2A",
        minHeight: "100vh",
        color: "#fff",
        paddingTop: "6rem",
        paddingBottom: "3rem",
      }}
    >
      {/* Left Content */}
      <div className="text-start" style={{ maxWidth: "500px" }}>
        <p className="fw-semibold">
          <span style={{ color: "#0CC0DF", fontSize: "1.5rem" }}>•</span>
          <span className="text-white mx-2">Whitepaper</span>
          <span style={{ color: "#0CC0DF", fontSize: "1.5rem" }}>•</span>
        </p>

        <h4 className="fw-bold mb-1" style={{ marginTop: "2rem" }}>
          Read XORA LAND
        </h4>
        <h2
          className="fw-bold"
          style={{ color: "#0CC0DF", marginBottom: "2rem" }}
        >
          DECUMENTS
        </h2>

        <div className="mt-4 d-flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/file/d/1pElLfkSOdcsKJS9nrXIMEzU2OGQQlI40/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn px-4 py-2 text-white"
              style={{
                background: "linear-gradient(90deg, #A64BF4 0%, #FF7AC6 100%)",
                border: "none",
                borderRadius: "0.5rem",
              }}
            >
              VIEW
            </button>
          </a>
          <a
            href="https://drive.usercontent.google.com/u/1/uc?id=1pElLfkSOdcsKJS9nrXIMEzU2OGQQlI40&export=download"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white px-4 py-2"
            style={{
              border: "none",
              background: "linear-gradient(90deg, #A64BF4 0%, #FF7AC6 100%)",
              borderRadius: "0.5rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            DOWNLOAD DOC
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="text-center text-lg-end mt-5 mt-lg-0">
        <img
          src={whitepaperpic}
          alt="Xora Whitepaper"
          className="whitepaper-img img-fluid"
        />
      </div>
    </div>
  );
};

export default Whitepaper;
