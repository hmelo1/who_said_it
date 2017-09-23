(function() {

	const gameModule = require('./gameModule');

	var characterModule = {
		init: function() {
			this.cacheDom();
	    this.bindEvents();
		},
		cacheDom: function() {
			// Character Screen
	    this.$characterScreen = $('#character-screen');
			this.$difficultyButtons = $('#difficulty-level button');
	    this.$flipcards = this.$characterScreen.find('.flipcard');
			this.$characterForm = this.$characterScreen.find('form');
		},
	  bindEvents: function() {
	  	var originalThis = this;
			this.$difficultyButtons.on('click', this.activateDifficulty.bind(this));
	    this.$flipcards.on('click', this.selectFlipCards);
	    this.$characterForm.on('submit', function(event) {
	    	originalThis.postNewGame(event);
	    })
	  },
		activateDifficulty: function(event) {
			var originalThis = this;
			if (!$(event.target).hasClass('active')) {
				originalThis.$difficultyButtons.removeClass('active');
				originalThis.$flipcards.removeClass('selected');
				$(event.target).addClass('active');
			}
		},
	  selectFlipCards: function() {
	  	var max = $('#difficulty-level button.active').data('max-characters');

	  	if ($('.selected').length < max) {
				$(this).toggleClass('selected');
			} else {
				$(this).removeClass('selected');
			}
	  },
	  postNewGame: function(event) {
	  	event.preventDefault();

	  	var originalThis = this;

			var requiredCharacters = $('#difficulty-level button.active').data('max-characters');
			var selectedCharacters = $('.selected').length;

	    if (selectedCharacters < requiredCharacters) {
	      alert(`Please select ${requiredCharacters} characters`);
				return;
	    } else {
	      var AUTH_TOKEN = $("input[name='authenticity_token']").val();
	      var url = event.target.action

	      var character1 = $('.selected :input')[0];
	      var character2 = $('.selected :input')[1];
				var characterArray = [character1, character2]

				if ($('.selected :input')[2]) {
					var character3 = $('.selected :input')[2];
					characterArray.push(character3);
				}
				if ($('.selected :input')[3]) {
					var character4 = $('.selected :input')[3];
					characterArray.push(character4);
				}

	      var object = {
	        'authenticity_token': AUTH_TOKEN,
	        'characters' : []
	      }

				for (i = 0; i < requiredCharacters; i++) {
					object.characters.push({'name': characterArray[i].name, 'id': characterArray[i].id})
				}

	      $.ajax({
	        type: "POST",
	        url: url,
	        data: object,
	        success: function(data) {
	        	// Character Screen Fade Out
	        	originalThis.$characterScreen.hide();
						// Pass Game to Game Module
	          gameModule.createGame(data);
	        }
	      });
	    }
	  }
	}
	characterModule.init();

})()
