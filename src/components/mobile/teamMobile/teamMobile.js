import Praneeth from "../../../assets/team/chakri.jpg";
import FaceBookIcon from "../../../assets/icons/facebook1.svg";
import TwitterIcon from "../../../assets/icons/twitter1.svg";
import LinkedInIcon from "../../../assets/icons/linkedin1.svg";
import Tilt from "react-parallax-tilt";

import Slider from "react-slick";
import "./teamMobile.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
const teamMobile = () => {
  return (
    <div className="team_ipad">
      <div className="m_sub_titles">Our Team</div>
      <Slider {...settings}>
        {teamData.map((member) => {
          return (
            <div key={member.linkedInUrl} className="member_ipad">
              <div className="info_ipad">
                <Tilt className="avatar_ipad">
                  <img src={member.avatarUrl} alt="" />
                </Tilt>
                <div className="description_ipad">
                  <div className="name_ipad">{member.name}</div>
                  <div className="designation_ipad">{member.designation}</div>
                  <div className="about_ipad">
                    <img src={FaceBookIcon} alt="" />
                    <img src={TwitterIcon} alt="" />
                    <img src={LinkedInIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default teamMobile;
