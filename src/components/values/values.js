import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import "./values.css";

import FistBump from "../../assets/values/fist-bump-gesture.png";
import HandGuesture from "../../assets/values/stop-hand-gesture.png";
import Fist from "../../assets/values/solidarity-fist.png";
import CloudBall from "../../assets/values/cloud-ball.png";
import Hifi from "../../assets/values/hifi.png";

const values = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let valuesSections = gsap.utils.toArray(".rpanel");
    gsap.set(valuesSections, { xPercent: -110 * (valuesSections.length - 1) });

    gsap.to(valuesSections, {
      xPercent: 65,
      ease: "none",
      scrollTrigger: {
        trigger: ".values",
        pin: true,
        scrub: true,
        snap: 1 / (valuesSections.length - 1),
        end: () => "+=" + ref.current.offsetWidth,
      },
    });
  }, []);

  const valuesData = [
    {
      main: "Commitment to Excellence",
      title:
        "We strive to deliver the highest quality and value possible through simple, easy, and relevant solutions with a determination to succeed",
      url: FistBump,
    },
    {
      main: "Transparency",
      title:
        "We operate so that it is easy for others to see what actions we perform. We believe in open agendas, accompanied by the availability of complete information required for the sustainability of blockchain products",
      url: HandGuesture,
    },
    {
      main: "Social responsibility",
      title:
        "We believe technology is a powerful propellant for social good and strive towards fostering a sustainable future where everyone has a share in the benefits and opportunities created by technology",
      url: Fist,
    },
    {
      main: "Growth Mindset",
      title:
        "We believe that everyone can grow and develop, that potential is nurtured, not pre-determined, and that anyone can change their mindset",
      url: CloudBall,
    },
    {
      main: "Diversity and Inclusion",
      title:
        "We thrive on variety. We imbibe our employee's and customers' experiences, strengths, and different perspectives to inform, challenge, and broaden our thinking",
      url: Hifi,
    },
  ];

  return (
    <div ref={ref} className="values">
      {valuesData.map((value) => {
        return (
          <div key={value.url} className="value rpanel">
            <img src={value.url} alt="" />
            <div className="content">
              <h2>{value.main}</h2>
              <p>{value.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default values;
