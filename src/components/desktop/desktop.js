import React, { useEffect } from "react";
import AOS from "aos";
import { Element } from "react-scroll";
import { gsap, ScrollTrigger } from "gsap/all";
import "aos/dist/aos.css";

import Navbar from "./navbar/navbar";
import Main from "../shared/main/main";
import WhatWeDo from "./whatWeDo/whatWeDo";
import Trust from "./trust/trust";
import Values from "./values/values";
import Team from "./team/team";
import Contact from "../shared/contact/contact";
import Footer from "../shared/footer/footer";

import VerticalDots from "./vertical_dots/vertical_dots";
import SocialBar from "./socialbar/socialbar";

import "./desktop.css";

const desktop = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const brandRef = React.useRef();
  const MainChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/brand" name="brand">
        <div id="brandRefs" ref={brandRef}>
          <Main />
        </div>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const whatWeDoRef = React.useRef();
  const WhatWeDoChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/whatWeDo" name="whatWeDo">
        <div ref={whatWeDoRef} id="whatWeDoRefs" className="sub_p_what_we_do">
          <div className="subtitle hide">
            <div className="main_heading">What We Do</div>
            <div className="underline"></div>
            <div className="sub_heading">Some Text Comes Here</div>
          </div>
          <WhatWeDo />
        </div>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const trustRef = React.useRef();
  const TrustChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/trust" name="trust">
        <div ref={trustRef} id="trustRefs">
          <Trust />
        </div>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const valuesRef = React.useRef();
  const ValuesChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/values" name="values">
        <div id="valuesRefs" ref={valuesRef} className="sub_p_values">
          <div className="subtitle hide">
            <div className="main_heading">Core Values</div>
            <div className="underline"></div>
            <div className="sub_heading">Some Text Comes Here</div>
          </div>
          <Values />
        </div>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const teamRef = React.useRef();
  const TeamChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/team" name="team">
        <div id="teamRefs" ref={teamRef} className="sub_p_team">
          <div className="subtitle hide">
            <div className="main_heading">Our Team</div>
            <div className="underline"></div>
            <div className="sub_heading">Some Text Comes Here</div>
          </div>
          <Team />
        </div>
      </Element>
    );
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contactRef = React.useRef();
  const ContactChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/contact" name="contact">
        <div id="contactRefs" ref={contactRef} className="sub_p_contact ">
          <div className="subtitle hide">
            <div className="main_heading">Get in Touch</div>
            <div className="underline"></div>
            <div className="sub_heading">Some Text Comes Here</div>
          </div>
          <Contact />
        </div>
      </Element>
    );
  });

  const FooterChild = () => {
    return (
      <div className="panel">
        <Footer />
      </div>
    );
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div className="desktop">
      <React.Fragment>
        <Navbar className="d_hide" />
        <VerticalDots
          refsList={[
            brandRef,
            whatWeDoRef,
            trustRef,
            valuesRef,
            teamRef,
            contactRef,
          ]}
          className="verticals d_hide"
        />
        <MainChild />
        <WhatWeDoChild />
        <TrustChild />
        <ValuesChild />
        <TeamChild />
        <ContactChild />
        <FooterChild />
        <SocialBar className="socials d_hide" />
      </React.Fragment>
    </div>
  );
};

export default desktop;
