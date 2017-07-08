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

	// Character Selection

	// Create a 'Selected/Active State for Clicked Cards'
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
			var selectedCharacters = $('.selected :input').serializeArray();
			var url = this.action + "?&authenticity_token=" + AUTH_TOKEN

			$.ajax({
				type: "POST",
				url: url,
				data: selectedCharacters,
				success: function() {
					debugger
				}
			});
			// $.ajax({
	    //   url: 'https://formspree.io/hello@steveafrost.com',
	    //   method: 'POST',
	    //   data: contactForm.serialize(),
	    //   dataType: 'json',
	    //   beforeSend: function() {
	    //     submitButton.attr('disabled', true).val('Sending message…');
	    //   },
	    //   success: function() {
	    //     $('#contact').html("<br><br><center><h3>We'll be in touch shortly!</h3></center>");
	    //     submitButton.prop('disabled', false).val(submitText);
	    //   },
	    //   error: function() {
	    //     alert('Dang, something went wrong! Please try again.');
	    //     submitButton.prop('disabled', false).val(submitText);
	    //   },
	    // });
		}
	})


});
