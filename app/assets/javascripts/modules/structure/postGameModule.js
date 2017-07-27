(function() {

  var postGameModule = {
    cacheDom: function() {
      console.log('hi')
    },
    passCompletedGame: function(completedGame) {
      this.completedGame = completedGame;
      this.renderPostGame();
    },
    renderPostGame: function() {
    	
    }
  }
  module.exports = postGameModule

})()
