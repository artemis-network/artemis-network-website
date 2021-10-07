let vimg = document.getElementById('value_img')
let vtitle = document.getElementById('value_title')
let vcard = document.getElementById('values_mobile_ipad_grid')
const teamV = document.querySelector('#team')

let vcurrentItem = 0;

var vdata = [
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

function Vnext(item) {
	if (vcurrentItem <= 4 && vcurrentItem >= 0) {
		vcurrentItem += item
		if (vcurrentItem === 5)
			vcurrentItem = 0
		if (vcurrentItem === -1)
			vcurrentItem = 4
	}
	vimg.src = vdata[vcurrentItem].img
	vtitle.innerText = vdata[vcurrentItem].title
	anime({ targets: vcard, opacity: [0, 1], duration: 1000 })
}

