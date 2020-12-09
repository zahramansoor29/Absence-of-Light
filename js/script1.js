let div = document.querySelector('div');

document.addEventListener('mousemove', function(event){

	// read more about the '(event)' object in 1mousemove's JS file
	let mouseX = Math.floor(event.pageX) - 1850; //1850 here represents the div's border (1800px border set in CSS) + half of the width of the div (100px / 2)
	let mouseY = Math.floor(event.pageY) - 1850;

	// move the position of the <div> to match the position of the mouse 
	div.style.top = mouseY + 'px';
	div.style.left = mouseX + 'px';
});


window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});