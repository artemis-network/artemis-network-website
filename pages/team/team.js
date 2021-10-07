let timg = document.getElementById('team_avatar')
let tname = document.getElementById('team_name')
let tdesig = document.getElementById('team_designation')
let tabout = document.getElementById('team_about')

let tcard = document.getElementById('team_member')

let tcurrentItem = 0;

var tdata = [
	{
		img: "../assets/menu.svg",
		name: "name1",
		desig: "Desig1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/facebook.svg",
		name: "name2",
		desig: "Desig2",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/instagram.svg",
		name: "name3",
		desig: "Desig3",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/menu.svg",
		name: "name4",
		desig: "Desig4",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	},
	{
		img: "../assets/thunder.svg",
		name: "name5",
		desig: "Desig5",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
	}
]

function nextTeamPerson(item) {
	if (tcurrentItem <= 4 && tcurrentItem >= 0) {
		tcurrentItem += item
		if (tcurrentItem === 5)
			tcurrentItem = 0
		if (tcurrentItem === -1)
			tcurrentItem = 4
	}
	timg.src = tdata[tcurrentItem].img
	tabout.innerText = tdata[tcurrentItem].description
	tname.innerText = tdata[tcurrentItem].name
	tdesig.innerText = tdata[tcurrentItem].desig
	anime({ targets: tcard, opacity: [0, 1], duration: 1000 })
}