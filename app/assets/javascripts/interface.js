$(function() {
	$welcome_div = $('#welcome');
	$character_select_div = $('#character-select');

	// Hide Character Selection
	// $character_select_div.hide().removeClass('hide');

  // Play Game (Click to Start Game) -- Section #1
	$('#play-game').click(function() {
		$welcome_div.fadeOut();
		$character_select_div.delay(400).fadeIn(300);
	})

	// Character Selection -- Section #2

	// Create a 'Selected/Active State for Clicked Cards
	$('.card').click(function() {
		if ($('.selected').length < 2) {
			$(this).toggleClass('selected');
		} else {
			$(this).removeClass('selected');
		}
	})

	// AJAX Post to create new game
	$('#create-game').submit(function(event) {
		event.preventDefault();

		if ($('.selected').length < 2) {
			alert('Please select 2 characters');
		} else {
			var AUTH_TOKEN = $("input[name='authenticity_token']").val();
			var url = this.action
			 // + "?&authenticity_token=" + AUTH_TOKEN
			var character1 = $('.selected :input')[0];
			var character2 = $('.selected :input')[1];
			var characters = $('.selected :input').serializeArray();

			data = {
				'authenticity_token': AUTH_TOKEN,
				'characters' : [
				{
					'name': character1.name,
					'id': character1.id
				},
				{
					'name': character2.name,
					'id': character2.id
				}]
			}

			$.ajax({
				type: "POST",
				url: url,
				data: data,
				success: function(response) {
					debugger
				}
			});
		}
	})


});
