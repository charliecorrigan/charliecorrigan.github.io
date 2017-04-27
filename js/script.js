$(document).ready(function(){
	$('.nav_button').mouseenter(function(){
		$(this).fadeTo('fast', 1);
	})
	
	$('.nav_button').mouseleave(function(){
		$(this).fadeTo('fast', 0.8);
	})
});

