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
			text.style.opacity = "0.4";
		});

		// on mouse leave, hide the mouth-open img + the text + pause the audio
		section.addEventListener('mouseleave', function(){
			audio.pause();
			text.style.opacity = "0";
		});

	});

// hide overlay on click
	var overlay = document.querySelector('.overlay');
	overlay.addEventListener('click', function(){
		overlay.style.opacity = 0;
		overlay.style.pointerEvents = 'none';
	});
	
}

