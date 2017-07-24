(function() {

  var gameModule = {
    cacheDom: function() {
	    this.$gameQuoteTemplate = $('#game-quote-template');
	    this.$gamePictureTemplate = $('#game-picture-template');
		},
    createGame: function(data) {
      var counter = 0;
      var game = new Game(data);
      this.cacheDom();
      this.generateQuote(game.quotes[counter]);
      this.generateCharacters(game.characters);

  	  $('.game-character-submit').click(scopeProblem);
      // counter and game both accessible here
      function scopeProblem() {
        // Uncaught ReferenceError: game is not defined
        // Uncaught ReferenceError: counter is not defined

        // The only thing that I can access here is the original object that I sent in the AJAX post request in the previous module
      }
    },
    generateQuote: function(gameQuote) {
      var quoteTemplate = Handlebars.compile(this.$gameQuoteTemplate.html());
      var quote = quoteTemplate(gameQuote);
      $('#game-quotes').html(quote);
    },
    generateCharacters: function(gameCharacters) {
      var pictureTemplate = Handlebars.compile(this.$gamePictureTemplate.html());
      var characters = pictureTemplate(gameCharacters);
      $('#game-pictures').html(characters);
    }
  }

  module.exports = gameModule

})()
