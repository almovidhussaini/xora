// import React from "react";
// import CreatorProfile from "./CreatorProfile";
// import image1 from '../../assets/team/h2_team_img02.jpg'
// import shahalmoved from '../../assets/team/shah.PNG'
// import khurshid from '../../assets/team/kurshid.PNG'
// import Zubair from '../../assets/team/zubair.PNG'

// import aiden from '../../assets/team/aiden.webp';
// import lena from '../../assets/team/lena.webp';
// import kai from '../../assets/team/kai.webp';
// import eva from '../../assets/team/eva.webp'


// const Creator = () => {
//   const creators = [
//     {
//       image: aiden,
//       name: "Aiden Xorwell",
//       role: "Lead Blockchain Developer",
//       follow: "follow",
//     },
//     {
//       image: lena,
//       name: "Lena Synthex",
//       role: "Game Design & UI/UX Specialist",
//       follow: "follow",
//     },
//     {
//       image: kai,
//       name: "Kai Novatrix ",
//       role: "Smart Contract & Security Engineer",
//       follow: "follow",
//     },
//     {
//       image: eva,
//       name: "Eva Nexon ",
//       role: "Marketing & Community Manager",
//       follow: "follow",
//     }
//   ];
//   return (
//     <div
//       className=" text-white pt-4"
//       style={{ backgroundColor: "#080B2A", marginBottom: "-3rem",paddingBottom:'4rem' }}
//     >
//       <div className="container d-flex justify-content-center text-center">
//         <h2>Our Creator</h2>
//         <p>
//           The largest and unique Super rare Xora marketplace for crypto
//           collectibles.
//         </p>
//         <div className="row d-flex justify-content-center ">
//           {creators.map((creator, index) => (

//             <div  key={index} className="col-md-2 col-sm-6" style={{margin:'0 1.5rem'}}>
             
            
//             <CreatorProfile
//               key={index}
//               img={creator.image}
//               name={creator.name}
//               role={creator.role}
//               follow={creator.follow}
//             />
//              </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Creator;

import React from "react";
import CreatorProfile from "./CreatorProfile";
import aiden from '../../assets/team/aiden.webp';
import lena from '../../assets/team/lena.webp';
import kai from '../../assets/team/kai.webp';
import eva from '../../assets/team/eva.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Creator = () => {
  const creators = [
    {
      image: aiden,
      name: "Aiden Xorwell",
      role: "Lead Blockchain Developer",
    },
    {
      image: lena,
      name: "Lena Synthex",
      role: "Game Design & UI/UX Specialist",
    },
    {
      image: kai,
      name: "Kai Novatrix",
      role: "Smart Contract & Security Engineer",
    },
    {
      image: eva,
      name: "Eva Nexon",
      role: "Marketing & Community Manager",
    }
  ];

  return (
    <div className="text-white pt-5 pb-5" style={{ backgroundColor: "#080B2A" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Our Creators</h2>
        <p className="lead mb-4">
          The largest and most unique Super Rare Xora marketplace for crypto collectibles.
        </p>
        
        <div className="row justify-content-center">
          {creators.map((creator, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <CreatorProfile
                img={creator.image}
                name={creator.name}
                role={creator.role}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creator;

