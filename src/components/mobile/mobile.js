import FistBump from "../../assets/values/fist-bump-gesture.png";
import HandGuesture from "../../assets/values/stop-hand-gesture.png";
import Fist from "../../assets/values/solidarity-fist.png";
import CloudBall from "../../assets/values/cloud-ball.png";
import Hifi from "../../assets/values/hifi.png";

import CarsouelMobile from "./carouselMobile/carousel";
import TeamMobile from "./teamMobile/teamMobile";

import Menu from "./menu/menu";
import Brand from "../shared/main/main";
import "./mobile.css";

const data = [
  {
    main: "Commitment to Excellence",
    title:
      "We strive to deliver the highest quality and value possible through simple, easy, and relevant solutions with a determination to succeed",
    url: FistBump,
  },
  {
    main: "Transparency",
    title:
      "We operate so that it is easy for others to see what actions we perform. We believe in open agendas, accompanied by the availability of complete information required for the sustainability of blockchain products",
    url: HandGuesture,
  },
  {
    main: "Social responsibility",
    title:
      "We believe technology is a powerful propellant for social good and strive towards fostering a sustainable future where everyone has a share in the benefits and opportunities created by technology",
    url: Fist,
  },
  {
    main: "Growth Mindset",
    title:
      "We believe that everyone can grow and develop, that potential is nurtured, not pre-determined, and that anyone can change their mindset",
    url: CloudBall,
  },
  {
    main: "Diversity and Inclusion",
    title:
      "We thrive on variety. We imbibe our employee's and customers' experiences, strengths, and different perspectives to inform, challenge, and broaden our thinking",
    url: Hifi,
  },
];

const mobileComponents = () => {
  return (
    <div>
      <Menu />
      <Brand />
      <div className="mobile">
        <CarsouelMobile title={"What We Do"} data={data}></CarsouelMobile>
        <hr />
        <CarsouelMobile title={"Core Values"} data={data}></CarsouelMobile>
        <hr />
        <TeamMobile></TeamMobile>
        <hr />
      </div>
    </div>
  );
};

export default mobileComponents;
