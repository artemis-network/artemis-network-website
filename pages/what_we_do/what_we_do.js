gsap.registerPlugin(ScrollTrigger);

let container_we = document.getElementById("what_we_do")

gsap.to(container_we, {
	xPercent: -80,
	ease: "none",
	scrollTrigger: {
		trigger: container_we,
		pin: true,
		scrub: 1,
		snap: false,
		end: () => "+=" + container_we.offsetWidth
	}
})