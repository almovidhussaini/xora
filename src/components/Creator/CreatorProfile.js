import "../style/creatorProfile.css";
import mail from '../../assets/icons/mail.png';
import twitter from '../../assets/icons/twitter.png';
import linkdin from '../../assets/icons/linkdin.png';
const CreatorProfile = ({ img, name, role, follow }) => {
  return (
//     <div className="custom-shape m-2 col-md-4">
//       <div className="row justify-content-center align-item-center">
//         <div className="col-4 col-md-4">
//           <img
//             src={img}
//             alt="img"
//             style={{ width: "95px", height: "95px", borderRadius: "50%" }}
//           />
//         </div>
//         <div className="col-6 col-md-6  align-item-center justify-content-center">
//           <p className="pt-3">{name}</p>
//           <p style={{ marginTop: "-15px" }}>{role}</p>
//         </div>
//         <div className="col-2 col-md-2 d-flex justify-content-center align-items-center">
//   <a href="#" className="text-decoration-none">Follow</a>
// </div>
//       </div>
//     </div>

<div className="team-card text-center p-4">
<div className="profile-img">
  <img src={img} alt="Profile" style={{ width: "130px", height: "130px", borderRadius: "50%" }}/>
</div>
<h4 className="mt-3 text-white">{name}</h4>
<p className="">{role}</p>
{/* <div className="flex gap-3 flex-row">
  <img src={twitter} style={{cursor:'pointer'}}/>
  <img src={mail} style={{cursor:'pointer'}}/>
  <img src={linkdin} style={{cursor:'pointer'}}/>
</div> */}
</div>
  );
};

export default CreatorProfile;
