const trust_container = document.querySelector('#trust')

const h_cursor = document.querySelector('.highlight_cursor')

trust_container.addEventListener('mouseenter', (e) => {
	anime({
		targets: h_cursor,
		scale: [.75, 1],
		opacity: [0, 1]
	})
	h_cursor.style.visibility = 'visible'
})

trust_container.addEventListener('mouseleave', (e) => {
	anime({
		targets: h_cursor,
		scale: [1, .75],
		opacity: [1, 0]
	})
})

trust_container.addEventListener('mousemove', (e) => {
	trust_container.style.cursor = 'none'
	h_cursor.style.left = e.pageX + 'px';
	h_cursor.style.top = e.pageY + 'px';
})