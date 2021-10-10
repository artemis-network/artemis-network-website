// let timg = document.getElementById('team_avatar')
// let tname = document.getElementById('team_name')
// let tdesig = document.getElementById('team_designation')
// let tabout = document.getElementById('team_about')

// let tcard = document.getElementById('team_member')

// let tcurrentItem = 0;

// var tdata = [
// 	{
// 		img: "../assets/menu.svg",
// 		name: "name1",
// 		desig: "Desig1",
// 		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
// 	},
// 	{
// 		img: "../assets/facebook.svg",
// 		name: "name2",
// 		desig: "Desig2",
// 		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
// 	},
// 	{
// 		img: "../assets/instagram.svg",
// 		name: "name3",
// 		desig: "Desig3",
// 		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
// 	},
// 	{
// 		img: "../assets/menu.svg",
// 		name: "name4",
// 		desig: "Desig4",
// 		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
// 	},
// 	{
// 		img: "../assets/thunder.svg",
// 		name: "name5",
// 		desig: "Desig5",
// 		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam iste voluptatum a autem.Totam natus iste cumque sit."
// 	}
// ]

// function nextTeamPerson(item) {
// 	if (tcurrentItem <= 4 && tcurrentItem >= 0) {
// 		tcurrentItem += item
// 		if (tcurrentItem === 5)
// 			tcurrentItem = 0
// 		if (tcurrentItem === -1)
// 			tcurrentItem = 4
// 	}
// 	timg.src = tdata[tcurrentItem].img
// 	tabout.innerText = tdata[tcurrentItem].description
// 	tname.innerText = tdata[tcurrentItem].name
// 	tdesig.innerText = tdata[tcurrentItem].desig
// 	anime({ targets: tcard, opacity: [0, 1], duration: 1000 })
// }

const teamMobile = () => {
  return (
    <div class="team_mobile_ipad">
      <div class="m_sub_titles">Our Team</div>
      <div class="member" id="team_member">
        <div class="info">
          <div data-tilt class="avatar">
            {/* <img id="team_avatar" src="./assets/menu.svg" alt=""> */}
          </div>
          <div class="description">
            <div id="team_name" class="name">
              Name
            </div>
            <div id="team_designation" class="designation">
              Designation
            </div>
            <div id="team_about" class="about">
              {/* <img src="../../assets/facebook1.svg" alt="">
					<img src="../../assets/twitter.svg" alt="">
					<img src="../../assets/linkedin1.svg" alt=""> */}
            </div>
          </div>
        </div>
      </div>
      <div class="buttons_group">
        {/* <div onclick="nextTeamPerson(-1)"><img src="../../assets/left.svg" alt=""></div> */}
        {/* <div onclick="nextTeamPerson(+1)"><img src="../../assets/right.svg" alt=""></div> */}
      </div>
    </div>
  );
};

export default teamMobile;
