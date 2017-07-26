(function() {

  var gameModule = {
    init: function() {
      this.cacheDom();
    },
    cacheDom: function() {
      this.$gameScreen = $('#game-screen');
      this.$gameQuotes = this.$gameScreen.find('#game-quotes');
      this.$gamePictures = this.$gameScreen.find('#game-pictures')
    },
    cacheHandlebars: function() {
      this.$gameCharacterSubmit = $('.game-character-submit');
    },
    bindEvents: function() {
      var originalThis = this;
      this.$gameCharacterSubmit.on("click", function(event) {
        originalThis.checkAnswer(event);
        originalThis.checkComplete();
      });
    },
    createGame: function(data) {
      this.game = new Game(data);
      this.playGame();
    },
    playGame: function() {
      this.counter = 0;
      this.renderCharacters(this.game.characters);
      this.renderQuote();
      // Items need to be cached after handlebars templates are rendered
      this.cacheHandlebars();
      this.bindEvents();       
    },
    checkAnswer: function(originalEvent) {
      debugger
      if ($(originalEvent.target).data('id') == this.game.quotes[this.counter].character_id) {
        alert('correct');
        this.game.state.push(true);
      } else {
        alert('incorrect');
        this.game.state.push(false);
      }
    },
    checkComplete: function() {
      this.counter++;

      if (this.counter < 10) {    
        // Continue Game
        this.renderQuote();
      } else {
        // End Game
        this.postCompletedGame();
      }
    },
    renderQuote: function() {
      var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
      var quote = quoteTemplate(this.game.quotes[this.counter]);
      this.$gameQuotes.html(quote);
    },
    renderCharacters: function(gameCharacters) {
      var image1path = $(`img[alt='${this.game.characters[0].name}']`).prop('src').replace(/^(?:\/\/|[^\/]+)*\//, "");
      var image2path = $(`img[alt='${this.game.characters[1].name}']`).prop('src').replace(/^(?:\/\/|[^\/]+)*\//, "");
      var pictureTemplate = Handlebars.compile($('#game-picture-template').html());
      var characters = pictureTemplate(gameCharacters);
      this.$gamePictures.html(characters);
      $('#selected-character-0').attr('src', image1path);
      $('#selected-character-1').attr('src', image2path);
    },
    postCompletedGame: function() {
      var url = "/games/save";

      var game_data = {
        id: this.game.id,
        state: this.game.state
      }

      $.ajax({
        type: "POST",
        url: url,
        data: game_data,
        success: function() {
          alert('working');
        }
      });
    }
  }

  gameModule.init();
  module.exports = gameModule

})()
