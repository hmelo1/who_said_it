(function() {

	const gameModule = require('./gameModule');

	var characterModule = {
		init: function() {
			this.cacheDom();
	    this.bindEvents();
		},
		cacheDom: function() {
	    this.$characterScreen = $('#character-screen');
	    this.$card = this.$characterScreen.find('.card');
			this.$characterForm = this.$characterScreen.find('form');
		},
	  bindEvents: function() {
	    this.$card.on('click', this.selectCards);
	    this.$characterForm.on('submit', this.postNewGame);
	  },
	  selectCards: function(event) {
	  	if ($('.selected').length < 2) {
				$(this).toggleClass('selected');
			} else {
				$(this).removeClass('selected');
			}
	  },
	  postNewGame: function(event) {
	  	event.preventDefault();
	    if ($('.selected').length < 2) {
	      alert('Please select 2 characters');
	    } else {
	      var AUTH_TOKEN = $("input[name='authenticity_token']").val();
	      var url = this.action
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
	          gameModule.createGame(data);
	        }
	      });
	    }
	  }
	}
	characterModule.init();

})()
