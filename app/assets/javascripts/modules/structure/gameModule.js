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
        checkGameOver();
      });

      function checkGameOver() {
        counter++;
        console.log(counter)
        if (counter >= 10) {
          debugger
        } else {
          newQuote();
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

      function newQuote() {
        var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
        var quote = quoteTemplate(game.quotes[counter]);
        $('#game-quotes').html(quote);
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
