const CreatorProfile = ({ img, name, role, follow }) => {
  return (
    <div className="col-md-5 m-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" , borderRadius:'10px'}}>
      <div className="row d-flex align-items-center">
        <div className="col-3 col-md-4 ">
          <img
            src={img}
            alt="img"
            style={{ width: "100px", height: "100px", borderRadius:'50%'}}
          />
          
        </div>
        <div className="col-6 col-md-4  align-item-center justify-content-center" >
          <p className="pt-3">{name}</p>
          <p style={{ marginTop: "-15px" }}>{role}</p>
        </div>
        <div className="col-3 col-md-4">
          {/* <h4>{follow}</h4> */}
          <a href="#">Follow</a>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
