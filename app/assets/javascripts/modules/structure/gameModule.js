(function() {

  var gameModule = {
    createGame: function(data) {
      var game = new Game(data);
      this.playGame(game);
    },
    playGame: function(game) {
      var counter = 0;

      generateCharacters(game.characters);
      firstQuote(game.quotes[counter]);

      $('.game-character-submit').on("click", function(){
        analyzeQuote(this);
        newQuote();
        checkGameOver();
      });
      
      function analyzeQuote(originalThis) {
        if (counter < 10) {
          if ($(originalThis).data('id') == game.quotes[counter].character_id) {
            alert('correct');
            game.state.push(true);
          } else {
            alert('incorrect');
            game.state.push(false);
          }
          counter++;
        }
      } 

      function newQuote() {
        if (counter < 10) {
          var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
          var quote = quoteTemplate(game.quotes[counter]);
          $('#game-quotes').html(quote);
        }
      } 

      function checkGameOver() {
        debugger
      }

      function firstQuote(gameQuote) {
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
