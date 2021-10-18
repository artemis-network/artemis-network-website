import "./socialbar.css";
import { socialsData } from "../../../data/socialsData";

const socialBarComponent = () => {
  return (
    <div className="socials_hidden">
      {socialsData.map((data, i) => {
        return (
          <div key={data.link}>
            <a href={data.link}>
              <img className="social_img" src={data.icon} alt="" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default socialBarComponent;
