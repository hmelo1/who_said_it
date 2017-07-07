$(function() {
	$welcome_div = $('#welcome');
	$character_select_div = $('#character-select');

	// Hide Character Selection
	$character_select_div.hide().removeClass('hide');
    
  // Play Game (Click to Start Game) -- Section #1  
	$('#play-game').click(function() {
		$welcome_div.fadeOut();
		$character_select_div.delay(400).fadeIn(300);
	})

	// Character Selection
	$('.card').click(function() {
		var $active = $('.active')
		
		if ($active.length < 2) {
			$(this).toggleClass('active');
		} else {
			$(this).removeClass('active');
		}
	})



});