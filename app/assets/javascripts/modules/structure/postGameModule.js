(function() {

  var postGameModule = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function() {
      // Character Screen
	    this.$characterScreen = $('#character-screen');
      // Game Screen
      this.$gameScreen = $('#game-screen');
      // Game Pictures
      this.gamePictures = this.$gameScreen.find('#game-pictures');
      // Game Counter
      this.$gameCounter = this.$gameScreen.find('#game-counter');
      // Game Quotes
      this.$gameQuotes = this.$gameScreen.find('#game-quotes')
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
      // Empty Game Counter
      this.$gameCounter.find('h6').empty();
      // Hide Game Quotes Div
      this.$gameQuotes.empty();
      // Show Post Game Screen
      this.$postGameScreen.removeClass('hide').fadeIn();
      // Animate the Scoremeter
      this.$animateSpan.addClass('progress');
    },
    restartGame: function () {
      // Removed Selected Cards
      $('.selected').removeClass('selected');
      // Hide Post Game Screen
      this.$postGameScreen.addClass('hide').fadeOut();
      this.$animateSpan.removeClass('progress');
      // Empty Game Pictures
      this.gamePictures.empty();
      this.$characterScreen.fadeIn(300);
    }
  }
  postGameModule.init();
  module.exports = postGameModule

})()
