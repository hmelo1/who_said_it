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
			this.$difficultyDiv = $('#difficulty');
			this.$difficultyButtons = this.$difficultyDiv.find('button')
	    this.$flipcards = this.$characterScreen.find('.flipcard');
			this.$characterForm = this.$characterScreen.find('form');
			// Game Screen
			this.$gameScreen = $('#game-screen');
			// Modal
      this.$characterModal = $('.charactermodal');
			this.$characterModalMessage = this.$characterModal.find('#message');
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
			var clickedButton = $(event.target)

			if (!clickedButton.hasClass('active')) {
				this.$difficultyButtons.removeClass('active');
				this.$flipcards.removeClass('selected');
				clickedButton.addClass('active');
			}
		},
	  selectFlipCards: function() {
	  	var maxCharacters = $('#difficulty button.active').data('max-characters');

	  	if ($('.selected').length < maxCharacters) {
				$(this).toggleClass('selected');
			} else {
				$(this).removeClass('selected');
			}
	  },
		characterModalFn: function(message) {
			var originalThis = this;
			this.$characterModalMessage.text(message);
			this.$characterModal.css('display', 'block');
			setTimeout(function() {
				originalThis.$characterModal.fadeOut();
			}, 2000);
		},
	  postNewGame: function(event) {
	  	event.preventDefault();
	  	var originalThis = this;

			var difficultyLevel = this.$difficultyDiv.find('button.active').attr('id');
			var maxCharacters = this.$difficultyDiv.find('button.active').data('max-characters');
			var selectedCharNum = $('.selected').length;

	    if (selectedCharNum < requiredCharNum) {
				this.characterModalFn(`Please select ${requiredCharNum} characters`);
				return;
	    } else {
	      var AUTH_TOKEN = $("input[name='authenticity_token']").val();
	      var url = event.target.action


	      var object = {
	        'authenticity_token': AUTH_TOKEN,
					'difficulty': difficultyLevel,
	        'characters' : []
	      }

				var characterArray = $('.selected :input');
				for (i = 0; i < requiredCharNum; i++) {
					object.characters.push({'name': characterArray[i].name, 'id': characterArray[i].id})
				}

	      $.ajax({
	        type: "POST",
	        url: url,
	        data: object,
	        success: function(data) {
	        	// Character Screen Fade Out
	        	originalThis.$characterScreen.hide();
						// Show Game Screen
						originalThis.$gameScreen.removeClass('hide');
						// Pass Game to Game Module
	          gameModule.createGame(data);
	        }
	      });
	    }
	  }
	}
	characterModule.init();

})()
