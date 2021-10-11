import "./contact.css";

import Tilt from "react-parallax-tilt";

const contactComponent = () => {
  return (
    <div className="contact_page">
      <div className="two_split">
        <Tilt className="map" data-aos="zoom-in-up">
          <svg id="my_dataviz" width="800" height="450"></svg>
        </Tilt>

        <form
          action="https://formspree.io/f/myylvbab"
          method="POST"
          className="form"
          data-aos="zoom-in-up"
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Name"
            required={true}
          />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
            required={true}
          />
          <textarea
            id="message"
            autoComplete="off"
            cols="20"
            rows="4"
          ></textarea>
          <button type="submit" placeholder="Message">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contactComponent;
