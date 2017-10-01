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
      this.$alertModal = $('.alertmodal');
			this.$alertModalError = this.$alertModal.find('#error');
			this.$alertModalDifficulty = this.$alertModal.find('#mode');
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
	  	var max = $('#difficulty button.active').data('max-characters');

	  	if ($('.selected').length < max) {
				$(this).toggleClass('selected');
			} else {
				$(this).removeClass('selected');
			}
	  },
		alertModalFn: function(message) {
			var originalThis = this;
			this.$alertModalError.text(message);
			this.$alertModal.css('display', 'block');
			setTimeout(function() {
				originalThis.$alertModal.fadeOut();
			}, 2000);
		},
	  postNewGame: function(event) {
	  	event.preventDefault();
	  	var originalThis = this;

			var difficultyLevel = this.$difficultyDiv.find('button.active').attr('id');
			var requiredCharNum = this.$difficultyDiv.find('button.active').data('max-characters');
			var selectedCharNum = $('.selected').length;

	    if (selectedCharNum < requiredCharNum) {
				this.alertModalFn(`Please select ${requiredCharNum} characters`);
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

						// Pass Game to Game Module
	          gameModule.createGame(data);
	        }
	      });
	    }
	  }
	}
	characterModule.init();

})()
