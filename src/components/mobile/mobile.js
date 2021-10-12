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
import { Element } from "react-scroll";
import React from "react";

const mobileComponents = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MainChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/brand" name="brand">
        <Brand />
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const WhatWeDoChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/whatWeDoMobile" name="whatWeDoMobile">
        <CarsouelMobile
          title={"What We Do"}
          data={whatWeDoData}
        ></CarsouelMobile>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ValuesChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/valuesMobile" name="valuesMobile">
        <CarsouelMobile
          title={"Core Values"}
          data={valuesData}
        ></CarsouelMobile>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const TeamChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/teamMobile" name="teamMobile">
        <TeamMobile data={teamData}></TeamMobile>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ContactChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/contact" name="contactMobile">
        <div className="m_sub_titles">Get In Touch</div>
        <Contact />
        <Footer />
      </Element>
    );
  });

  return (
    <div className="m_hide">
      <Menu />
      <MainChild />
      <div className="mobile">
        <hr />
        <WhatWeDoChild />
        <hr />
        <ValuesChild />
        <hr />
        <TeamChild />
        <hr />
      </div>
      <ContactChild />
    </div>
  );
};

export default mobileComponents;
