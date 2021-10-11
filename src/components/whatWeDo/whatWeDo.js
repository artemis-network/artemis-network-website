import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import "./whatWeDo.css";

import FistBump from "../../assets/values/fist-bump-gesture.png";
import HandGuesture from "../../assets/values/stop-hand-gesture.png";
import Fist from "../../assets/values/solidarity-fist.png";
import CloudBall from "../../assets/values/cloud-ball.png";
import Hifi from "../../assets/values/hifi.png";

const whatWeDo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".x_panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".what_we_do",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        invalidateOnRefresh: true,
      },
    });
  }, []);

  const whatWeDoData = [
    {
      main: "DAO-GOVERNED",
      title: "Decentralized, trust-minimized and transparent governance",
      url: Hifi,
    },
    {
      main: "DEFI",
      title: "Disrupting financial intermediaries with Decentralized Finance",
      url: CloudBall,
    },
    {
      main: "DApps",
      title:
        "Building applications on a decentralized network with the use of smart contracts",
      url: FistBump,
    },
    {
      main: "DEX",
      title:
        "A fully decentralized exchange for prediction markets on future events",
      url: HandGuesture,
    },
    {
      main: "Prediction Markets",
      title:
        "Exchange-traded markets created for trading on the outcome of events",
      url: Fist,
    },
  ];

  return (
    <div className="what_we_do">
      {whatWeDoData.map((item) => {
        return (
          <div key={item.main} className="product x_panel">
            <img src={item.url} alt="" />
            <div className="text">
              <h2>{item.main}</h2>
              <p>{item.title} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default whatWeDo;
