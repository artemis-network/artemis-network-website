function hoverAnimationActive(event) {
	anime({
		targets: event.target,
		scale: [1, 1.25],
	})
}

function hoverAnimation(event) {
	anime({
		targets: event.target,
		scale: [1.25, 1],
	})
}