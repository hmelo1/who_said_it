(function() {

  var postGameModule = {
    cacheDom: function() {
    	this.$postGameScreen = $('#postgame-screen');
      this.$scoreMeter = this.$postGameScreen.find('#scoremeter');
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
    	var percentageScore = this.completedGame.percentageScore();
    	var score = this.completedGame.score();
    	
    	this.$scoreField.text(score + "/10");
    	this.$staticSpan.css('width', percentageScore);
      $('#game-quotes').fadeOut();
      this.$postGameScreen.fadeIn();
    	this.$animateSpan.addClass('progress');
    }
  }
  module.exports = postGameModule

})()
