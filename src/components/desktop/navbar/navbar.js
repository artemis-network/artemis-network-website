import "./navigation.css";
import Artemis from "../../../assets/img/artemis.png";

import { Link } from "react-scroll";

const navigationBar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="navigation_bar">
        <div className="navigation_bar_home">
          <Link
            to="brand"
            spy
            smooth={true}
            duration={1500}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            <img src={Artemis} alt="" />
          </Link>
        </div>

        <div className="navigation_bar_links">
          <Link
            to="whatWeDo"
            spy
            smooth={true}
            duration={1500}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            <h4>What we do</h4>
          </Link>
          <Link
            to="values"
            spy
            smooth={true}
            duration={1500}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            <h4>Core Values</h4>
          </Link>
          <Link
            to="team"
            spy
            smooth={true}
            duration={1500}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            <h4>Our Team</h4>
          </Link>
          <Link
            to="contact"
            spy
            smooth={"true"}
            duration={1500}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            <h4>Contact Us</h4>
          </Link>
        </div>
        <div className="cta">
          <div className="cta_careers">
            <a href="https://www.linkedin.com/company/artemisnetwork/">Apply now</a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default navigationBar;
