(function() {

  var postGameModule = {
    cacheDom: function() {
      // Variable Assignments
      this.$gameQuotes = $('#game-quotes');
      this.$gameCounter = $('#game-counter');
    	this.$postGameScreen = $('#postgame-screen');
      this.$scoreMeter = this.$postGameScreen.find('#scoremeter');
      // Scoremeter Variables
      this.$staticSpan = this.$scoreMeter.find('#static-span');
      this.$animateSpan = this.$scoreMeter.find('#animate-span');
      this.$scoreField = this.$postGameScreen.find('#score');
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
      // Hide Game Quotes Div
      this.$gameQuotes.hide();
      // Hide Game counter
      this.$gameCounter.hide();
      // Show Post Game Screen
      this.$postGameScreen.fadeIn();
      // Animate the Scoremeter
      this.$animateSpan.addClass('progress');
    }
  }
  module.exports = postGameModule

})()
