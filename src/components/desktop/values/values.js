import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { valuesData } from "../../../data/valuesData";
import "./values.css";

const values = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let valuesSections = gsap.utils.toArray(".rpanel");
    gsap.set(valuesSections, { xPercent: -110 * (valuesSections.length - 1) });

    gsap.to(valuesSections, {
      xPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".values",
        pin: true,
        scrub: true,
        snap: 1 / (valuesSections.length - 1),
        end: () => "+=" + ref.current.offsetWidth || 0,
      },
    });
  }, []);

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
