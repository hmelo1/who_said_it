(function() {

  var gameModule = {
  	// Game data passed from character screen
    createGame: function(data) {
      var game = new Game(data);
		  var pictureTemplate = Handlebars.compile($('#game-picture-template').html());
		  var characters = pictureTemplate(game.characters);
		  $('#game-pictures').html(characters);
		  var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
		  var quotes = quoteTemplate(game.quotes);
		  $('#game-quotes').html(quotes);
  	}
  }

  module.exports = gameModule

})()
