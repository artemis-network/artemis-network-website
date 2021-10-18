import "./contact.css";
import Map from "./map";

const contactComponent = () => {
  return (
    <div className="contact_page panel">
      <div className="two_split">
        <div className="map" data-aos="zoom-in-up">
          <Map />
        </div>

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
          <textarea id="message" autoComplete="off" cols="20" rows="4" placeholder="Message" aria-placeholder="Message">
          </textarea>
          <button type="submit" >
            Submit
          </button>
        </form>
      </div>

      <div className="weight"></div>
    </div>
  );
};

export default contactComponent;
