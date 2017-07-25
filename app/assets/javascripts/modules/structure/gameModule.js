(function() {

  var gameModule = {
    createGame: function(data) {
      var game = new Game(data);
      this.playGame(game);
    },
    playGame: function(game) {
      var counter = 0;

      generateCharacters(game.characters);
      renderNewQuote();

      $('.game-character-submit').on("click", function(){
        analyzeQuote(this);
        checkGameOver();
      });

      function checkGameOver() {
        counter++;
        if (counter >= 10) {
          postCompletedGame();
        } else {
          renderNewQuote();
        }
      }
      
      function analyzeQuote(originalThis) {
        if ($(originalThis).data('id') == game.quotes[counter].character_id) {
          alert('correct');
          game.state.push(true);
        } else {
          alert('incorrect');
          game.state.push(false);
        }
      } 

      function renderNewQuote() {
        var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
        var quote = quoteTemplate(game.quotes[counter]);
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
