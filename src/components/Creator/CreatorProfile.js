import "../style/creatorProfile.css";
import mail from '../../assets/icons/mail.png';
import twitter from '../../assets/icons/twitter.png';
import linkdin from '../../assets/icons/linkdin.png';
const CreatorProfile = ({ img, name, role, follow }) => {
  return (

<div className="team-card text-center p-4">
<div className="profile-img">
  <img src={img} alt="Profile" style={{ width: "130px", height: "130px", borderRadius: "50%" }}/>
</div>
<h4 className="mt-3 text-white">{name}</h4>
<p className="">{role}</p>
</div>
  );
};

export default CreatorProfile;
