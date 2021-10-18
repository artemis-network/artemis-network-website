import FaceBookIcon from "../../../assets/icons/facebook1.svg";
import TwitterIcon from "../../../assets/icons/twitter1.svg";
import LinkedInIcon from "../../../assets/icons/linkedin1.svg";
import Tilt from "react-parallax-tilt";

import "./team.css";

const teamRow = (props) => {
  return (
    <div className="team">
      {props.teamData.map((member) => {
        return (
          <Tilt key={member.linkedInUrl}>
            <div data-aos="zoom-in-up" className="member">
              <Tilt className="avatar">
                <img src={member.avatarUrl} alt="" />
              </Tilt>
              <div className="description">
                <div className="name">{member.name}</div>
                <div className="designation">{member.designation}</div>
              </div>
              <div className="about">
                <img src={FaceBookIcon} alt="" />
                <img src={TwitterIcon} alt="" />
                <img src={LinkedInIcon} alt="" />
              </div>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};

export default teamRow;
