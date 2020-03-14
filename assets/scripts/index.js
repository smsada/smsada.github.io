// function show() {
//     document.getElementsByClassName("sections-op").classList.add("hidden");
// }
// // function showOpt() {
// //     hide("sections");
// // }
// document.getElementsByClassName("pulsating-circle").onclick = show;


function showFloat(sectionID) {
	document.getElementById(sectionID).classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var classes = document.getElementsByClassName('section-op');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < classes.length; i++) {
		// get id of this particular .lightbox div
		var id = classes[i].class;
		// call closeLightbox for this id
		showFloat(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementsByClassName("circle").onclick = closeAllLightboxes;