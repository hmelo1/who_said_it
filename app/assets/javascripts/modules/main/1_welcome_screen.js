var welcomeScreen = {
	init: function() {
		this.cacheDom();
		this.onLoad();
    this.bindEvents();
	},
	cacheDom: function() {
		this.$welcomeScreen = $('#welcome-screen');
    this.$playButton = this.$welcomeScreen.find('button');
    this.$characterScreen = $('#character-select');
	},
  bindEvents: function() {
    this.$playButton.on('click', this.swapWelcome.bind(this));
  },
  onLoad: function() {
  	// this.$characterScreen.hide().removeClass('.hide');
  },
  swapWelcome: function() {
    this.$welcomeScreen.fadeOut();
    this.$characterScreen.delay(400).fadeIn(300);
  }
}
welcomeScreen.init();