class Game {
	constructor(attributes) {
	  this.id = attributes.id;
	  this.characters = attributes.characters;
	  this.quotes = attributes.quotes;
	  this.state = attributes.state;
	  this.completed = attributes.completed;
	}
}

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
  	var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}