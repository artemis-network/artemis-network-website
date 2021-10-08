gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".hpanel");

gsap.set(sections, { xPercent: -100 * (sections.length - 1) })

gsap.to(sections, {
	xPercent: 0,
	ease: "none",
	scrollTrigger: {
		trigger: "#values",
		pin: true,
		scrub: true,
		snap: 1 / (sections.length - 1) * 0.15,
		// base vertical scrolling on how wide the container is so it feels more natural.
		end: () => "+=" + document.querySelector("#values").offsetWidth
	}
});