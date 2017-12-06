
//media queries
const mq = window.matchMedia( '(max-width: 1000px)' );
// ------- About section
//section 2 - image
let about_s2_pic = document.getElementById('about_picture_1');

//event handler for media query
if(checkMedia) {
	mq.addListener(WidthChange);
	WidthChange(mq); 
}

function WidthChange(mq) {
	//if window is at lower than 1000px;
	if(mq.matches) {
		//hide picture
		about_s2_pic.style.visibility = 'hidden';
	}
}