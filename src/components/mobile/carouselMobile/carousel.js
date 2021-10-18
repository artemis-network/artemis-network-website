import Slider from "react-slick";
import "./carousel.css";

import { carouselSettings } from "../../../data/carouselSettings";

const carousel = (props) => {
  const data = props.data;
  return (
    <div className="i">
      <div className="m_sub_titles">{props.title}</div>
      <Slider {...carouselSettings}>
        {data.map((d, i) => {
          return (
            <div key={i} className="i_carousel">
              <div className="i_carousel_img">
                <img src={d.url} alt="" />
              </div>
              <p className="motto">{d.main}</p>
              <p className={props.styler + " i_carousel_title"}>{d.title}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default carousel;
