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
      this.counter = 0;
      this.renderCharacters(this.game.characters);
      this.renderQuote();
      // Items need to be cached after handlebars templates are rendered
      this.cacheHandlebars();
      this.bindEvents();
      this.bindModalEvents();
    },
    checkAnswer: function(originalEvent) {
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
    checkComplete: function() {
      this.counter++;

      if (this.counter < 10) {
        // Continue Game
        this.renderQuote();
      } else {
        // End Game
        this.saveCompletedGame();
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
    saveCompletedGame: function() {
      this.game.completed = true;
      var originalThis = this;
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
          postGameModule.passCompletedGame(originalThis.game);
        }
      });
    },
    bindModalEvents: function() {
      this.$modal.on('click', this.hideModal.bind(this))
    },
    showModal: function(evaluate, correctAnswer, userAnswer) {
      var originalThis = this;
      this.$modalEvaluate.text(evaluate);
      this.$modalCorrectAnswer.text("Correct Answer: " + correctAnswer);
      this.$modalUserAnswer.text("Your Answer:  " + userAnswer);

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
