import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { whatWeDoData } from "../../../data/whatWeDoData";
import "./whatWeDo.css";

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
