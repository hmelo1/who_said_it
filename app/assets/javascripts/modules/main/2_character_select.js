(function (){

	var characterSelect = {
		init: function() {
			this.cacheDom();
      this.bindEvents();
		},
		cacheDom: function() {
      this.$characterSelect = $('#character-select');
      this.$card = this.$characterSelect.find('.card');
			this.$characterForm = this.$characterSelect.find('form');
		},
    bindEvents: function() {
      this.$card.on('click', this.selectCards);
      this.$characterForm.on('submit', this.createGame);
    },
    selectCards: function(event) {
    	if ($('.selected').length < 2) {
				$(this).toggleClass('selected');
			} else {
				$(this).removeClass('selected');
			}
    },
    createGame: function(event) {
    	event.preventDefault();
      if ($('.selected').length < 2) {
        alert('Please select 2 characters');
      } else {
        var AUTH_TOKEN = $("input[name='authenticity_token']").val();
        var url = this.action
        var character1 = $('.selected :input')[0];
        var character2 = $('.selected :input')[1];

        data = {
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
          data: data,
          success: function(response) {
            debugger;
          }
        });
      }
    }
	}
	characterSelect.init();
  
})()