// var menu_item = document.getElementById('menu')
// var menu_button = document.getElementById('menu_button')
// var menu_img = document.getElementById('menu_img')

// var toggle = false

// function menuToggle() {
// 	toggle = !toggle
// 	if (toggle) {
// 		menu_item.style.visibility = 'visible'
// 		menu_item.style.transform = 'translateX(0)'
// 		anime({
// 			targets: menu_img,
// 			scale: [1, 1.05, 1]
// 		})
// 		menu_img.src = '../../assets/close.svg'
// 	} else {
// 		menu_item.style.visibility = 'hidden'
// 		menu_item.style.transform = 'translateX(-40rem)'
// 		anime({
// 			targets: menu_img,
// 			scale: [1, 1.05, 1]
// 		})
// 		menu_img.src = '../../assets/menu.svg'
// 	}
// }

// function bounce(event) {
// 	if (event.target.innerText === 'Home') {
// 		document.getElementById('brand').scrollIntoView()
// 		menuToggle()
// 	}
// 	if (event.target.innerText === 'What We Do') {
// 		document.getElementById('what_we_do_mobile').scrollIntoView()
// 		menuToggle()
// 	}
// 	if (event.target.innerText === 'Our Team') {
// 		document.getElementById('team').scrollIntoView()
// 		menuToggle()
// 	}
// 	if (event.target.innerText === 'Core Values') {
// 		document.getElementById('values_mobile').scrollIntoView()
// 		menuToggle()
// 	}
// 	if (event.target.innerText === 'Contact Us') {
// 		document.getElementById('contact').scrollIntoView()
// 		menuToggle()
// 	}
// }

import "./menu.css";

const menuComponent = () => {
  return (
    <div>
      <div id="menu_button" className="menu_button">
        <img id="menu_img" src="../../assets/menu.svg" alt="" />
      </div>

      <div id="menu">
        <ul>
          <li>Home</li>
          <li>What We Do</li>
          <li>Core Values</li>
          <li>Our Team</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default menuComponent;
