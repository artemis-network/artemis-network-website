var points = document.getElementById('points')

const brand = document.getElementById('brand')
const what_we_do = document.getElementById("what_we_do")
const trust = document.getElementById("trust")
const team = document.getElementById("team")
const values = document.getElementById("values")
const contact = document.getElementById("contact")

let navbar = document.querySelector("#navbar")
let container = document.querySelector('html')

const scroller = new IntersectionObserver(function (entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			if (entry.target.id === 'brand') {
				anime({
					targets: points.children[0],
					scale: 2
				})
				anime({
					targets: [points.children[1], points.children[2], points.children[3], points.children[4], points.children[5]],
					scale: 1,
				})
			}
			if (entry.target.id === 'what_we_do') {
				anime({
					targets: points.children[1],
					scale: 2
				})
				anime({
					targets: [points.children[0], points.children[2], points.children[3], points.children[4], points.children[5]],
					scale: 1,
				})
			}
			if (entry.target.id === 'trust') {

				anime({
					targets: points.children[2],
					scale: 2
				})
				anime({
					targets: [points.children[0], points.children[1], points.children[3], points.children[4], points.children[5]],
					scale: 1,
				})
			}
			if (entry.target.id === 'values') {
				anime({
					targets: points.children[3],
					scale: 2
				})
				anime({
					scale: 1,
					targets: [points.children[0], points.children[1], points.children[2], points.children[4], points.children[5]],
				})
			}
			if (entry.target.id === 'team') {
				anime({
					targets: points.children[4],
					scale: 2
				})
				anime({
					scale: 1,
					targets: [points.children[0], points.children[1], points.children[2], points.children[3], points.children[5]],
				})
			}
			if (entry.target.id === 'contact') {
				anime({
					targets: points.children[5],
					scale: 2
				})
				anime({
					scale: 1,
					targets: [points.children[0], points.children[1], points.children[2], points.children[3], points.children[4]],
				})
			}
		}
	})

}, { rootMargin: '-75px' });


scroller.observe(brand)
scroller.observe(what_we_do)
scroller.observe(trust)
scroller.observe(team)
scroller.observe(values)
scroller.observe(contact)


container.addEventListener('wheel', (part) => {
	if (part.deltaY > 0) navbar.style.visibility = "hidden"
	else navbar.style.visibility = "visible"
})
