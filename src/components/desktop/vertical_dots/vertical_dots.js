import { useEffect, useRef } from "react";
import "./vertical_dots.css";

const verticalDots = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const verticalRef = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const callback = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "brandRefs") {
              verticalRef.current.children[1].classList.remove("active");
              verticalRef.current.children[2].classList.remove("active");
              verticalRef.current.children[3].classList.remove("active");
              verticalRef.current.children[4].classList.remove("active");
              verticalRef.current.children[5].classList.remove("active");
              verticalRef.current.children[0].classList.add("active");
            }
            if (entry.target.id === "whatWeDoRefs") {
              verticalRef.current.children[0].classList.remove("active");
              verticalRef.current.children[2].classList.remove("active");
              verticalRef.current.children[3].classList.remove("active");
              verticalRef.current.children[4].classList.remove("active");
              verticalRef.current.children[5].classList.remove("active");
              verticalRef.current.children[1].classList.add("active");
            }
            if (entry.target.id === "trustRefs") {
              verticalRef.current.children[0].classList.remove("active");
              verticalRef.current.children[1].classList.remove("active");
              verticalRef.current.children[3].classList.remove("active");
              verticalRef.current.children[4].classList.remove("active");
              verticalRef.current.children[5].classList.remove("active");
              verticalRef.current.children[2].classList.add("active");
            }
            if (entry.target.id === "valuesRefs") {
              verticalRef.current.children[0].classList.remove("active");
              verticalRef.current.children[1].classList.remove("active");
              verticalRef.current.children[2].classList.remove("active");
              verticalRef.current.children[4].classList.remove("active");
              verticalRef.current.children[5].classList.remove("active");
              verticalRef.current.children[3].classList.add("active");
            }
            if (entry.target.id === "teamRefs") {
              verticalRef.current.children[0].classList.remove("active");
              verticalRef.current.children[1].classList.remove("active");
              verticalRef.current.children[2].classList.remove("active");
              verticalRef.current.children[3].classList.remove("active");
              verticalRef.current.children[5].classList.remove("active");
              verticalRef.current.children[4].classList.add("active");
            }

            if (entry.target.id === "contactRefs") {
              verticalRef.current.children[0].classList.remove("active");
              verticalRef.current.children[1].classList.remove("active");
              verticalRef.current.children[2].classList.remove("active");
              verticalRef.current.children[3].classList.remove("active");
              verticalRef.current.children[4].classList.remove("active");
              verticalRef.current.children[5].classList.add("active");
            }
          }
        });
      },
      { rootMargin: "-75px" }
    );

    callback.observe(props.refsList[0].current);
    callback.observe(props.refsList[1].current);
    callback.observe(props.refsList[2].current);
    callback.observe(props.refsList[3].current);
    callback.observe(props.refsList[4].current);
    callback.observe(props.refsList[5].current);
  });

  return (
    <div className="scroller">
      <div ref={verticalRef} id="points" className="points">
        <div className="point active"></div>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
      </div>
    </div>
  );
};

export default verticalDots;
