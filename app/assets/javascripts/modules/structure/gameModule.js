(function() {

  var gameModule = {
  	// Game data passed from character screen
    createGame: function(data) {
      var game = new Game(data);
		  
		  var pictureTemplate = Handlebars.compile($('#game-picture-template').html());
		  var characters = pictureTemplate(game.characters);
		  $('#game-pictures').html(characters);
		  
		  var counter = 0;
		  generateQuote(game.quotes[counter]);
		  analyzeQuote(game, counter);
		  

		  function analyzeQuote(game,counter) {
		  	$('.game-character-submit').on('click', function() {
		  		alert('hello')
		  	})
		  }


		  function generateQuote(gameQuote) {
		  	var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
			  var quote = quoteTemplate(gameQuote);
			  $('#game-quotes').html(quote);
		  }
		  
  	}
  }

  module.exports = gameModule

})()
