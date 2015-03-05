$(document).ready(function() {

	var feed = new Instafeed({
			get: 'tagged',
			tagName: 'echocanyonHTZ',
			clientId: 'ad19ab7ad8e940a5a8ee3775ac7553ff',
			template: '<img src={{image}}>'
		});
	feed.run();

	//================================================================
	// Header
	//================================================================

	$('.options.browse').on('click', function() {
		if (top.location.pathname === '/') {
			$("html, body").animate({ scrollTop: 715 }, "slow");
		} else {
			window.location.href = "/Mountains";
		}
	});

	//================================================================
	// Featured
	//================================================================

	$('.featured span').on('click', function(){
		$('.focus').removeClass('focus');
		$(this).addClass('focus');
	});

	//================================================================
	// Browse Homepage
	//================================================================

	$('.tagline span').on('click', function(){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		if ($(this).text() == 'Search') {
			$('.search').removeClass('displayNone');
			$('.tiles').addClass('displayNone');
		} else {
			$('.search').addClass('displayNone');
			$('.tiles').removeClass('displayNone');
		}
	});


});