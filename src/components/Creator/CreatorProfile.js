const CreatorProfile = ({ img, name, eth, follow }) => {
  console.log(img, name, eth, follow); // This will show the correct values now
  return (
    <div className="col-md-3 m-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" , borderRadius:'10px'}}>
      {/* <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{eth} ETH</p>
            <p>{follow} Followers</p> */}
      <div className="row d-flex align-items-center">
        <div className="col-auto">
          <img
            src={img}
            alt="img"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        </div>
        <div className="col">
          <h4>{name}</h4>
          <p>{eth}</p>
        </div>
        <div className="col-auto">
          {/* <h4>{follow}</h4> */}
          <a href="#" class="">Follow</a>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
