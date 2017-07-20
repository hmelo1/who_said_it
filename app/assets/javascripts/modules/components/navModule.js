(function() {
	var navModule = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
		},
		cacheDom: function() {
			this.$hamburger = $('#hamburger');
		},
		bindEvents: function() {
			this.$hamburger.on('click', this.toggleOpen.bind(this));
		},
		toggleOpen: function() {
			this.$hamburger.toggleClass('open');
		}
	}

	navModule.init();

})()
