class Game {
	constructor(attributes) {
	  this.id = attributes.id;
	  this.characters = attributes.characters;
	  this.quotes = attributes.game_quotes;
	  this.state = JSON.parse(attributes.state);
	  this.completed = attributes.completed;
	}
}
