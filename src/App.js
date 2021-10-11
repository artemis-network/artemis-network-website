import "./App.css";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

import NavBar from "./components/navbar/navbar";
import Menu from "./components/menu/menu";
import Main from "./components/main/main";
import WhatWeDo from "./components/whatWeDo/whatWeDo";
import Trust from "./components/trust/trust";
import Values from "./components/values/values";
import Team from "./components/team/team";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import VerticalDots from "./components/vertical_dots/vertical_dots";
import SocialBar from "./components/socialbar/socialbar";
import { Element } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
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

  useEffect(() => {
    AOS.init({});
  });

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

  const contactRef = useRef();
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
    return (
      <div className="panel">
        <Footer id="footer" />
      </div>
    );
  };

  return (
    <React.Fragment>
      <Menu />
      <NavBar />
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
