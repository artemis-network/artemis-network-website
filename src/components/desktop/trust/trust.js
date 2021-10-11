import "./trust.css";
import ThumbsUp from "../../../assets/values/double-thumbs-up.png";
import React, { useEffect, useState } from "react";

const trust = () => {
  const ref = React.createRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [status, setStatus] = useState("hidden");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    ref.current.style.visibility = status;
  });

  function handleMouseMove(ev) {
    ref.current.style.left = ev.pageX + "px";
    ref.current.style.top = ev.pageY + "px";
  }

  function handleMouseEnter() {
    setStatus("visible");
  }

  function handleMouseExit() {
    setStatus("hidden");
  }

  return (
    <div>
      <div className="trust">
        <div
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseEnter={(e) => handleMouseEnter()}
          onMouseLeave={(e) => handleMouseExit()}
          className="trust_content"
        >
          <div className="headline">Trust is</div>
          <div className="headline">our guiding</div>
          <div className="sub_trust">
            <div className="headline">{"light ->"}</div>
            <div>
              <div className="sub_line">
                We deeply believe the world lacks trust and there
              </div>
              <div className="sub_line">
                is a desperate need to do something about it.
              </div>
            </div>
          </div>
        </div>

        <div className="trust_img">
          <img src={ThumbsUp} alt="" />
        </div>
      </div>
      <div ref={ref} className="highlight_cursor"></div>
    </div>
  );
};

export default trust;
