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

  	  $('.game-character-submit').on("click", function(event){
        analyzeQuote(counter, game, event, this); 
      });
      // counter and game both accessible here
      function analyzeQuote(counter, game, originalEvent, originalThis) {
   			
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
