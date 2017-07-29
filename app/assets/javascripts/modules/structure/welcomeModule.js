(function() {

	var welcomeModule = {
		init: function() {
			this.cacheDom();
			this.onLoad();
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
	  onLoad: function() {
			// Hide Character Screen on Load
	  	// this.$characterScreen.hide().removeClass('.hide');
	  },
	  swapWelcome: function() {
			// Hide Welcome Screen and Show Character Screen
	    this.$welcomeScreen.fadeOut();
	    this.$characterScreen.delay(400).fadeIn(300);
	  }
	}
	welcomeModule.init();

})()
