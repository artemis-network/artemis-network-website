import Slider from "react-slick";
import "./carousel.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const carousel = (props) => {
  const data = props.data;
  return (
    <div className="i">
      <div className="m_sub_titles">{props.title}</div>
      <Slider {...settings}>
        {data.map((d, i) => {
          return (
            <div key={i} className="i_carousel">
              <div className="i_carousel_img">
                <img src={d.url} alt="" />
              </div>
              <p className="motto">{d.main}</p>
              <p className="i_carousel_title">{d.title}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default carousel;
