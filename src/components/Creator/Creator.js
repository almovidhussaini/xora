import React from "react";
import CreatorProfile from "./CreatorProfile";
import image1 from '../../assets/team/h2_team_img02.jpg'
import shahalmoved from '../../assets/team/shah.PNG'
import khurshid from '../../assets/team/kurshid.PNG'
import Zubair from '../../assets/team/zubair.PNG'

const Creator = () => {
  const creators = [
    {
      image: image1,
      name: "Ibtesam Asif",
      role: "Project Manager",
      follow: "follow",
    },
    {
      image: shahalmoved,
      name: "Shah Almoveed",
      role: "Web3 developer",
      follow: "follow",
    },
    {
      image: khurshid,
      name: "Khurshid Islam",
      role: "UX/UI designer",
      follow: "follow",
    },
    {
      image: Zubair,
      name: "Zubair Ahmad",
      role: "Marketing",
      follow: "follow",
    }
  ];
  return (
    <div
      className=" text-white pt-4"
      style={{ backgroundColor: "#080B2A", marginBottom: "-3rem",paddingBottom:'4rem' }}
    >
      <div className="container d-flex justify-content-center text-center">
        <h2>Our Creator</h2>
        <p>
          The largest and unique Super rare Xora marketplace for crypto
          collectibles
        </p>
        <div className="row d-flex justify-content-center ">
          {creators.map((creator, index) => (
            <CreatorProfile
              key={index}
              img={creator.image}
              name={creator.name}
              role={creator.role}
              follow={creator.follow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creator;
