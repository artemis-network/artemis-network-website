import "./footer.css";

import Artemis from "../../../assets/img/artemis.png";
import { socialsData } from "../../../data/socialsData";
import { Link } from "react-scroll";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <Link
          to="brand"
          spy
          smooth={true}
          duration={1500}
          className="bar_link_i"
          activeClass="bar_link vactive"
        >
          <img src={Artemis} alt="" />
        </Link>
      </div>

      <div className="footer_main"><h2>
        Artemis Network</h2></div>

      <div className="footer_socials">
        {socialsData.map((data, i) => {
          return (
            <div key={data.link}>
              <a href={data.link}>
                <img className="social_img" src={data.icon} alt="" />
              </a>
            </div>
          );
        })}
      </div>

      <div className="terms">
        <div> 2021 © All rights reserved</div>
        <div> </div>
        <div> Crafted by @ArtemisNetwork </div>
      </div>
    </div>
  );
};

export default footer;
