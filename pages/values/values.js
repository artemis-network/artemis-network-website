gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".hpanel");

gsap.set(sections, { xPercent: -100 * (sections.length - 1) })

gsap.to(sections, {
	xPercent: 50,
	ease: "none",
	scrollTrigger: {
		trigger: "#values",
		pin: true,
		scrub: 1,
		snap: 1 / (sections.length - 1),
		// base vertical scrolling on how wide the container is so it feels more natural.
		end: () => "+=" + document.querySelector("#values").offsetWidth
	}
});