(function (){

	var welcome = {
		init: function() {
			this.cacheDom();
			this.onLoad();
      this.bindEvents();
		},
		cacheDom: function() {
			this.$welcome = $('#welcome');
      this.$playGame = this.$welcome.find('button');
      this.$characterSelect = $('#character-select');
		},
    bindEvents: function() {
      this.$playGame.on('click', this.swapWelcome.bind(this));
    },
    onLoad: function() {
    	// this.$characterSelect.hide().removeClass('.hide');
    },
    swapWelcome: function() {
      this.$welcome.fadeOut();
      this.$characterSelect.delay(400).fadeIn(300);
    }
	}
	welcome.init();
    
})()