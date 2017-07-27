(function() {

	const gameModule = require('./gameModule');

	var characterModule = {
		init: function() {
			this.cacheDom();
	    this.bindEvents();
		},
		cacheDom: function() {
	    this.$characterScreen = $('#character-screen');
	    this.$flipcard = this.$characterScreen.find('.flipcard');
			this.$characterForm = this.$characterScreen.find('form');
		},
	  bindEvents: function() {
	  	var originalThis = this;
	    this.$flipcard.on('click', this.selectFlipCards);
	    this.$characterForm.on('submit', function(event) {
	    	originalThis.postNewGame(event);
	    })
	  },
	  selectFlipCards: function(event) {
	  	if ($('.selected').length < 2) {
				$(this).toggleClass('selected');
			} else {
				$(this).removeClass('selected');
			}
	  },
	  postNewGame: function(event) {
	  	event.preventDefault();

	  	var originalThis = this;
	    if ($('.selected').length < 2) {
	      alert('Please select 2 characters');
	    } else {
	      var AUTH_TOKEN = $("input[name='authenticity_token']").val();
	      var url = event.target.action
	      var character1 = $('.selected :input')[0];
	      var character2 = $('.selected :input')[1];

	      var object = {
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
	        data: object,
	        success: function(data) {
	        	// Character Screen Fade Out
	        	// originalThis.$characterScreen.fadeOut();
	          gameModule.createGame(data);
	        }
	      });
	    }
	  }
	}
	characterModule.init();

})()
