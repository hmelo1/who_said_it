class Game {
	constructor(attributes) {
	  this.id = attributes.id;
	  this.characters = attributes.characters;
	  this.quotes = attributes.game_quotes;
	  this.state = attributes.state;
	  this.completed = attributes.completed;
	}

	score() {
		if (this.completed == true) {
			var score = 0;
			for (var i = 0; i < this.state.length; i++) {
				if (this.state[i] == true) {
					score++;
				} 
			}
			var calculatedScore = (score * 10 + "%");
			return calculatedScore;
		} else {
			return "Game Incomplete";
		}
	}

}
