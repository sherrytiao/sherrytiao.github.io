(function() {
	$('.navbar-link').add('.navbar-brand').on('click', function(e) {
		e.preventDefault();
		$('html,body').stop().animate({scrollTop:$($(this).attr('href')).offset().top-50}, 500);
		$('.navbar-collapse').removeClass('in');
	});
})();
