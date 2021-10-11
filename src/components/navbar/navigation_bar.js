import "./navigation.css";
import Artemis from "../../assets/img/artemis.png";

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
            duration={500}
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
            duration={750}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            What we do
          </Link>
          <Link
            to="values"
            spy
            smooth={true}
            duration={1000}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            Core Values
          </Link>
          <Link
            to="team"
            spy
            smooth={true}
            duration={1250}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            Our Team
          </Link>
          <Link
            to="contact"
            spy
            smooth={"true"}
            duration={1500}
            className="bar_link"
            activeClass="bar_link vactive"
          >
            Contact Us
          </Link>
        </div>
        <div className="cta">
          <div className="cta_careers">Apply now</div>
        </div>
      </div>
    </div>
  );
};

export default navigationBar;
