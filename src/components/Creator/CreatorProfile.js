import "../style/creatorProfile.css";
const CreatorProfile = ({ img, name, role, follow }) => {
  return (
    <div className="custom-shape m-2 col-md-4">
      <div className="row justify-content-center align-item-center">
        <div className="col-4 col-md-4">
          <img
            src={img}
            alt="img"
            style={{ width: "95px", height: "95px", borderRadius: "50%" }}
          />
        </div>
        <div className="col-6 col-md-6  align-item-center justify-content-center">
          <p className="pt-3">{name}</p>
          <p style={{ marginTop: "-15px" }}>{role}</p>
        </div>
        <div className="col-2 col-md-2 d-flex justify-content-center align-items-center">
  <a href="#" className="text-decoration-none">Follow</a>
</div>
      </div>
    </div>
  );
};

export default CreatorProfile;
