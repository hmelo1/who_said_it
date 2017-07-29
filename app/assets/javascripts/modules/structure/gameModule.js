(function() {

  const postGameModule = require('./postGameModule');

  var gameModule = {
    init: function() {
      this.cacheDom();
    },
    cacheDom: function() {
      this.$gameScreen = $('#game-screen');
      this.$gameQuotes = this.$gameScreen.find('#game-quotes');
      this.$gamePictures = this.$gameScreen.find('#game-pictures');
      this.$modal = $('.modal');
      this.$modalEvaluate = this.$modal.find('#evaluate');
      this.$modalCorrectAnswer = this.$modal.find('#correct-answer');
      this.$modalUserAnswer = this.$modal.find('#user-answer');
    },
    cacheHandlebars: function() {
      this.$gameCard = $('.gamecard');
    },
    bindEvents: function() {
      var originalThis = this;
      this.$gameCard.on('click', function(event) {
        originalThis.checkAnswer(event);
      });
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
      // One Bind Event for Modal Close (and check if game is completed)
      this.bindModalEvents();
    },
    checkAnswer: function(originalEvent) {
      // Variables to Check Character ID/NAME of Clicked Card and Character Who Said Quote
      var clickedCardId = $(originalEvent.target).parents('.gamecard').data('id');
      var clickedCardName = $(originalEvent.target).parents('.gamecard').data('name');
      var answerCharacterId = this.game.quotes[this.counter].character_id;
      var answerCharacterName = this.game.quotes[this.counter].character_name;

      if (clickedCardId == answerCharacterId) {
        // Correct Answer
        this.showModal('Correct!', answerCharacterName, clickedCardName);
        this.game.state.push(true);
      } else {
        // Incorrect Answer
        this.showModal('Wrong!', answerCharacterName, clickedCardName);
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
      // Render Handlebars Quote Template
      var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
      var quote = quoteTemplate(this.game.quotes[this.counter]);
      this.$gameQuotes.html(quote);
    },
    renderCharacters: function(gameCharacters) {
      // Get the URL of fingerprinted asset on users computer (Regex removes Base URL)
      var image1path = $(`img[alt='${this.game.characters[0].name}']`).prop('src').replace(/^(?:\/\/|[^\/]+)*\//, "");
      var image2path = $(`img[alt='${this.game.characters[1].name}']`).prop('src').replace(/^(?:\/\/|[^\/]+)*\//, "");

      // Render Handlebars Characters Template
      var pictureTemplate = Handlebars.compile($('#game-picture-template').html());
      var characters = pictureTemplate(gameCharacters);
      this.$gamePictures.html(characters);

      // Insert Images Into Character Template
      $('#selected-character-0').attr('src', image1path);
      $('#selected-character-1').attr('src', image2path);
    },
    saveCompletedGame: function() {
      // Mark non-database game as complete
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
        }
      });
    },
    // Modal Functions
    bindModalEvents: function() {
      // Click Anywhere On Screen To Close Modal
      this.$modal.on('click', this.hideModal.bind(this))
    },
    showModal: function(evaluate, correctAnswer, userAnswer) {
      // Pass in 'Correct/Incorrect' into Modal Before Displaying It
      this.$modalEvaluate.text(evaluate);
      // Pass in Correct Answer into Modal Before Displaying It
      this.$modalCorrectAnswer.text("Correct Answer: " + correctAnswer);
      // Pass in User Answer into Modal Before Displaying It
      this.$modalUserAnswer.text("Your Answer:  " + userAnswer);
      // Display Modal
      this.$modal.css('display', 'block');
    },
    hideModal: function() {
      this.$modal.fadeOut();
      // Check if Game is Complete and/or Render New Quote After Modal Disappears
      this.checkComplete();
    }
  }

  gameModule.init();
  module.exports = gameModule

})()
