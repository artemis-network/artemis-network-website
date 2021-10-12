import CarsouelMobile from "./carouselMobile/carousel";
import TeamMobile from "./teamMobile/teamMobile";

import Menu from "./menu/menu";
import Brand from "../shared/main/main";
import Contact from "../shared/contact/contact";
import Footer from "../shared/footer/footer";

import { whatWeDoData } from "../../data/whatWeDoData";
import { valuesData } from "../../data/valuesData";
import { teamData } from "../../data/teamData";

import "./mobile.css";

const mobileComponents = () => {
  return (
    <div className="m_hide">
      <Menu />
      <Brand />
      <div className="mobile">
        <CarsouelMobile
          title={"What We Do"}
          data={whatWeDoData}
        ></CarsouelMobile>
        <hr />
        <CarsouelMobile
          title={"Core Values"}
          data={valuesData}
        ></CarsouelMobile>
        <hr />
        <TeamMobile data={teamData}></TeamMobile>
        <hr />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default mobileComponents;
