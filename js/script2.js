// check if page is fully loaded
window.onload = function() {


	// get all sections. This will create a list of all the sections found in HTML, you can use console.log(sections); to check how that looks like in your browser's console
	var sections = document.querySelectorAll('section');

	// loop through each section
	sections.forEach(function(section){ // 'section' here is called an 'argument', it represents the current section the loop is dealing with

		// List of all the variables we'll need 
		var sectionId = section.id; // current section id
		var audio = document.getElementById('audio-' + sectionId); // get corresponding audio by concatenation audio- and the section id (example: audio-one)
		var text = section.querySelector('p');

		// on mouse enter, show the mouth-open img + play the audio
		section.addEventListener('mouseenter', function(){
			audio.play();
		text.style.opacity = "0.3";
		});

		// on mouse leave, hide the mouth-open img + the text + pause the audio
		section.addEventListener('mouseleave', function(){
			audio.pause();
		text.style.opacity = "0";
		});

	});

let div = document.querySelector('div');

document.addEventListener('mousemove', function(event){

	let mouseX = Math.floor(event.pageX); // get position of mouse on the X axis (read more about this in 1mousemove's JS file)
	let width = window.innerWidth; // get width of the window
	let mid = Math.floor(mouseX * 100 / width + 1); // get position of mouse on the X axis on a range of 0 to 100 (we will assign this value to the color in the middle of the gradient for it to follow the mouse)
	let firstQuarter = Math.floor(mid / 2); // first color
	let thirdQuarter = Math.floor(50 + (mid / 2)); // third color

	// output the various values to the linear-gradient
	div.style.background = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) '+firstQuarter+'%, rgba(10,10,10,1) '+mid+'%, rgba(200,200,200,1) '+thirdQuarter+'%, rgba(10,10,10,1) 100%)';

});

}


