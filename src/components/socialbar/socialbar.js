import "./socialbar.css";

import Twitter from "../../assets/icons/twitter.svg";
import Facebook from "../../assets/icons/facebook.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/github.svg";
import InstaGram from "../../assets/icons/instagram.svg";

const socialsData = [Twitter, Facebook, LinkedIn, GitHub, InstaGram];

const socialBarComponent = () => {
  return (
    <div className="socials_hidden">
      {socialsData.map((data, i) => {
        return <img key={i} className="social_img" src={data} alt="" />;
      })}
    </div>
  );
};

export default socialBarComponent;
