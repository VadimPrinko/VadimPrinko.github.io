$(document).ready(function(){
	var link = $(".menu");
	var linkActive = $(".menuActive");
	var	menu = $(".mainMenu");
	var nav_link = $(".mainMenu a");
	
	link.click(function(){
		link.toggleClass("menuActive");
		menu.toggleClass("mainMenuActive");
	});
	nav_link.click(function(){
		link.toggleClass("menuActive");
		menu.toggleClass("mainMenuActive");	
	});
	
});

$(document).ready(function(){

	setTimeout(function(){
		$("body").addClass("loaded");
	}, 100);
	
});

var $animOfY = $('.animOfY');

$animOfY.waypoint(function(direction){
	if(direction == 'down') {
	$animOfY.addClass('animated flipInY');
	} else{
	$animOfY.removeClass('animated flipInY');
	}
}, {offset: '100%'});


var $anim1Block1 = $('.anim1Block1');

$anim1Block1.waypoint(function(direction){
	if(direction == 'down') {
	$anim1Block1.addClass('animated fadeInLeftBig');
	} else{
	$anim1Block1.removeClass('animated fadeInLeftBig');
	}
}, {offset: '99%'});


var $anim2Block1 = $('.anim2Block1');

$anim2Block1.waypoint(function(direction){
	if(direction == 'down') {
	$anim2Block1.addClass('animated fadeInRightBig');
	} else{
	$anim2Block1.removeClass('animated fadeInRightBig');
	}
}, {offset: '99%'});


var $anim1Block3 = $('.anim1Block3');

$anim1Block3.waypoint(function(direction){
	if(direction == 'down') {
	$anim1Block3.addClass('animated fadeInLeftBig');
	} else{
	$anim1Block3.removeClass('animated fadeInLeftBig');
	}
}, {offset: '99%'});


var $anim2Block3 = $('.anim2Block3');

$anim2Block3.waypoint(function(direction){
	if(direction == 'down') {
	$anim2Block3.addClass('animated fadeInRightBig');
	} else{
	$anim2Block3.removeClass('animated fadeInRightBig');
	}
}, {offset: '99%'});


var $anim1Block2 = $('.anim1Block2');

$anim1Block2.waypoint(function(direction){
	if(direction == 'down') {
	$anim1Block2.addClass('animated fadeInRightBig');
	} else{
	$anim1Block2.removeClass('animated fadeInRightBig');
	}
}, {offset: '99%'});


var $anim2Block2 = $('.anim2Block2');

$anim2Block2.waypoint(function(direction){
	if(direction == 'down') {
	$anim2Block2.addClass('animated fadeInLeftBig');
	} else{
	$anim2Block2.removeClass('animated fadeInLeftBig');
	}
}, {offset: '99%'});


var $anim1Block4 = $('.anim1Block4');

$anim1Block4.waypoint(function(direction){
	if(direction == 'down') {
	$anim1Block4.addClass('animated fadeInRightBig');
	} else{
	$anim1Block4.removeClass('animated fadeInRightBig');
	}
}, {offset: '99%'});


var $anim2Block4 = $('.anim2Block4');

$anim2Block4.waypoint(function(direction){
	if(direction == 'down') {
	$anim2Block4.addClass('animated fadeInLeftBig');
	} else{
	$anim2Block4.removeClass('animated fadeInLeftBig');
	}
}, {offset: '99%'});



$('body').append('<button class="btnUp" />');

$('.btnUp').click(function(){
	$('body').animate({'scrollTop': 0}, 1000);
});

	$(window).scroll(function(){
	if($(window).scrollTop() > 200){
	$('.btnUp').addClass('active');
	}
	else{
		$('.btnUp').removeClass('active');
	}
});

