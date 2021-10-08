AOS.init({
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});;

$('#menu_button').load('../pages/navbar/menu.html')
$('#navbar').load('../pages/navbar/navbar.html')
$('#brand').load('../pages/main/main.html')
$('#socialbar').load('../pages/socialbar/socialbar.html')
$('#what_we_do').load('../pages/what_we_do/what_we_do.html')
$('#what_we_do_mobile').load('../pages/what_we_do/what_we_do_mobile.html')
$('#trust').load('../pages/trust/trust.html')
$('#values').load('../pages/values/values.html')
$('#values_mobile').load('../pages/values/values_mobile.html')
$('#team').load('../pages/team/team.html')
$('#contact').load('../pages/contact/contact.html')
$('#verticaldots').load('../pages/vertical_dots/vertical_dots.html')
$('#footer').load('../pages/footer/footer.html')

AOS.refresh();


particlesJS.load('particles-js', './assets/particlesjs-config.json', function () {
	console.log('callback - particles.js config loaded');
});