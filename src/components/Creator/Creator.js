import React from "react";
import CreatorProfile from "./CreatorProfile";

const Creator = () => {
  const creators = [
    {
      image: "path to image",
      name: "example",
      eth: "3.2 Eth",
      follow: "follow",
    },
    {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
        follow: "follow",
      },
      {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
        follow: "follow",
      },
      {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
        follow: "follow",
      },
      {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
        follow: "follow",
      },
      {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
        follow: "follow",
      },
      {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
        follow: "follow",
      },
      {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
        follow: "follow",
      },
      {
        image: "path to image",
        name: "example",
        eth: "3.2 Eth",
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
              eth={creator.eth}
              follow={creator.follow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creator;
