$(function(){
	$('a.nav-t').on('click', function(e){
		var $link = $(this);
		var anchor = $link.attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 500);
	});

	$('#about').waypoint(function(direction){
		if(direction == 'down') {
			$('header').css({
				'background':'#223659',
			});
		}
		else if(direction == 'up') {
			
			$('header').css({
				'background':'transparent',
			});
		}
	});
	$('#portfolio').waypoint(function(direction){
		if(direction == 'down') {
			$('header').css({
				'background':'#fff',
			});
			$('.nav-t h1').css({
				'color': '#333',
			});
		}
		else if(direction == 'up') {
			
			$('header').css({
				'background':'#223659',
			});
			$('.nav-t h1').css({
				'color': '#fff',
			});
		}
	});
	$('#contact').waypoint(function(direction){
		if(direction == 'down') {
			$('header').css({
				'background':'#F8823C',
			});
			$('.nav-t h1').css({
				'color': '#fff',
			});
		}
		else if(direction == 'up') {
			
			$('header').css({
				'background':'#fff',
			});
			$('.nav-t h1').css({
				'color': '#333',
			});
		}
	});
});