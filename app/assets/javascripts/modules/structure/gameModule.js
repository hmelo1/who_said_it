(function() {

  const postGameModule = require('./postGameModule');

  var gameModule = {
    init: function() {
      this.cacheDom();
    },
    cacheDom: function() {
      // Game Screen
      this.$gameScreen = $('#game-screen');
      this.$gameQuotes = this.$gameScreen.find('#game-quotes');
      this.$gamePictures = this.$gameScreen.find('#game-pictures');
      // Modal
      this.$gameModal = $('.gamemodal');
      this.$gameModalEvaluate = this.$gameModal.find('#evaluate');
      this.$gameModalCorrectAnswer = this.$gameModal.find('#correct-answer');
      this.$rightArrow = this.$gameModal.find('#right-arrow')
    },
    cacheHandlebars: function() {
      this.$gameCard = $('.gamecard');
    },
    bindEvents: function() {
      var originalThis = this;
      this.$gameCard.on('click', function(event) {
        originalThis.checkAnswer(event);
      });
      // Important Event -- Check Complete Function Runs Here
      this.$rightArrow.on('click', this.hideGameModal.bind(this))
    },
    unbindEvents: function() {
      this.$gameCard.unbind();
      this.$rightArrow.unbind();
    },
    createGame: function(data) {
      this.game = new Game(data);
      this.playGame();
    },
    playGame: function() {
      // Game Functions

      // Start Counter at 0
      this.counter = 0;
      // Render Characters and First Quote
      this.renderCharacters(this.game.characters);
      this.renderQuote();
      // Items need to be cached after handlebars templates are rendered
      this.cacheHandlebars();
      // New Quotes Render onClick of GameCards
      this.bindEvents();
    },
    checkAnswer: function(originalEvent) {
      // Variables to Check Character ID/NAME of Clicked Card and Character Who Said Quote
      var clickedCardId = $(originalEvent.target).parents('.gamecard').data('id');
      var clickedCardName = $(originalEvent.target).parents('.gamecard').data('name');
      var answerCharacterId = this.game.quotes[this.counter].character_id;
      var answerCharacterName = this.game.quotes[this.counter].character_name;

      if (clickedCardId == answerCharacterId) {
        // Correct Answer
        this.showGameModal('Correct!', answerCharacterName);
        this.game.state.push(true);
      } else {
        // Incorrect Answer
        this.showGameModal('Wrong!', answerCharacterName);
        this.game.state.push(false);
      }
    },
    // This function Should Run After Modal is Escaped
    checkComplete: function() {
      this.counter++;

      if (this.counter < 10) {
        // If Game Continues -- Render Quote
        this.renderQuote();
      } else {
        // Else -- End Game and Save to Database
        this.saveCompletedGame();
      }
    },
    renderQuote: function() {
      var originalThis = this;
      // Register Helper for Counter
      Handlebars.registerHelper("counter", function () {
        return originalThis.counter + 1;
      })
      // Render Handlebars Quote Template
      var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
      var quote = quoteTemplate(this.game.quotes[this.counter]);
      this.$gameQuotes.html(quote);
    },
    renderCharacters: function(gameCharacters) {
      // Render Handlebars Characters Template
      var pictureTemplate = Handlebars.compile($('#game-picture-template').html());
      var characters = pictureTemplate(gameCharacters);
      this.$gamePictures.html(characters);

      for (i = 0; i < this.game.characters.length; i++) {
        // Get the URL of fingerprinted asset on users computer (Regex removes Base URL)
        var imagePath = $(`img[alt='${this.game.characters[i].name}']`).prop('src').replace(/^(?:\/\/|[^\/]+)*\//, "");
          // Insert Images Into Character Template
        $(`#selected-character-${i}`).attr('src',imagePath);
      }
    },
    saveCompletedGame: function() {
      // Mark front-end game as complete
      this.game.completed = true;

      // Declare and Assign Module for AJAX
      var originalThis = this;

      // AJAX Params
      var url = "/games/save";
      var game_data = {
        id: this.game.id,
        state: this.game.state
      }

      // AJAX Post to Save Game in Database
      $.ajax({
        type: "POST",
        url: url,
        data: game_data,
        success: function() {
          postGameModule.passCompletedGame(originalThis.game);
          originalThis.unbindEvents();
        },
        // Game will show postgame if user goes offline during game
        error: function() {
          postGameModule.passCompletedGame(originalThis.game);
          originalThis.unbindEvents();
        }
      });
    },
    // Game Modal Functions
    showGameModal: function(evaluate, correctAnswer) {
      // Pass in 'Correct/Incorrect' into Modal Before Displaying It
      this.$gameModalEvaluate.text(evaluate);
      // Pass in Correct Answer into Modal Before Displaying It
      this.$gameModalCorrectAnswer.text("Correct Answer: " + correctAnswer);
      // Display Modal
      this.$gameModal.css('display', 'block');
    },
    hideGameModal: function() {
      this.$gameModal.hide();
      // Check if Game is Complete and/or Render New Quote After Modal Disappears
      this.checkComplete();
    }
  }

  gameModule.init();
  module.exports = gameModule

})()
