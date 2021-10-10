import "./team.css";

import Praneeth from "../../assets/team/chakri.jpg";
import FaceBookIcon from "../../assets/icons/facebook1.svg";
import TwitterIcon from "../../assets/icons/twitter1.svg";
import LinkedInIcon from "../../assets/icons/linkedin1.svg";
import Tilt from "react-parallax-tilt";

const teamData = [
  {
    name: "Praneeth Nagu",
    designation: "Co-Founder",
    avatarUrl: Praneeth,
    facebookUrl: "",
    twitterUrl: "",
    linkedInUrl: "6",
  },
  {
    name: "Praneeth Nagu",
    designation: "Co-Founder",
    avatarUrl: Praneeth,
    facebookUrl: "",
    twitterUrl: "",
    linkedInUrl: "5",
  },
  {
    name: "Praneeth Nagu",
    designation: "Co-Founder",
    avatarUrl: Praneeth,
    facebookUrl: "",
    twitterUrl: "",
    linkedInUrl: "4",
  },
  {
    name: "Praneeth Nagu",
    designation: "Co-Founder",
    avatarUrl: Praneeth,
    facebookUrl: "",
    twitterUrl: "",
    linkedInUrl: "3",
  },
  {
    name: "Praneeth Nagu",
    designation: "Co-Founder",
    avatarUrl: Praneeth,
    facebookUrl: "",
    twitterUrl: "",
    linkedInUrl: "2",
  },
  {
    name: "Praneeth Nagu",
    designation: "Co-Founder",
    avatarUrl: Praneeth,
    facebookUrl: "",
    twitterUrl: "",
    linkedInUrl: "1",
  },
];

const teamComponent = () => {
  return (
    <div className="team_laptop_desktop">
      <div className="team">
        {teamData.map((member) => {
          return (
            <Tilt key={member.linkedInUrl}>
              <div data-aos="zoom-in-up" className="member">
                <div className="info">
                  <Tilt className="avatar">
                    <img src={member.avatarUrl} alt="" />
                  </Tilt>
                  <div className="description">
                    <div className="name">{member.name}</div>
                    <div className="designation">{member.designation}</div>
                    <div className="about">
                      <img src={FaceBookIcon} alt="" />
                      <img src={TwitterIcon} alt="" />
                      <img src={LinkedInIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default teamComponent;
