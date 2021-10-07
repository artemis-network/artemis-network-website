var tilt = $('.js-tilt').tilt({
	maxTilt: 20,
	perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
	easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
	scale: 2,      // 2 = 200%, 1.5 = 150%, etc..
	speed: 300,    // Speed of the enter/exit transition.
	transition: true,   // Set a transition on enter/exit.
	disableAxis: null,   // What axis should be disabled. Can be X or Y.
	reset: true,   // If the tilt effect has to be reset on exit.
	glare: true,  // Enables glare effect
	maxGlare: 3     //
});

tilt.on('change', () => { });
tilt.on('tilt.mouseLeave', () => { });
tilt.on('tilt.mouseEnter', () => { });