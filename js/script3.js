// check if page is fully loaded
window.onload = function() {


	// get all sections. This will create a list of all the sections found in HTML, you can use console.log(sections); to check how that looks like in your browser's console
	var sections = document.querySelectorAll('section');

	// loop through each section
	sections.forEach(function(section){ // 'section' here is called an 'argument', it represents the current section the loop is dealing with

		// List of all the variables we'll need 
		var sectionId = section.id; // current section id
		var audio = document.getElementById('audio-' + sectionId); // get corresponding audio by concatenation audio- and the section id (example: audio-one)

		// on mouse enter, show the mouth-open img + play the audio
		section.addEventListener('mouseenter', function(){
			audio.play();
		});

		// on mouse leave, hide the mouth-open img + the text + pause the audio
		section.addEventListener('mouseleave', function(){
			audio.pause();
		});

	});

}


