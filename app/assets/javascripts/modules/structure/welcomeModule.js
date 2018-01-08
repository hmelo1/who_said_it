(function() {

	var welcomeModule = {
		init: function() {
			this.cacheDom();
	    this.bindEvents();
		},
		cacheDom: function() {
			// Welcome Screen Assignments
			this.$welcomeScreen = $('#welcome-screen');
	    this.$playButton = this.$welcomeScreen.find('button');
			// Character Screen Assignment
	    this.$characterScreen = $('#character-screen');
		},
	  bindEvents: function() {
			// On Click, Hide Welcome Screen and Show Character Screen
	    this.$playButton.on('click', this.swapWelcome.bind(this));
	  },
	  unbindEvents: function() {
	  	this.$playButton.unbind();
	  },
	  swapWelcome: function() {
			// Hide Welcome Screen and Show Character Screen
	    this.$welcomeScreen.css('display', 'none');
	    this.$characterScreen.removeClass('hide');
	    // Unbind all events to avoid memory leaks
	    this.unbindEvents();
	  }
	}
	welcomeModule.init();

})()
