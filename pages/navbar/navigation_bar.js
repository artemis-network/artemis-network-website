function animateBarLinksOnMouseEnter(event) {
	anime({
		targets: event.target,
		color: '#6b6e70',
		scale: 1.05,
	});
}

function animateBarLinksOnMouseLeave(event) {
	anime({
		targets: event.target,
		color: 'var(--primary-font-color)',
		scale: 1,
	});
}