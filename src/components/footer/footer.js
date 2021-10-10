import "./footer.css";

import Facebook from "../../assets/footer/facebook.svg";
import GitHub from "../../assets/footer/github.svg";
import InstaGram from "../../assets/footer/instagram.svg";
import LinkedIn from "../../assets/footer/linkedin.svg";
import Twitter from "../../assets/footer/twitter.svg";
import Artemis from "../../assets/img/artemis.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={Artemis} alt="" />
      </div>

      <div className="footer_main">Artemis Network</div>

      <div className="footer_socials">
        <img className="social_img" src={InstaGram} alt="" />
        <img className="social_img" src={Facebook} alt="" />
        <img className="social_img" src={LinkedIn} alt="" />
        <img className="social_img" src={Twitter} alt="" />
        <img className="social_img" src={GitHub} alt="" />
      </div>

      <div className="terms">
        <div> 2021 © All rights reserved</div>
        <div>Terms & Privacy</div>
        <div> Crafted by us</div>
      </div>
    </div>
  );
};

export default footer;
