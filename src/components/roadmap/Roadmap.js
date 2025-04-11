
import React from "react";
import roadmap from '../../assets/roadmap.svg'
import roadmap1 from '../../assets/roadmap1.svg'
const Roadmap = () => {
  return (

    <div
  id="roadmap"
  style={{
    backgroundColor: "#080B2A",
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",

  }}
>

  <h1 style={{margin:'2rem 0', color:'white'}}>Roadmap</h1>
  <img
    src={roadmap1}
    draggable="false"
    onSelectCapture={(e) => e.preventDefault()}
    onSelect={(e) => e.stopPropagation()}
    style={{ width: "100%", height: "auto", objectFit: "contain",userSelect: "none",pointerEvents: "none" }}
  />
  
  
</div>
    
  );
};

export default Roadmap;

