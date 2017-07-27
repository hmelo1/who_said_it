(function() {

  var postGameModule = {
    cacheDom: function() {
      this.$scoreMeter = $('#scoremeter');
      this.$staticSpan = $('#scoremeter').find('#static-span');
      this.$animateSpan = $('#scoremeter').find('#animate-span');
    },
    passCompletedGame: function(completedGame) {
      this.completedGame = completedGame;
      this.cacheDom();
      this.renderPostGame();
    },
    renderPostGame: function() {
    	var percentageScore = this.completedGame.percentageScore();
    	this.$staticSpan.css('width', percentageScore);
    	this.$animateSpan.addClass('progress');
    }
  }
  module.exports = postGameModule

})()
