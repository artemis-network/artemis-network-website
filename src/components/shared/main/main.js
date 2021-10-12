import React from "react";

import "./main.css";
import MouseCursor from "../../../assets/icons/mouse.svg";
import Tilt from "react-parallax-tilt";

const mainComponent = () => {
  return (
    <div className="artemis_network">
      <div data-aos="zoom-in-up" data-aos-duration="">
        <Tilt>
          <div id="brand_title" className="title">
            Artemis Network
          </div>
        </Tilt>
        <div className="tag">
          We are a Blockchain company. We develop reliable, decentralized
          products
        </div>
      </div>
      <div className="scroller_text">
        <img src={MouseCursor} alt="" />
        <p>Scroll Down</p>
      </div>
    </div>
  );
};

export default mainComponent;
