(function() {

  var postGameModule = {
    cacheDom: function() {
      // Character Screen
	    this.$characterScreen = $('#character-screen');
      // Game Screen
      this.$gameScreen = $('#game-screen');
      // Game Quotes
      this.$gameQuotes = $('#game-quotes');
      // Game Counter
      this.$gameCounter = $('#game-counter');
      // Post Game Screen
    	this.$postGameScreen = $('#postgame-screen');
      this.$playAgain = this.$postGameScreen.find('button');
      this.$scoreMeter = this.$postGameScreen.find('#scoremeter');
      // Scoremeter
      this.$staticSpan = this.$scoreMeter.find('#static-span');
      this.$animateSpan = this.$scoreMeter.find('#animate-span');
      this.$scoreField = this.$postGameScreen.find('#score');
    },
    bindEvents: function () {
      this.$playAgain.on('click', this.restartGame.bind(this));
    },
    passCompletedGame: function(completedGame) {
      this.completedGame = completedGame;
      this.cacheDom();
      this.renderPostGame();
    },
    renderPostGame: function() {
      // Make Span Width of Scoremeter Equal to percentageScore
    	var percentageScore = this.completedGame.percentageScore();
    	var score = this.completedGame.score();
    	this.$scoreField.text("Score: " + score + "/10");
    	this.$staticSpan.css('width', percentageScore);
      // Hide game quotes and show post game screen
      this.togglePostGame();
    },
    togglePostGame: function() {
      // Hide Game counter
      this.$gameCounter.hide();
      // Hide Game Quotes Div
      this.$gameQuotes.hide();
      // Show Post Game Screen
      this.$postGameScreen.fadeIn();
      // Animate the Scoremeter
      this.$animateSpan.addClass('progress');
      // Bind Click Events
      this.bindEvents();
    },
    restartGame: function () {
      this.$postGameScreen.fadeOut();
      this.$animateSpan.removeClass('progress');
      // Removed Selected Cards
      $('.selected').removeClass('selected');
      // Start Here
    }
  }
  module.exports = postGameModule

})()
