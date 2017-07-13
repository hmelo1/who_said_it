(function (){

		var interface = {
			init: function() {
				this.cacheDom();
        this.bindEvents();
			},
			cacheDom: function() {
				this.$welcome = $('#welcome');
        this.$playGame = this.$welcome.find('button')
        this.$characterSelect = $('#character-select');
        this.$card = this.$characterSelect.find('card')
				this.$createGameForm = this.$characterSelect.find('form');
				this.$selected = this.$characterSelect.find('.selected');
			},
      bindEvents: function() {
        this.$playGame.on('click', this.swapWelcome.bind(this));
      },
      swapWelcome: function() {
        this.$welcome.fadeOut();
        this.$characterSelect.delay(400).fadeIn(300);
      }
		}
		interface.init();
})()
