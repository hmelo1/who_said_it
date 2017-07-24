(function() {

  var gameModule = {
    createGame: function(data) {
      var game = new Game(data);
      this.playGame(game);
    },
    playGame: function(game) {
      var counter = 0;
      if (counter == 0) {
        generateQuote(game.quotes[counter]);
      }
      generateCharacters(game.characters);

      $('.game-character-submit').on("click", function(event){
        analyzeQuote(counter, game, event, this);
        // How can I access generateQuote here, getting Uncaught ReferenceError
      });
      
      function analyzeQuote(counter, game, originalEvent, originalThis) { 
        if ($(originalThis).data('id') == game.quotes[counter].character_id) {
          alert('correct');
          game.state.push(true);
        } else {
          alert('incorrect');
          game.state.push(false);
        }
        counter++

      }

      function generateQuote(gameQuote) {
        var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
        var quote = quoteTemplate(gameQuote);
        $('#game-quotes').html(quote);
      } 

      function generateCharacters(gameCharacters) {
        var pictureTemplate = Handlebars.compile($('#game-picture-template').html());
        var characters = pictureTemplate(gameCharacters);
        $('#game-pictures').html(characters);
      }
    }
  }

  module.exports = gameModule

})()
