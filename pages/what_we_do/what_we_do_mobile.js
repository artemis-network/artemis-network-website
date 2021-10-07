let img = document.getElementById('img_car')
let title = document.getElementById('title_car')
let card = document.getElementById('what_we_do_mobile_ipad_grid')
let currentItem = 0;

var sdata = [
	{
		img: "../assets/menu.svg",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/facebook.svg",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/instagram.svg",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/menu.svg",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/thunder.svg",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	}
]

function next(item) {
	if (currentItem <= 4 && currentItem >= 0) {
		currentItem += item
		if (currentItem === 5)
			currentItem = 0
		if (currentItem === -1)
			currentItem = 4
	}
	img.src = sdata[currentItem].img
	title.innerText = sdata[currentItem].title
	anime({ targets: card, opacity: [0, 1], duration: 1000 })
}

gsap.registerPlugin(ScrollTrigger);