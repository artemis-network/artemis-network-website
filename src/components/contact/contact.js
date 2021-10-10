import "./contact.css";

import * as d3 from "d3";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";

const contactComponent = () => {
  const svgRef = React.createRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    drawMap();
  });

  const drawMap = () => {
    const svg = d3.select(svgRef.current),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    // Map and projection
    const projection = d3
      .geoNaturalEarth1()
      .scale(width / 1 / Math.PI)
      .translate([width / 8, height / 2]);

    const markers = [
      [100.8313415527344, 6.26675774823251],
      [74.044751321368, 16.519503282141534],
    ];

    // Load external data and boot
    d3.json("../../assets/map/location.geo.json").then(function (data) {
      // Draw the map

      svg
        .append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
        .attr("fill", "#f0ecf8")
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "#A4A1BE");
      svg
        .append("g")
        .selectAll("g")
        .data(markers)
        .enter()
        .append("image")
        .attr("width", 32)
        .attr("height", 32)
        .attr("xlink:href", "../../assets/img/location.png")
        .attr("transform", function (d) {
          return "translate(" + projection(d) + ")";
        });
    });
  };

  return (
    <div className="contact_page">
      <div className="two_split">
        <Tilt className="map" data-aos="zoom-in-up">
          <svg ref={svgRef} id="my_dataviz" width="800" height="450"></svg>
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

// 	event.target.innerText = ''
// 	anime({
// 		targets: event.target,
// 		scale: [1.05, 1],
// 		color: '#1f2421',
// 		duration: 1000,
// 		backgroundColor: ['#F2EFF8', "#ffffff"]
// 	});
// }

// function submit(event) {
// 	event.preventDefault()
// 	anime({
// 		targets: event.target,
// 		scale: [1.05, 1],
// 		backgroundColor: ['#F2EFF8', "#ffffff"],
// 		duration: 1000,
// 		color: '#1f2421',
// 	});

// 	var inputs = document.getElementsByTagName('input')
// 	var textArea = document.getElementsByTagName('textarea')

// 	textArea[0].value = null
// 	event.target.innerText = 'Submitted'

// 	for (let i = 0; i < inputs.length; i++) {
// 		inputs[i].style.backgroundColor = '#e0e0e0'
// 		inputs[i].value = null
// 	}

// 	event.target.style.color = 'var(--primary-font-color)'
// 	setTimeout(() => {
// 		event.target.innerText = "Submit"
// 	}, 3000)
// }
