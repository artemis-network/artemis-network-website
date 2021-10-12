import Tilt from "react-parallax-tilt";

import "./teamMobile.css";

import Slider from "react-slick";

import FaceBookIcon from "../../../assets/icons/facebook1.svg";
import TwitterIcon from "../../../assets/icons/twitter1.svg";
import LinkedInIcon from "../../../assets/icons/linkedin1.svg";

import { carouselSettings } from "../../../data/carouselSettings";

const teamMobile = (props) => {
  return (
    <div className="team_ipad">
      <div className="m_sub_titles">Our Team</div>
      <Slider {...carouselSettings}>
        {props.data.map((member) => {
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
