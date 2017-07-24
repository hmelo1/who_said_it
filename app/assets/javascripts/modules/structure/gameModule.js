(function() {

  var gameModule = {

    createGame: function(data) {
      var game = new Game(data);
		   
		  var counter = 0;
		  generateCharacters(game.characters);
		  generateQuote(game.quotes[counter]);

		  // $('.game-character-submit').click(function() {
		  // 	debugger
		  // })

	  	function generateCharacters(gameCharacters) {
		  	var pictureTemplate = Handlebars.compile($('#game-picture-template').html());
			  var characters = pictureTemplate(gameCharacters);
			  $('#game-pictures').html(characters);
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
