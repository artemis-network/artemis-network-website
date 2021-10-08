function input(event) {
	event.target.innerText = ''
	anime({
		targets: event.target,
		scale: [1.05, 1],
		color: '#1f2421',
		duration: 1000,
		backgroundColor: ['#F2EFF8', "#ffffff"]
	});
}

function submit(event) {
	event.preventDefault()
	anime({
		targets: event.target,
		scale: [1.05, 1],
		backgroundColor: ['#F2EFF8', "#ffffff"],
		duration: 1000,
		color: '#1f2421',
	});


	var inputs = document.getElementsByTagName('input')
	var textArea = document.getElementsByTagName('textarea')

	textArea[0].value = null
	event.target.innerText = 'Submitted'

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].style.backgroundColor = '#e0e0e0'
		inputs[i].value = null
	}

	event.target.style.color = 'var(--primary-font-color)'
	setTimeout(() => {
		event.target.innerText = "Submit"
	}, 3000)
}

const svg = d3.select("svg"),
	width = +svg.attr("width"),
	height = +svg.attr("height");

// Map and projection
const projection = d3.geoNaturalEarth1()
	.scale(width / 1 / Math.PI)
	.translate([width / 8, height / 2])


const markers = [

	[100.8313415527344, 6.26675774823251],
	[74.044751321368, 16.519503282141534]
]
// Load external data and boot
d3.json("../../assets/custom.geo.json").then(function (data) {

	// Draw the map
	svg.append("g")
		.selectAll("path")
		.data(data.features)
		.join("path")
		.attr("fill", "#f0ecf8")
		.attr("d", d3.geoPath()
			.projection(projection)
		)
		.style("stroke", "#A4A1BE");

	svg.append("g")
		.selectAll("g")
		.data(markers)
		.enter()
		.append("image")
		.attr("width", 32)
		.attr("height", 32)
		.attr(
			"xlink:href",
			"../../assets/location.png"
		)
		.attr("transform", function (d) {
			return "translate(" + projection(d) + ")";
		})


})

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".vpanel").forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start: "top top",
		pin: true,
		pinSpacing: false
	});
});