import "./App.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import MobileComponents from "./components/mobile/mobile";
import { Element } from "react-scroll";
import { gsap, ScrollTrigger } from "gsap/all";

import Navbar from "./components/desktop/navbar/navbar";
import VerticalDots from "./components/desktop/vertical_dots/vertical_dots";
import SocialBar from "./components/desktop/socialbar/socialbar";

import WhatWeDo from "./components/desktop/whatWeDo/whatWeDo";
import Trust from "./components/desktop/trust/trust";
import Values from "./components/desktop/values/values";
import Team from "./components/desktop/team/team";

import Brand from "./components/shared/main/main";
import Contact from "./components/shared/contact/contact";
import Footer from "./components/shared/footer/footer";

import "./components/desktop/desktop.css";

const App = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: 1 / 2,
      });
    });
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const brandRef = React.useRef();
  const MainChild = React.forwardRef((props, ref) => {
    return (
      <Element id="/brand" name="brand">
        <div id="brandRefs" ref={brandRef}>
          <Brand />
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
        <div id="contactRefs" ref={contactRef} className="sub_p_contact panel">
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
    return <Footer className="panel" />;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({});
  });

  return (
    <React.Fragment>
      <Navbar />
      <VerticalDots
        refsList={[
          brandRef,
          whatWeDoRef,
          trustRef,
          valuesRef,
          teamRef,
          contactRef,
        ]}
        className="verticals"
      />
      <MainChild />
      <WhatWeDoChild />
      <TrustChild />
      <ValuesChild />
      <TeamChild />
      <ContactChild />
      <FooterChild />
      <SocialBar id="socials" className="socials" />
    </React.Fragment>
  );
};

export default App;
