 "use strict";
											/* VARIABLES */
var preloaderHider = $('.preloaderHider'),
	timeoutID,
	preloaderWrapper = $('.preloaderWrapper');

											/* PRELOADER WRAPPER */

window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false); 
	preloaderHider.transition({ x: 300 }, 10, 'easeOutQuad');
	delayedStart();
	console.log('ONLOAD EVENT FIRES'); 
},false);

function delayedStart() {
	// some function here
	timeoutID = window.setTimeout(startApplication, 500);
	console.log('DELAYED START 3000MS DONE');
}
function startApplication () {
	preloaderHider.transition({ x: 0 }, 1500, 'easeOutQuad');
	setTimeout(function() {
		preloaderKill();
	}, 1000);
	console.log('APP FIRES');
};

var preloaderKill = function(){
	preloaderWrapper.transition({ opacity: 0 }, 3000, 'easeOutQuad');
	setTimeout(function() {
		preloaderWrapper.css({'display': 'none'});
	}, 3500);
};
