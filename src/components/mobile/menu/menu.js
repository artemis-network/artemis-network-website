import { createRef, useState } from "react";

import Menu from "../../../assets/icons/menu.svg";
import Close from "../../../assets/icons/close.svg";

import "./menu.css";
import { Link } from "react-scroll";

const menuComponent = () => {
  const menuRef = createRef();
  const imgRef = createRef();

  const toggleMenu = () => {
    setMenu(!menu);
    if (menu) {
      imgRef.current.src = Close;
      menuRef.current.style.visibility = "visible";
      menuRef.current.style.transform = "translateX(10px)";
    } else {
      imgRef.current.src = Menu;
      menuRef.current.style.visibility = "hidden";
      menuRef.current.style.transform = "translateX(-100vw)";
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div onClick={toggleMenu} id="menu_button" className="menu_button">
        <img ref={imgRef} id="menu_img" src={Menu} alt="" />
      </div>

      <div ref={menuRef} className="menu">
        <ul>
          <li>
            <Link
              to="brand"
              spy
              smooth={"true"}
              duration={1500}
              onClick={toggleMenu}
              className="li"
              activeClass="li"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="whatWeDoMobile"
              spy
              smooth={"true"}
              duration={1500}
              onClick={toggleMenu}
              className="li"
              activeClass="li"
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              to="valuesMobile"
              spy
              smooth={"true"}
              duration={1500}
              onClick={toggleMenu}
              className="li"
              activeClass="li"
            >
              Values
            </Link>
          </li>
          <li>
            <Link
              to="teamMobile"
              spy
              smooth={"true"}
              duration={1500}
              onClick={toggleMenu}
              className="li"
              activeClass="li"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy
              smooth={"true"}
              duration={1500}
              onClick={toggleMenu}
              className="li"
              activeClass="li"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default menuComponent;
