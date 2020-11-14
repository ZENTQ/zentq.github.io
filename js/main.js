// Header
var header = $('#header-bg'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	if ( scrolled > 300 && scrolled > scrollPrev ) {
		header.addClass('header--out');
	} else {
		header.removeClass('header--out');
	}

	scrollPrev = scrolled;

	if (scrollPrev < 450) {
		header.removeClass('header--active');
	} else {
		header.addClass('header--active');
	}
});

// Mobile Menu
$(document).ready(function(){
	$('#mobile-menu-btn').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass("fixedPosition");
		$('#nav-menu').toggleClass('show-mobile-menu');
	});
});

// Anchor
$("#nav-menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('.header--link').removeClass('active-link');
	$('body,html').animate({scrollTop: top}, 1500);
	$(document).on("mousewheel DOMMouseScroll", function(e) {
		if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			$('body,html').stop();
		} else { 
			$('body,html').stop();
		}
	});
	$('#mobile-menu-btn').toggleClass('open');
	$('#nav-menu').toggleClass('show-mobile-menu');
	$('body').removeClass("fixedPosition");
	this.parentNode.classList.add('active-link');
});