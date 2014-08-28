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
				'background':'#1D6770',
			});
		}
		else if(direction == 'up') {
			
			$('header').css({
				'background':'#223659',
			});
		}
	});
	$('#contact').waypoint(function(direction){
		if(direction == 'down') {
			$('header').css({
				'background':'#F8823C',
			});
		}
		else if(direction == 'up') {
			
			$('header').css({
				'background':'#1D6770',
			});
		}
	});
});